const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "vendor"], // Only allow 'user' or 'vendor'
      default: "user", // Default role is 'user'
    },
    // Additional fields for vendors
    restaurant: {
      type: String,
      required: function () {
        return this.role === "vendor"; // Required only if role is 'vendor'
      },
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    dob: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
