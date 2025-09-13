import axios from "axios";

let base = import.meta.env.VITE_API_URL || "/api";

// Ensure base never ends with `/api` twice
if (base.endsWith("/api")) {
  base = base.replace(/\/api$/, "");
}

const api = axios.create({
  baseURL: base + "/api",
});

export default api;

