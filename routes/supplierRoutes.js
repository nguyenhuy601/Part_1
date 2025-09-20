const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

router.get("/", supplierController.getAllSuppliers);
router.get("/new", supplierController.newSupplierForm);
router.post("/", supplierController.createSupplier);
router.get("/:id/edit", supplierController.editSupplierForm);
router.put("/:id", supplierController.updateSupplier);
router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;
