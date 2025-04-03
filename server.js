// server.js
require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const searchRoutes = require("./routes/search");
const detailsRoutes = require("./routes/details");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/search", searchRoutes);
app.use("/api/details", detailsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
