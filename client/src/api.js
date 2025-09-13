import axios from "axios";

const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: base.includes("/api") ? base : `${base}/api`,
  headers: { "Content-Type": "application/json" },
});

export default api;
