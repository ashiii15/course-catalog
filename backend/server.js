const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Your existing API routes
app.get('/courses', (req, res) => {
  res.json([
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn React from scratch.",
      instructor: "John Doe",
      rating: 4.5,
      price: 100,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM4ool0_ixiIH8oGiwJ1RiuloZI1J6OWZbQQ&s",
      category: "frontend"
    },
    {
        id: 2,
        title: "javascript essentials",
        description: "Learn javascript from scratch.",
        instructor: "Artur conan doyal",
        rating: 4.2,
        price: 70,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~javascript-essentials-beginners/XDP~COURSE!~javascript-essentials-beginners.jpeg",
        category: "frontend"
      },
      {
        id: 3,
        title: "W3CX Frontend Developer Program",
        description: "A course on edX that's good for beginners who want to learn the core languages of frontend development. ",
        instructor: "bruce wain",
        rating: 4.0,
        price: 60,
        image: "https://w3cx.org/img/5-0-small.png",
        category: "frontend"
      },
      {
        id: 4,
        title: "The Complete Web Developer Course 2.0",
        description: "Covers the basics of HTML and CSS, as well as more advanced topics like JavaScript, jQuery, Bootstrap, and PHP",
        instructor: "hug jackman",
        rating: 3.3,
        price: 90,
        image: "https://m.media-amazon.com/images/S/pv-target-images/0e84d0d343587ea91b93c1d1e49351355bd3fb607c9dc422ca98770a2f5dbe68.jpg",
        category: "fullstack"
      },
      {
        id: 5,
        title: "freeCodeCamp",
        description: "A free course with a certificate that's good for beginners..",
        instructor: "stadam",
        rating: 4.5,
        price: 110,
        image: "https://w3cx.org/img/5-0-small.png",
        category: "Web Development"
      },
      {
        id: 6,
        title: "Full Stack Application Development Project",
        description: "A course on edX from IBM.",
        instructor: "John carpet",
        rating: 3.5,
        price: 150,
        image: "https://www.upshottechnologies.in/images/course/full-stack-developer-training-course.jpg",
        category: "fullstack"
      },
      {
        id: 7,
        title: "Build a Full Website using WordPress",
        description: "A course from Coursera Project Network ",
        instructor: "Johny depp",
        rating: 4.7,
        price: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPCjMKJOY9oWBE8uq_u2555sdQGU0b5EDcw&s",
        category: "fullstack"
      }, {
        id: 8,
        title: "Introduction to Computational Thinking and Data Science",
        description: "Focuses on using computational techniques for data science, including Python programming and statistical modeling.",
        instructor: "John Guttag",
        rating: 3.9,
        price: 150,
        image: "https://cdn.slidesharecdn.com/ss_thumbnails/introductiontocomputationalthinking-220819071527-fb52c80b-thumbnail.jpg?width=640&height=640&fit=bounds",
        category: "data science"
      },
      {
        id: 9,
        title: "Algorithms, Part I",
        description: "Covers essential algorithms and data structures, focusing on sorting, searching, and problem-solving strategies.",
        instructor: "Robert Sedgewick",
        rating: 3.4,
        price: 180,
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~algorithms-part1/XDP~COURSE!~algorithms-part1.jpeg",
        category: "dsa"
      },
      {
        id: 10,
        title: "Introduction to Computer Science",
        description: "A comprehensive introduction to computer science fundamentals, including algorithms, data structures, and software engineering.",
        instructor: " David J. Malan",
        rating: 5.0,
        price: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlidvwTZ9i-BO_dZ0_E5jKRCu029MF4VYv2Q&s",
        category: "dsa"
      },
  ]);
});

app.listen(27017, () => console.log('Server running on port 27017'));
