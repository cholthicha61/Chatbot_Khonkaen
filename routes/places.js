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
  console.log(req.body);
  try {
    const {
      name,
      description,
      admission_fee,
      address,
      contact_link,
      opening_hours,
      image_link,
      image_detail,
    } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Place name is required" });
    }

    const query = `
    INSERT INTO places (name, description, admission_fee, address, contact_link, opening_hours, image_link, image_detail)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;

    await getTableCounts(req.client);

    const result = await req.client.query(query, [
      name,
      description,
      admission_fee,
      address,
      contact_link,
      opening_hours,
      image_link,
      image_detail,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating place", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/", async (req, res) => {
  const query = `
    SELECT * FROM places;
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
  const query = "SELECT * FROM places WHERE id = $1;";

  try {
    const result = await req.client.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json(result.rows[0]);
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
    image_link,
    image_detail,
  } = req.body;

  const query = `
  UPDATE places
  SET name = $1, description = $2, admission_fee = $3, address = $4, contact_link = $5, opening_hours = $6, image_link = $7, image_detail = $8
  WHERE id = $9
  RETURNING *;
`;

  try {
    const result = await req.client.query(query, [
      name,
      description,
      admission_fee,
      address,
      contact_link,
      opening_hours,
      image_link,
      image_detail,
      id
    ]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json(result.rows[0]);
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
