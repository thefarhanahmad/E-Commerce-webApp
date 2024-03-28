const express = require("express");
const router = express.Router();

// declaring controllers
const {
  createFoodItem,
  getAllFoods,
  getMyFoodItems,
} = require("../controllers/foodItems");
const { isVendor, auth } = require("../middlewares/auth");

// declaring routes
router.post("/foods", auth, isVendor, createFoodItem);
router.get("/myFoodItems", auth, isVendor, getMyFoodItems);
router.get("/foods", getAllFoods);

module.exports = router;
