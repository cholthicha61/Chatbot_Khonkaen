const express = require("express"); 
const router = express.Router();

const updateTableCount = async (dbClient, tableName, rowCount) => {
  try {
    console.log(`Updating row count for ${tableName} to ${rowCount}`);
    const query = `
      INSERT INTO table_counts (table_name, row_count)
      VALUES ($1, $2)
      ON CONFLICT (table_name) 
      DO UPDATE SET row_count = EXCLUDED.row_count, updated_at = CURRENT_TIMESTAMP;
    `;
    await dbClient.query(query, [tableName, rowCount]);
    console.log(`Row count for ${tableName} updated to ${rowCount}.`);
  } catch (err) {
    console.error(`Error updating row count for ${tableName}:`, err.stack);
  }
};

const getTableCounts = async (client) => {
  try {
    const queries = [
      { tableName: "users", query: "SELECT COUNT(*) FROM users" },
      { tableName: "web_answer", query: "SELECT COUNT(*) FROM web_answer" },
      {
        tableName: "conversations",
        query: "SELECT COUNT(*) FROM conversations",
      },
      { tableName: "places", query: "SELECT COUNT(*) FROM places" },
    ];

    for (const { tableName, query } of queries) {
      const res = await client.query(query);
      console.log(`Query result for ${tableName}:`, res.rows);
      const rowCount = parseInt(res.rows[0].count, 10);

      console.log(`Final count for ${tableName}: ${rowCount}`);

      await updateTableCount(client, tableName, rowCount);
    }
  } catch (err) {
    console.error("Error fetching table counts", err.stack);
    throw err;
  }
};

router.post("/", async (req, res) => {
  console.log("Received payload:", JSON.stringify(req.body, null, 2));

  try {
    // const places = req.body; // ควรเป็น Array ของสถานที่
    const places = Array.isArray(req.body) ? req.body : [req.body]; 

    if (!Array.isArray(places) || places.length === 0) {
      return res.status(400).json({ error: "Invalid input: At least one place is required" });
    }

    // 1️⃣ **INSERT ข้อมูลสถานที่ทั้งหมดในครั้งเดียว**
    const placeValues = places.map(p => [
      p.name, 
      p.description || null, 
      p.admission_fee !== undefined ? p.admission_fee : null, 
      p.address, 
      p.contact_link || null, 
      p.opening_hours || null
    ]);
    
    const placeQuery = `
      INSERT INTO places (name, description, admission_fee, address, contact_link, opening_hours)
      VALUES ${placeValues.map((_, i) => `($${i * 6 + 1}, $${i * 6 + 2}, $${i * 6 + 3}, $${i * 6 + 4}, $${i * 6 + 5}, $${i * 6 + 6})`).join(", ")}
      RETURNING id, name;
    `;

    const flatPlaceValues = placeValues.flat();
    const placeResult = await req.client.query(placeQuery, flatPlaceValues);
    const insertedPlaces = placeResult.rows;

    // 2️⃣ **INSERT ข้อมูลรูปภาพทั้งหมด**
    const imageValues = [];
    insertedPlaces.forEach((place, index) => {
      const placeImages = places[index].images || [];
      placeImages.forEach(img => {
        imageValues.push([place.id, img.image_link, img.image_detail || null]);
      });
    });

    if (imageValues.length > 0) {
      const imageQuery = `
        INSERT INTO place_images (place_id, image_link, image_detail)
        VALUES ${imageValues.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(", ")}
        RETURNING *;
      `;

      const flatImageValues = imageValues.flat();
      await req.client.query(imageQuery, flatImageValues);
    }

    await getTableCounts(req.client);
    res.status(201).json({ message: "Places added successfully", places: insertedPlaces });

  } catch (err) {
    console.error("Error creating places", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  const query = `
    SELECT places.*, 
      json_agg(json_build_object('image_link', place_images.image_link, 'image_detail', place_images.image_detail)) AS images
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const placeQuery = "SELECT * FROM places WHERE id = $1;";
  const imageQuery = "SELECT * FROM place_images WHERE place_id = $1;";

  try {
    const placeResult = await req.client.query(placeQuery, [id]);
    if (placeResult.rows.length === 0) {
      return res.status(404).json({ error: "Place not found" });
    }

    const imageResult = await req.client.query(imageQuery, [id]);

    res.json({ ...placeResult.rows[0], images: imageResult.rows });
  } catch (err) {
    console.error("Error fetching place", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  console.log(`Updating place with id: ${id}`);

  const {
    name,
    description,
    admission_fee,
    address,
    contact_link,
    opening_hours,
    images, // Array ของรูปภาพใหม่
  } = req.body;

  try {
    // อัปเดตข้อมูลสถานที่
    const placeQuery = `
      UPDATE places
      SET name = $1, description = $2, admission_fee = $3, address = $4, contact_link = $5, opening_hours = $6
      WHERE id = $7
      RETURNING *;
    `;

    const placeResult = await req.client.query(placeQuery, [
      name,
      description,
      admission_fee,
      address,
      contact_link,
      opening_hours,
      id
    ]);

    if (placeResult.rows.length === 0) {
      return res.status(404).json({ error: "Place not found" });
    }

    // ถ้ามีการอัปเดตรูปภาพ
    if (images && Array.isArray(images) && images.length > 0) {
      // ลบรูปเก่าของสถานที่นี้
      await req.client.query("DELETE FROM place_images WHERE place_id = $1;", [id]);

      // เพิ่มรูปภาพใหม่
      const imageValues = images.map(img => [id, img.image_link, img.image_detail || null]);
      const imageQuery = `
        INSERT INTO place_images (place_id, image_link, image_detail)
        VALUES ${imageValues.map((_, i) => `($${i * 3 + 1}, $${i * 3 + 2}, $${i * 3 + 3})`).join(", ")}
        RETURNING *;
      `;

      const flatValues = imageValues.flat();
      const imageResult = await req.client.query(imageQuery, flatValues);

      res.json({ ...placeResult.rows[0], images: imageResult.rows });
    } else {
      res.json(placeResult.rows[0]);
    }
  } catch (err) {
    console.error("Error updating place", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM places WHERE id = $1 RETURNING *;";

  try {
    const result = await req.client.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error("Error deleting place", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
