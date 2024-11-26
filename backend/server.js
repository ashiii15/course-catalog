const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const Course = require('./models/Course'); // Import Course model
const seedCourses = require('./seed/seed'); // Import seed function

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/courseCatalog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected...');
  await seedCourses(); // Seed database after connecting
}).catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/courses', require('./routes/courseRoutes')); // Routes handler

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
