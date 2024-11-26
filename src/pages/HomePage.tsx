import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../services/api';
import { Course } from '../types/Course';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const HomePage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchCourses().then(setCourses);
  }, []);

  const handleSearch = (query: string) => {
    setFilteredCourses(courses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    ));
  };

  const handleFilterChange = (filter: string) => {
    const sortedCourses = [...courses].sort((a, b) =>
      filter === 'price'
        ? a.price - b.price
        : filter === 'rating'
        ? b.rating - a.rating
        : a.category.localeCompare(b.category)
    );
    setFilteredCourses(sortedCourses);
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <Filters onFilterChange={handleFilterChange} />
      <div className="course-list">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} isEnrolled={false} onEnroll={() => {}} onUnenroll={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
