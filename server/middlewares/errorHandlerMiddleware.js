const errorHandler = (err, req, res, next) => {
  return res.status(400).json({
    success: false,
    message: "Internal server error",
    error: err,
  });

};

module.exports = errorHandler;
