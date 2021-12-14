const express = require("express");
//const {  } = require('../controller/category');
const {
  requireLogin,
  adminMiddleware,
  upload,
} = require("../common-middleware");
const {
  createProduct,
  getProductsBySlug,
  getProductDetailsById,
  deleteProductById,
  getProducts,
} = require("../controller/product");

const router = express.Router();
const shortid = require("shortid");
const path = require("path");

router.post(
  "/product/create",
  requireLogin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);
router.get("/products/:slug", getProductsBySlug);
router.get("/product/:productId", getProductDetailsById);
router.delete(
  "/product/delete",
  requireLogin,
  adminMiddleware,
  deleteProductById
);
router.post("/product", requireLogin, adminMiddleware, getProducts);

module.exports = router;
