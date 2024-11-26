import React from 'react';
import { Course } from '../types/Course';

interface CourseCardProps {
  course: Course;
  onEnroll: (courseId: number) => void;
  onUnenroll: (courseId: number) => void;
  isEnrolled: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll, onUnenroll, isEnrolled }) => {
  return (
    <div className="course-card">
      <img className="course-image" src={course.image} alt={course.title} />
      <div className="course-details">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <p className="course-instructor">Instructor: {course.instructor}</p>
        <p className="course-rating">Rating: ⭐{course.rating}</p>
        <p className="course-price">Price: ${course.price}</p>
        <button
          className={`course-button ${isEnrolled ? 'unenroll' : 'enroll'}`}
          onClick={() => (isEnrolled ? onUnenroll(course.id) : onEnroll(course.id))}
        >
          {isEnrolled ? 'Unenroll' : 'Enroll'}
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
