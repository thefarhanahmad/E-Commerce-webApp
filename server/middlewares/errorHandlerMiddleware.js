// const errorHandler = (err, req, res, next) => {
//   return res.status(400).json({
//     success: false,
//     message: "Internal server error",
//     error: err,
//   });

//   //   console.error(err.stack);

//   // Check if the error is a known error with a specific status code
//   //   if (err.statusCode) {
//   //     res.status(err.statusCode).json({ error: err.message });
//   //   } else {
//   //     // If the error doesn't have a specific status code, return a generic 500 Internal Server Error
//   //     res.status(500).json({ error: "Internal Server Error" });
//   //   }
// };

// module.exports = errorHandler;
