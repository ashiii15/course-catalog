import React from 'react';
import { User } from '../types/User';
import CourseCard from './CourseCard';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}'s Profile</h2>
      <h3>Enrolled Courses</h3>
      <div>
        {user.enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} isEnrolled={true} onEnroll={() => {}} onUnenroll={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
