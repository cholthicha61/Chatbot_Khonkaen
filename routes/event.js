const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log("📩 Received data:", req.body);

  try {
    let {
      event_name,
      description,
      start_time,
      end_time,
      event_month,
      address,
      image_link,
      image_detail,
    } = req.body;

    start_time = start_time && start_time.trim() !== "" ? start_time : null;
    end_time = end_time && end_time.trim() !== "" ? end_time : null;
    event_month = event_month && event_month.trim() !== "" ? event_month : null;
    address = address && address.trim() !== "" ? address : null;
    image_link = image_link && image_link.trim() !== "" ? image_link : null;
    image_detail =
      image_detail && image_detail.trim() !== "" ? image_detail : null;

    if (!event_name || event_name.trim() === "") {
      return res.status(400).json({ error: "Event name is required" });
    }

    const query = `
      INSERT INTO event (event_name, description, start_time, end_time, event_month, address, image_link, image_detail)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;

    const result = await req.client.query(query, [
      event_name,
      description,
      start_time,
      end_time,
      event_month,
      address,
      image_link,
      image_detail,
    ]);

    console.log("✅ Event created:", result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("❌ Error creating event:", err.stack);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const query = "SELECT * FROM event;";
    const result = await req.client.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching event", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "SELECT * FROM event WHERE id = $1;";
    const result = await req.client.query(query, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching event", err.stack);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      event_name,
      description,
      start_time,
      end_time,
      address,
      event_month,
      image_link,
      image_detail,
    } = req.body;

    const existingEvent = await req.client.query(
      "SELECT * FROM event WHERE id = $1;",
      [id]
    );
    if (existingEvent.rows.length === 0) {
      return res.status(404).json({ error: "Event not found" });
    }

    const updates = {
      event_name: event_name || existingEvent.rows[0].event_name,
      description: description || existingEvent.rows[0].description,
      start_time: start_time || existingEvent.rows[0].start_time,
      end_time: end_time || existingEvent.rows[0].end_time,
      address: address || existingEvent.rows[0].address,
      event_month: event_month || existingEvent.rows[0].event_month,
      image_link: image_link || existingEvent.rows[0].image_link,
      image_detail: image_detail || existingEvent.rows[0].image_detail,
    };

    const query = `
      UPDATE event
      SET event_name = $1, description = $2, start_time = $3, end_time = $4, address = $5, event_month = $6, image_link = $7, image_detail = $8
      WHERE id = $9
      RETURNING *;
    `;

    const result = await req.client.query(query, [
      updates.event_name,
      updates.description,
      updates.start_time,
      updates.end_time,
      updates.address,
      updates.event_month,
      updates.image_link,
      updates.image_detail,
      id,
    ]);

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating event:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🗑️ Attempting to delete event with ID:", id);

    if (!id) {
      return res.status(400).json({ error: "Event ID is required" });
    }

    const query = "DELETE FROM event WHERE id = $1 RETURNING *;";
    const result = await req.client.query(query, [id]);

    if (result.rows.length === 0) {
      console.warn("⚠️ Event not found, ID:", id);
      return res.status(404).json({ error: "Event not found" });
    }

    console.log("✅ Event deleted:", result.rows[0]);
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    console.error("❌ Error deleting event:", err.stack);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

module.exports = router;
