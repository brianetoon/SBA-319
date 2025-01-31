const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log full error for debugging

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: err.errors,
    });
  }

  // Handle CastErrors (e.g., invalid MongoDB ObjectId)
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format",
    });
  }

  // Generic Server Error
  res.status(500).json({
    success: false,
    error: err.message || "Something went wrong",
  });
};

export default errorHandler;