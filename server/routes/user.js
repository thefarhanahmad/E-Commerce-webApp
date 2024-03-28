const express = require("express");
const router = express.Router();

// declaring controllers
const { signupUser, loginUser, getUserDetails } = require("../controllers/auth");
const { auth } = require("../middlewares/auth");

// declaring routes
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/user", auth, getUserDetails);

module.exports = router;
