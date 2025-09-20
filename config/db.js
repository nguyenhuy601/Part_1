const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔌 Connecting to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ MongoDB Atlas Connected!");
  } catch (err) {
    console.error("❌ MongoDB Atlas connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
