const express = require("express");
const { requireLogin, adminMiddleware } = require("../../common-middleware");
const { initialData } = require("../../controller/admin/initialData");
const router = express.Router();

router.post("/initial-data", requireLogin, adminMiddleware, initialData);

module.exports = router;
