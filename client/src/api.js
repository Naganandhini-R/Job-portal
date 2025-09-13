import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // https://job-portal.vercel.app
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // needed for cookies if used
});

export default api;
