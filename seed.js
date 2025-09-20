const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Supplier = require("./models/Supplier");
const Product = require("./models/Product");

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");

    // Xoá dữ liệu cũ
    await Supplier.deleteMany({});
    await Product.deleteMany({});

    // Tạo suppliers mẫu
    const suppliers = await Supplier.insertMany([
      { name: "Supplier A", address: "Hà Nội", phone: "0901234567" },
      { name: "Supplier B", address: "TP HCM", phone: "0907654321" },
    ]);

    console.log("Suppliers created:", suppliers);

    // Tạo products mẫu
    const products = await Product.insertMany([
      { name: "Product 1", price: 100, quantity: 10, supplierId: suppliers[0]._id },
      { name: "Product 2", price: 200, quantity: 5, supplierId: suppliers[1]._id },
      { name: "Product 3", price: 150, quantity: 20, supplierId: suppliers[0]._id },
    ]);

    console.log("Products created:", products);

    mongoose.connection.close();
    console.log("Seeding done ✅");
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
};

seedData();
