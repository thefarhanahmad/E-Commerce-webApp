const express = require("express");
const router = express.Router();

// declaring controllers
const { signupUser, loginUser } = require("../controllers/auth");

// declaring routes
router.post("/new", signupUser);
router.post("/login", loginUser);

module.exports = router;
