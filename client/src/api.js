import axios from "axios";

// Final fix - no more undefined/api errors
const api = axios.create({
  baseURL: import.meta.env.MODE === 'production'
    ? 'https://job-portal-backend.vercel.app' // Replace with your production API URL
    : 'http://localhost:5000', // Local development API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
