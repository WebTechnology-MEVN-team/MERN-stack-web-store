const express = require("express");
const { register, login, logout } = require("../../controller/admin/auth");
const {
  validateRegisterRequest,
  isRequestValidated,
  validateLoginRequest,
} = require("../../validators/auth");
const { requireLogin } = require("../../common-middleware");
const router = express.Router();

router.post(
  "/admin/register",
  validateRegisterRequest,
  isRequestValidated,
  register
);
router.post("/admin/login", validateLoginRequest, isRequestValidated, login);
router.post("/admin/logout", requireLogin, logout);

module.exports = router;
