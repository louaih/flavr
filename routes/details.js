// routes/details.js
const express = require("express");
const router = express.Router();
const yelpAPI = require("../utils/yelpApi");

router.get("/:id", async (req, res) => {
  const businessId = req.params.id;

  try {
    const response = await yelpAPI.get(`/businesses/${businessId}`);
    res.json(response.data);
  } catch (error) {
    console.error("Yelp Details Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch restaurant details" });
  }
});

module.exports = router;
