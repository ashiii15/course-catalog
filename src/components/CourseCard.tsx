import React from 'react';
import { Course } from '../types/Course';

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: string) => void;
  onUnenroll: (courseId: string) => void;
  isEnrolled: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, onUnenroll, isEnrolled }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Rating: {course.rating}</p>
      <p>Price: ${course.price}</p>
      <button onClick={() => (isEnrolled ? onUnenroll(course.id) : onEnroll(course.id))}>
        {isEnrolled ? 'Unenroll' : 'Enroll'}
      </button>
    </div>
  );
};

export default CourseCard;
