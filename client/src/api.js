// src/api.js
import axios from "axios";

let base = import.meta.env.VITE_API_URL || "";

// For local: set VITE_API_URL=http://localhost:5000
// For Vercel: set VITE_API_URL=""

const api = axios.create({
  baseURL: base + "/api",
});

export default api;
