// utils/yelpApi.js
const axios = require("axios");

const yelpAPI = axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
});

module.exports = yelpAPI;
