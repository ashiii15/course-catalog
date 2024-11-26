const express = require('express');
const User = require('../models/User');
const Course = require('../models/Course');
const router = express.Router();

// Enroll in a course
router.post('/:userId/enroll/:courseId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const course = await Course.findById(req.params.courseId);

    if (!user || !course) return res.status(404).json({ msg: 'User or Course not found' });

    user.enrolledCourses.push({ course: course._id });
    await user.save();

    res.json({ msg: 'Enrolled successfully', enrolledCourses: user.enrolledCourses });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Unenroll from a course
router.delete('/:userId/unenroll/:courseId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.enrolledCourses = user.enrolledCourses.filter(
      (enrollment) => enrollment.course.toString() !== req.params.courseId
    );

    await user.save();

    res.json({ msg: 'Unenrolled successfully', enrolledCourses: user.enrolledCourses });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
