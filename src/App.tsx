import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CourseGrid from "./components/CourseGrid";
import UserProfile from "./components/UserProfile";
import "./index.css";
import { Course } from "./types/Course";
import { User } from "./types/User";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    enrolledCourses: [],
    progress: {}, // Initialize progress as an empty object
  });  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/courses");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data)
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleEnroll = (id: number): void => {
    setUser((prev) => ({
      ...prev,
      enrolledCourses: [...prev.enrolledCourses, id],
    }));
  };

  const handleUnenroll = (id: number): void => {
    setUser((prev) => ({
      ...prev,
      enrolledCourses: prev.enrolledCourses.filter(
        (courseId) => courseId !== id
      ),
    }));
  };

  const filteredCourses = courses
    .filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "price") {
        return a.price - b.price;
      } else if (filter === "rating") {
        return b.rating - a.rating;
      } else {
        return 0; 
      }
    });

  return (
    <div className="App">
      <Header onSearch={setSearchQuery} onFilter={setFilter} />
      <CourseGrid
        courses={filteredCourses}
        enrolledCourses={user.enrolledCourses}
        onEnroll={handleEnroll}
        onUnenroll={handleUnenroll}
      />
      <UserProfile
        courses={courses}
        enrolledCourses={user.enrolledCourses}
        onUnenroll={handleUnenroll}
      />
    </div>
  );
};

export default App;
