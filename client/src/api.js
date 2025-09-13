// src/api.js
import axios from "axios";

// ✅ Fixed: Use MODE check instead of VITE_API_URL to avoid undefined
const base = import.meta.env.MODE === 'production' ? '' : 'http://localhost:5000';

// 👉 Don't add "/api" here, because you already include "/api" in calls
const api = axios.create({
  baseURL: base,
});

export default api;
