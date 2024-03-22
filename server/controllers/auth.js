const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup user handler
const signupUser = async (req, res, next) => {
  try {
    // fetching data
    const { name, email, gender, dob, password } = req.body;

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
      dob: dob,
      password: hashedPassword,
      avatar: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${name}&hair=short01,short02,short03,short04,short05`,
    });

    // if created user send response
    return res.status(201).json({
      success: true,
      message: "User created",
      userId: user._id,
      userEmail: user.email,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error while singup user",
      error: error,
    });
    // next(error);
  }
};

// login user handler
const loginUser = async (req, res, next) => {
  try {
    // fetch data
    const { email, password } = req.body;

    // validation
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({
        success: false,
        message: "user not exists, try to signup",
        error: error,
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
        error: error,
      });
    }

    // if all done,create token and store in cookies
    const payload = {
      id: userExists._id,
      email: userExists.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    // Set JWT as cookie
    res.cookie("token", token, { httpOnly: true });

    return res.status(201).json({
      success: true,
      message: "User loggedIn successful",
      token: token,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error while login user",
      error: error,
    });
  }
};

module.exports = { signupUser, loginUser };
