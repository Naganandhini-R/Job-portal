import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

// 🪄 Interceptor to remove duplicate `/api`
api.interceptors.request.use((config) => {
  if (config.url.startsWith("/api/")) {
    config.url = config.url.replace("/api/", "/"); // /api/jobs -> /jobs
  }
  return config;
});

export default api;
