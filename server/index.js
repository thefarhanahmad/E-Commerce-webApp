const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandlerMiddleware");

require("dotenv").config();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);

//database connecting
const dbConnect = require("./config/dbConnection");
dbConnect();

//route import and mount
const userRoute = require("./routes/user");
const foodsRoute = require("./routes/foods");
app.use("/api/v1/auth", userRoute);
app.use("/api/v1", foodsRoute);

// checking default api
app.get("/", (req, res) => {
  res.send("App is running");
});

//activate
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running at port no. ${PORT}`);
});
