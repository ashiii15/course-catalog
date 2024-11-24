const express = require('express');
const router = express.Router();
const { enrollCourse, unenrollCourse } = require('../controllers/userController');

router.post('/enroll', enrollCourse);
router.post('/unenroll', unenrollCourse);

module.exports = router;
