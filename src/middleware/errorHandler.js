const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Default status code dan pesan error
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: message
  });
};

module.exports = errorHandler;
