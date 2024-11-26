import React from "react";
import CourseCard from "./CourseCard";
import { Course } from "../types/Course";

interface CourseGridProps {
  courses: Course[];
  enrolledCourses: number[];
  onEnroll: (id: number) => void;
  onUnenroll: (id: number) => void;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  enrolledCourses,
  onEnroll,
  onUnenroll,
}) => {
  return (
    <div className="course-grid">
      {courses.map((course) => (  
        <CourseCard
          key={course.id}
          course={course}  
          isEnrolled={enrolledCourses.includes(course.id)}
          onEnroll={onEnroll}
          onUnenroll={onUnenroll}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
