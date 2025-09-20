const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

dotenv.config();
const connectDB = require("./config/db"); // ✅ import db.js

// ✅ gọi connectDB()
connectDB();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
const supplierRoutes = require("./routes/supplierRoutes");
const productRoutes = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.send("Hello! Server is running 🚀");
});
app.use("/suppliers", supplierRoutes);
app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
