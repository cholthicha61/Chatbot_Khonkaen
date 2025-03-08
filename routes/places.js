const express = require("express");  
const router = express.Router();

// ฟังก์ชันอัปเดตจำนวนแถวในฐานข้อมูล
const updateTableCount = async (dbClient, tableName, rowCount) => {
  try {
    const query = `
      INSERT INTO table_counts (table_name, row_count)
      VALUES ($1, $2)
      ON CONFLICT (table_name) 
      DO UPDATE SET row_count = EXCLUDED.row_count, updated_at = CURRENT_TIMESTAMP;
    `;
    await dbClient.query(query, [tableName, rowCount]);
  } catch (err) {
    console.error(`Error updating row count for ${tableName}:`, err.stack);
  }
};

const getTableCounts = async (client) => {
  try {
    const tables = ["users", "web_answer", "conversations", "places"];
    for (const table of tables) {
      const res = await client.query(`SELECT COUNT(*) FROM ${table}`);
      const rowCount = parseInt(res.rows[0].count, 10);
      await updateTableCount(client, table, rowCount);
    }
  } catch (err) {
    console.error("Error fetching table counts", err.stack);
    throw err;
  }
};

// สร้างสถานที่ใหม่
router.post("/", async (req, res) => {
  try {
    const places = Array.isArray(req.body) ? req.body : [req.body];
    if (!places.length) {
      return res.status(400).json({ error: "Invalid input: At least one place is required" });
    }

    const placeValues = places.map(p => [
      p.name, p.description || null, p.admission_fee || null, p.address, 
      p.contact_link || null, p.opening_hours || null
    ]);

    const placeQuery = `
      INSERT INTO places (name, description, admission_fee, address, contact_link, opening_hours)
      VALUES ${placeValues.map((_, i) => `($${i * 6 + 1}, $${i * 6 + 2}, $${i * 6 + 3}, $${i * 6 + 4}, $${i * 6 + 5}, $${i * 6 + 6})`).join(", ")}
      RETURNING id, name;
    `;

    const placeResult = await req.client.query(placeQuery, placeValues.flat());
    const insertedPlaces = placeResult.rows;

    // เพิ่มข้อมูลรูปภาพถ้ามี
    const imageValues = [];
    insertedPlaces.forEach((place, index) => {
      (places[index].images || []).forEach(img => {
        imageValues.push([place.id, img.image_link, img.image_detail || null]);
      });
    });

    if (imageValues.length) {
      const imageQuery = `
        INSERT INTO place_images (place_id, image_link, image_detail)
        VALUES ${imageValues.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(", ")}
        RETURNING *;
      `;
      await req.client.query(imageQuery, imageValues.flat());
    }

    await getTableCounts(req.client);
    res.status(201).json({ message: "Places added successfully", places: insertedPlaces });
  } catch (err) {
    console.error("Error creating places", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ดึงข้อมูลสถานที่ทั้งหมด
router.get("/", async (req, res) => {
  const query = `
    SELECT places.*, json_agg(json_build_object('image_link', place_images.image_link, 'image_detail', place_images.image_detail)) AS images
    FROM places
    LEFT JOIN place_images ON places.id = place_images.place_id
    GROUP BY places.id;
  `;

  try {
    const result = await req.client.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching places", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ดึงข้อมูลสถานที่ตาม ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const placeResult = await req.client.query("SELECT * FROM places WHERE id = $1;", [id]);
    if (!placeResult.rows.length) return res.status(404).json({ error: "Place not found" });
    const imageResult = await req.client.query("SELECT * FROM place_images WHERE place_id = $1;", [id]);
    res.json({ ...placeResult.rows[0], images: imageResult.rows });
  } catch (err) {
    console.error("Error fetching place", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// อัปเดตข้อมูลสถานที่
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, admission_fee, address, contact_link, opening_hours, images } = req.body;

  try {
    const placeQuery = `
      UPDATE places SET name = $1, description = $2, admission_fee = $3, address = $4, contact_link = $5, opening_hours = $6
      WHERE id = $7 RETURNING *;
    `;

    const placeResult = await req.client.query(placeQuery, [
      name, description, admission_fee, address, contact_link, opening_hours, id
    ]);

    if (!placeResult.rows.length) return res.status(404).json({ error: "Place not found" });

    if (images && images.length) {
      await req.client.query("DELETE FROM place_images WHERE place_id = $1;", [id]);
      const imageValues = images.map(img => [id, img.image_link, img.image_detail || null]);
      const imageQuery = `
        INSERT INTO place_images (place_id, image_link, image_detail)
        VALUES ${imageValues.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(", ")}
        RETURNING *;
      `;
      await req.client.query(imageQuery, imageValues.flat());
    }

    res.json(placeResult.rows[0]);
  } catch (err) {
    console.error("Error updating place", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ดึงข้อมูลรูปภาพของสถานที่
router.get("/:id/images", async (req, res) => {
  const { id } = req.params;
  try {
    const imageResult = await req.client.query("SELECT * FROM place_images WHERE place_id = $1;", [id]);
    if (!imageResult.rows.length) return res.status(404).json({ error: "Images not found" });
    res.json(imageResult.rows);
  } catch (err) {
    console.error("Error fetching images", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ลบสถานที่
router.delete("/:id", async (req, res) => {
  try {
    const result = await req.client.query("DELETE FROM places WHERE id = $1 RETURNING *;", [req.params.id]);
    if (!result.rows.length) return res.status(404).json({ error: "Place not found" });
    res.status(204).send();
  } catch (err) {
    console.error("Error deleting place", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
