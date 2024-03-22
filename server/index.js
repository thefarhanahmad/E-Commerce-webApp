const express = require("express");
const app = express();
// const errorHandler = require("./middlewares/errorHandlerMiddleware");

require("dotenv").config();

//middleware
app.use(express.json());
// Add the error handler middleware as the last middleware
// app.use(errorHandler);

//database connecting
const dbConnect = require("./config/dbConnection");
dbConnect();

//route import and mount
const userRoute = require("./routes/user");
app.use("/api/v1/auth/user", userRoute);

//activate
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App is running at port no. ${PORT}`);
});
