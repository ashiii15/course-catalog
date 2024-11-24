const User = require('../models/User');
const Course = require('../models/Course');

// Enroll user in a course
exports.enrollCourse = async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: 'Course not found' });

    user.enrolledCourses.push({ courseId });
    await user.save();
    res.json({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Unenroll user from a course
exports.unenrollCourse = async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.enrolledCourses = user.enrolledCourses.filter(
      (course) => course.courseId.toString() !== courseId
    );
    await user.save();
    res.json({ message: 'Unenrolled successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
