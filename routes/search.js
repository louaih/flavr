// routes/search.js
const express = require("express");
const router = express.Router();
const yelpAPI = require("../utils/yelpApi");

router.get("/", async (req, res) => {
  const { location, term, price, rating } = req.query;

  // Yelp API 必须要有 location 参数
  if (!location) {
    return res.status(400).json({ error: "Missing required parameter: location" });
  }

  try {
    // 构造参数
    const params = {
      location,
      term: term || "restaurant",
      limit: 20,
    };

    // 添加价格过滤（可选）
    if (price) {
      params.price = price; // 示例："1", "1,2", "2,3,4"
    }

    // 发送请求
    const response = await yelpAPI.get("/businesses/search", { params });

    let results = response.data.businesses;

    // 本地筛选评分
    if (rating) {
      results = results.filter((item) => item.rating >= parseFloat(rating));
    }

    res.json(results);
  } catch (error) {
    console.error("Yelp API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

module.exports = router;
