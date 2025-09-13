// client/src/api.js
import axios from "axios";

// ✅ Final fix - no more undefined/api errors
const api = axios.create({
  baseURL: import.meta.env.MODE === 'production' ? '' : 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
