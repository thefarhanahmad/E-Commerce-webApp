const mongoose = require("mongoose");

// Define the food item schema
const foodItemSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

module.exports = FoodItem;
