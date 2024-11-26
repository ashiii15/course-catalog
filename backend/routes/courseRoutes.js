const express = require('express');
const Course = require('../models/Course');

const router = express.Router();

// Fetch all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses from MongoDB
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

module.exports = router;
