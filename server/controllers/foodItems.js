const FoodItem = require("../models/foodItems");

// Controller to create a new food item
const createFoodItem = async (req, res, next) => {
  try {
    // Extract fields from request body
    const { foodName, price, imageUrl, description } = req.body;
    console.log(foodName, price, imageUrl, description);

    // Get the vendor ID from the authenticated user (assuming it's stored in req.user)
    const vendorId = req.user.id;
    console.log("vendor id", vendorId);

    // validation
    if (!foodName || !price || !imageUrl || !description || !vendorId) {
      res
        .status(201)
        .json({ success: false, message: "All fields are required" });
    }

    // Create a new food item instance
    const foodItem = await FoodItem.create({
      foodName,
      price,
      imageUrl,
      description,
      restaurant: vendorId,
    });

    // Respond with the saved food item
    res.status(201).json({
      success: true,
      message: "Food items created successfully",
      data: foodItem,
    });
  } catch (error) {
    // Handle error
    next(error);
  }
};

// get all foods handler
const getAllFoods = async (req, res, next) => {
  try {
    const allFoods = await FoodItem.find()
      .populate({
        path: "restaurant",
        select: "-password",
      })
      .exec();
    if (!allFoods) {
      res.status(401).json({
        success: false,
        message: "Foods not found",
      });
    }

    // Respond with the saved food item
    res.status(201).json({
      success: true,
      message: "Food items fetched successfully",
      items: allFoods.length,
      data: allFoods,
    });
  } catch (error) {
    next(error);
  }
};

// get only my foods handler
const getMyFoodItems = async (req, res, next) => {
  try {
    // Get the vendor ID from the authenticated user
    const vendorId = req.user.id;

    // Find food items created by the logged-in vendor
    const myFoodItems = await FoodItem.find({ restaurant: vendorId })
      .populate({
        path: "restaurant",
        select: "-password", // Exclude the password field
      })
      .exec();

    // Respond with the food items created by the logged-in vendor
    res.status(200).json({ success: true, data: myFoodItems });
  } catch (error) {
    // Handle error
    next(error);
  }
};

// Controller to delete a food item
const deleteFoodItem = async (req, res, next) => {
  try {
    // Extract the food item ID from the request parameters
    const { id } = req.params;

    // Delete the food item from the database
    const deletedFoodItem = await FoodItem.findByIdAndDelete(id);

    if (!deletedFoodItem) {
      // If the food item with the given ID is not found
      return res
        .status(404)
        .json({ success: false, message: "Food item not found" });
    }

    // Respond with a success message
    res
      .status(200)
      .json({ success: true, message: "Food item deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFoodItem,
  getAllFoods,
  getMyFoodItems,
  deleteFoodItem,
};
