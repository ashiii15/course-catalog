const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
