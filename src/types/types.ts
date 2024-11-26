export interface Course {
    id: number;
    title: string;
    description: string;
    instructor: string;
    rating: number;
    price: number;
    image: string;
  }
  
  export interface User {
    enrolledCourses: number[]; 
  }
  