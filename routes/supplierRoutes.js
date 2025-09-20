const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");
/**
 * @swagger
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: ID tự sinh bởi MongoDB
 *         name:
 *           type: string
 *           description: Tên nhà cung cấp
 *         address:
 *           type: string
 *           description: Địa chỉ
 *         phone:
 *           type: string
 *           description: Số điện thoại
 *       example:
 *         id: 650a9c10f12345abc1234567
 *         name: Công ty ABC
 *         address: Hà Nội
 *         phone: "0987654321"
 */
/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách tất cả suppliers
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Danh sách suppliers
 */
router.get("/", supplierController.getAllSuppliers);
/**
 * @swagger
 * /suppliers/new:
 *   get:
 *     summary: Hiển thị form thêm supplier mới (dùng cho view EJS)
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Trả về trang form new supplier
 */
router.get("/new", supplierController.newSupplierForm);
/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Tạo mới một supplier
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       201:
 *         description: Supplier đã được tạo
 */
router.post("/", supplierController.createSupplier);
/**
 * @swagger
 * /suppliers/{id}/edit:
 *   get:
 *     summary: Hiển thị form chỉnh sửa supplier (dùng cho view EJS)
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID supplier cần chỉnh sửa
 *     responses:
 *       200:
 *         description: Trả về trang form edit supplier
 */
router.get("/:id/edit", supplierController.editSupplierForm);
/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Cập nhật supplier theo ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của supplier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: Supplier đã được cập nhật
 */
router.put("/:id", supplierController.updateSupplier);
/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Xóa supplier theo ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID của supplier
 *     responses:
 *       200:
 *         description: Supplier đã bị xóa
 */
router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
