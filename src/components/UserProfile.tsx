import React from "react";
import { Course } from "../types/Course";

interface UserProfileProps {
  courses: Course[];
  enrolledCourses: number[];
  onUnenroll: (id: number) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ courses, enrolledCourses, onUnenroll }) => {
  return (
    <div className="user-profile">
      <h2>Your Enrolled Courses</h2>
      <div className="enrolled-course-grid">
        {courses
          .filter((course) => enrolledCourses.includes(course.id))
          .map((course) => (
            <div key={course.id} className="enrolled-course-card">
              <img className="enrolled-course-image" src={course.image} alt={course.title} />
              <div className="enrolled-course-details">
                <h3 className="enrolled-course-title">{course.title}</h3>
                <p className="enrolled-course-instructor">Instructor: {course.instructor}</p>
                <p className="enrolled-course-progress">
                  Progress: {enrolledCourses.includes(course.id) ? "In Progress" : "Not Started"}
                </p>
                <button
                  className="enrolled-course-unenroll-button"
                  onClick={() => onUnenroll(course.id)}
                >
                  Unenroll
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserProfile;
