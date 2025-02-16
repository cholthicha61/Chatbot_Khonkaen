const express = require('express');
const router = express.Router();
const { Client } = require('pg'); 

const client = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL from users route"))
  .catch(err => console.error("Error connecting to PostgreSQL", err.stack));

router.get("/", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users"); 
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err.stack);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
