const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Search courses
router.get('/search', async (req, res) => {
  const { query, category, instructor } = req.query;
  try {
    const courses = await Course.find({
      $or: [
        { title: new RegExp(query, 'i') },
        { category: new RegExp(category, 'i') },
        { instructor: new RegExp(instructor, 'i') },
      ],
    });
    res.json(courses);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
