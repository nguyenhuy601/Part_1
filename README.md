# 🛠️ Node.js MVC CRUD Product - Supplier

## 📌 Giới thiệu
Dự án này xây dựng một website CRUD quản lý **Nhà cung cấp (Supplier)** và **Sản phẩm (Product)**.  
Ứng dụng được phát triển theo kiến trúc **MVC** sử dụng **Node.js + Express**, **MongoDB + Mongoose** và **EJS + Bootstrap**.

---

## 🚀 Tính năng
- Quản lý **Suppliers** (Thêm, Sửa, Xoá, Liệt kê).
- Quản lý **Products** (Thêm, Sửa, Xoá, Liệt kê).
- Giao diện thân thiện với **Bootstrap 5**.
- Sử dụng **Method-Override** để hỗ trợ PUT/DELETE trong form.
- File **`.env`** để cấu hình thông tin kết nối.
- Cấu hình **Swagger** để mô tả API.
- File **seed.js** để sinh dữ liệu mẫu vào MongoDB.

---
⚙️ Công nghệ sử dụng

Node.js
 – JavaScript runtime

Express.js
 – Web framework cho Node.js

MongoDB
 – Cơ sở dữ liệu NoSQL

Mongoose
 – ODM cho MongoDB

EJS
 – Template engine cho giao diện

Bootstrap 5
 – CSS framework cho giao diện

Method-Override
 – Hỗ trợ PUT/DELETE trong form HTML

## 📂 Cấu trúc thư mục
.
├── config
│   ├── db.js            # Kết nối MongoDB
├── controllers
│   ├── productController.js
│   ├── supplierController.js
├── models
│   ├── Product.js
│   ├── Supplier.js
├── routes
│   ├── productRoutes.js
│   ├── supplierRoutes.js
├── views
│   ├── products/
│   ├── suppliers/
├── public
│   ├── css/
│   ├── js/
├── .gitignore
├── package.json
├── app.js               # Entry point của ứng dụng
└── README.md            # Tài liệu dự án
---
Supplier Routes
Method	URL	Mô tả
GET	/suppliers	Hiển thị danh sách nhà cung cấp
GET	/suppliers/new	Hiển thị form thêm nhà cung cấp
POST	/suppliers	Thêm nhà cung cấp mới
GET	/suppliers/:id/edit	Hiển thị form sửa nhà cung cấp
PUT	/suppliers/:id	Cập nhật nhà cung cấp
DELETE	/suppliers/:id	Xóa nhà cung cấp
---
Product Routes
Method	URL	Mô tả
GET	/products	Hiển thị danh sách sản phẩm
GET	/products/new	Hiển thị form thêm sản phẩm
POST	/products	Thêm sản phẩm mới
GET	/products/:id/edit	Hiển thị form sửa sản phẩm
PUT	/products/:id	Cập nhật sản phẩm
DELETE	/products/:id	Xóa sản phẩm
---
MIT License