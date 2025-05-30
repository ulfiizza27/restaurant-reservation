const express = require('express');
const dotenv = require('dotenv');

const menuRoutes = require('./src/routes/menuRoutes');
const mejaRoutes = require('./src/routes/mejaRoutes');
const orderRoutes = require('./src/routes/orderRoutes');

const errorHandler = require('./src/middleware/errorHandler');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Welcome to Restaurant Reservation API' });
});

app.use('/', menuRoutes);
app.use('/', mejaRoutes);
app.use('/', orderRoutes);

app.use(errorHandler);

module.exports = { app };
