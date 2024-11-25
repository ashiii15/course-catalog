import axios from 'axios';

const API_BASE_URL = 'https://api.example.com';

export const fetchCourses = async () => {
  const response = await axios.get(`${API_BASE_URL}/courses`);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${API_BASE_URL}/enroll`, { userId, courseId });
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(`${API_BASE_URL}/unenroll`, { userId, courseId });
  return response.data;
};

export const fetchUserProfile = async (userId: string) => {
  const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
  return response.data;
};
