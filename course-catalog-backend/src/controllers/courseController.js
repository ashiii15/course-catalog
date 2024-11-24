const Course = require('../models/Course');

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Search courses
exports.searchCourses = async (req, res) => {
  const { query } = req.query;
  try {
    const courses = await Course.find({
      $or: [
        { title: new RegExp(query, 'i') },
        { category: new RegExp(query, 'i') },
        { instructor: new RegExp(query, 'i') },
      ],
    });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
