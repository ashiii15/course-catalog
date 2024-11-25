import { Course } from "./Course";

export interface User {
    id: string;
    name: string;
    email: string;
    enrolledCourses: Course[];
    progress: Record<string, number>; // courseId -> progress percentage
  }
  