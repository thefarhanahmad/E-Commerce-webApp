const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup user handler
const signupUser = async (req, res, next) => {
  try {
    // fetching data
    // console.log("fething data from body")
    const { name, email, gender, dob, password, role, restaurant } = req.body;

    // validation
    if (!name || !email || !password || !gender || !dob) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        success: false,
        message: "User already exists,please Login",
      });
    }

    // hashing password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // now create user and insert in db
    const user = await User.create({
      name: name,
      email: email,
      gender: gender,
      role,
      restaurant,
      dob: dob,
      password: hashedPassword,
      avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${name}&hair=short01,short02,short03,short04,short05`,
    });

    user.password = undefined;

    // if created user send response
    return res.status(201).json({
      success: true,
      message: "User created",
      userId: user._id,
      userEmail: user.email,
    });
  } catch (error) {
    next(error);
  }
};

// login user handler
const loginUser = async (req, res, next) => {
  try {
    // fetch data
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are required",
      });
    }

    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({
        success: false,
        message: "user not exists, try to signup",
      });
    }

    const passwordMatching = await bcrypt.compare(
      password,
      userExists.password
    );
    if (!passwordMatching) {
      return res.status(400).json({
        success: false,
        message: "password doesn't match",
      });
    }

    // if all done,create token and store in cookies
    const payload = {
      id: userExists._id,
      email: userExists.email,
      role: userExists.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // Set JWT as cookie
    res.cookie("token", token, { httpOnly: true });

    // return response
    return res.status(201).json({
      success: true,
      message: "User loggedIn successful",
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

// get logged in user details
const getUserDetails = async (req, res, next) => {
  try {
    const user = req.user;

    const userDetails = await User.findById(user.id).select("-password").exec();
    return res.status(200).json({
      message: "user fetched",
      user: userDetails,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signupUser, loginUser, getUserDetails };
