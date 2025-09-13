import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // deployed Vercel URL
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // needed if using cookies/session
});

export default api;
