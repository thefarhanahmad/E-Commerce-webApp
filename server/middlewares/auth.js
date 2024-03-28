const jwt = require("jsonwebtoken");

// Middleware to authenticate requests
const auth = (req, res, next) => {
  // fething token from cookies
  const token = req.headers["authorization"] || req.cookies["token"];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Access denied. No token provided." });
  }

  // Verify token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Failed to authenticate token." });
    }
    // If token is valid, save decoded user information to request object for further processing
    req.user = decoded;
    // console.log("decoded : ", decoded);
    next();
  });
};

// Middleware to restrict access to users with the "vendor" role
const isVendor = (req, res, next) => {
  // Check if user is authenticated and has the "vendor" role
  const user = req.user;
  console.log("user",user)
  if (!user || user.role !== "vendor") {
    return res
      .status(403)
      .json({
        success: false,
        message: "Access forbidden. Only vendors allowed.",
      });
  }
  // If user is authenticated and has the "vendor" role, proceed to the next middleware or route handler
  next();
};

module.exports = { auth, isVendor };
