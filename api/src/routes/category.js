const express = require("express");
const {
  addCategory,
  getCategories,
  updateCategories,
  deleteCategories,
} = require("../controller/category");
const {
  requireLogin,
  adminMiddleware,
  superAdminMiddleware,
} = require("../common-middleware");
const router = express.Router();
const shortid = require("shortid");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/category/create",
  requireLogin,
  superAdminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/get-category", getCategories);
router.post(
  "/category/update",
  requireLogin,
  superAdminMiddleware,
  upload.array("categoryImage"),
  updateCategories
);
router.post(
  "/category/delete",
  requireLogin,
  superAdminMiddleware,
  deleteCategories
);

module.exports = router;
