const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect Database
const connectDB = require('./config/db');
connectDB();

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Test Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// User Routes

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Error Handler
const errorHandler = require('./utils/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));