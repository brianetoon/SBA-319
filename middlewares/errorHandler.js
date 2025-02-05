const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

   // 404 Not Found errors
   if (err.status === 404) {
    return res.status(404).json({ 
      success: false, 
      error: err.message || "Resource not found" 
    });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: "Validation failed",
      details: err.errors,
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: "Invalid ID format",
    });
  }

  // Generic Server Error
  res.status(500).json({
    success: false,
    error: err.message || "Something went wrong 🤷",
  });
};

export default errorHandler;