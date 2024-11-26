import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../services/api'; // API function to fetch user profile
import { User } from '../types/User'; // User type definition
import { Course } from '../types/Course'; // Course type definition
import CourseCard from '../components/CourseCard';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [courses, setCourses] = useState<Course[]>([]); // To store all courses
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  
  const userId = '123'; 

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userProfile = await fetchUserProfile(userId);
        setUser(userProfile);

        // Fetch all courses 
        const response = await fetch('http://localhost:27017/courses'); 
        const coursesData = await response.json();
        setCourses(coursesData);
      } catch (err) {
        setError('Error fetching user profile or courses');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  
  const enrolledCourses = courses.filter((course) =>
    user?.enrolledCourses.includes(course.id)
  );

  return (
    <div className="profile-page">
      <h2>{user?.name}'s Profile</h2>
      <h3>Email: {user?.email}</h3>
      <h4>Enrolled Courses:</h4>
      <div>
        {enrolledCourses.length ? (
          enrolledCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isEnrolled={true}
              onEnroll={() => {}}
              onUnenroll={() => {}}
            />
          ))
        ) : (
          <p>No enrolled courses.</p>
        )}
      </div>
      <h4>Progress:</h4>
      <ul>
        {Object.keys(user?.progress || {}).map((courseId) => (
          <li key={courseId}>
            Course ID: {courseId} - Progress: {user?.progress[courseId]}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
