const express = require('express');
const router = express.Router();
const { getAllCourses, searchCourses } = require('../controllers/courseController');

router.get('/', getAllCourses);
router.get('/search', searchCourses);

module.exports = router;
