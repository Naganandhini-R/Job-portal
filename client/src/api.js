// src/api.js
import axios from "axios";

// Local: VITE_API_URL=http://localhost:5000
// Vercel: VITE_API_URL="" or not set

let base = import.meta.env.VITE_API_URL || "";

// 👉 Don’t add "/api" here, because you already include "/api" in calls
const api = axios.create({
  baseURL: base,
});

export default api;

