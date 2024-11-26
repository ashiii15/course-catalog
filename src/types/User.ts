export interface User {
    id: Number;
    name: string;
    email: string;
    enrolledCourses: number[]
    progress: Record<string, number>; 
  }
  