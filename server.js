const { app } = require('./app');
const connectDB = require('./src/config/database');

const PORT = process.env.PORT || 3000;

// Start server
const server = app.listen(PORT, async () => {
  // Connect to database
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});
module.exports = { server };
