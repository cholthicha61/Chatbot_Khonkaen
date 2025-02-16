const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, place_id } = req.body;

  // ตรวจสอบว่า place_id เป็นตัวเลข
  if (!name || name.trim() === "") {
    return res.status(400).json({ error: "Name is required." });
  }
  if (!place_id || isNaN(place_id)) {
    return res.status(400).json({ error: "place_id must be a valid integer." });
  }

  const query = `
    INSERT INTO tourist_destinations (name, place_id)
    VALUES ($1, $2)
    RETURNING *;
  `;

  try {
    const result = await req.client.query(query, [
      name,
      parseInt(place_id, 10),
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating tourist destination:", err.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.get("/", async (req, res) => {
  const query = `
    SELECT 
      td.id AS tourist_id, 
      td.name AS tourist_name, 
      td.place_id, 
      td.created_at, 
      p.name AS place_name,
      p.description, 
      p.admission_fee, 
      p.address, 
      p.contact_link, 
      p.opening_hours, 
      p.image_link, 
      p.image_detail  
    FROM tourist_destinations td
    LEFT JOIN places p ON td.place_id = p.id;
  `;

  try {
    const result = await req.client.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching tourist destinations:", err.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT 
      td.id AS tourist_id, 
      td.name AS tourist_name, 
      td.place_id, 
      td.created_at, 
      p.name AS place_name,
      p.description, 
      p.admission_fee, 
      p.address, 
      p.contact_link, 
      p.opening_hours, 
      p.image_link, 
      p.image_detail 
    FROM tourist_destinations td
    LEFT JOIN places p ON td.place_id = p.id
    WHERE td.id = $1;
  `;

  try {
    const result = await req.client.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Tourist destination not found." });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching tourist destination:", err.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, place_id } = req.body;

  const query = `
    UPDATE tourist_destinations
    SET name = COALESCE($1, name),
        place_id = COALESCE($2, place_id)
    WHERE id = $3
    RETURNING *;
  `;

  try {
    const result = await req.client.query(query, [name, place_id, id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Tourist destination not found." });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error updating tourist destination:", err.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const query = `
    DELETE FROM tourist_destinations
    WHERE id = $1
    RETURNING *;
  `;

  try {
    const result = await req.client.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Tourist destination not found." });
    }
    res.status(204).send();
  } catch (err) {
    console.error("Error deleting tourist destination:", err.message);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = router;
