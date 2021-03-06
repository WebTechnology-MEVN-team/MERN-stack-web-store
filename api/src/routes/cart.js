const express = require("express");
const {
  addItemToCart,
  getCartItems,
  removeCartItems,
} = require("../controller/cart");
const { requireLogin, userMiddleware } = require("../common-middleware");
const router = express.Router();

router.post(
  "/user/cart/add-to-cart",
  requireLogin,
  userMiddleware,
  addItemToCart
);
router.post("/user/getCartItems", requireLogin, userMiddleware, getCartItems);
//new update
router.post(
  "/user/cart/removeItem",
  requireLogin,
  userMiddleware,
  removeCartItems
);

module.exports = router;
