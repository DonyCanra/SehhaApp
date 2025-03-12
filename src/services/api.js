import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080", // Ganti dengan API backend-mu
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menambahkan token jika ada
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
