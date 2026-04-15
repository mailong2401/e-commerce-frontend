import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor - Tự động gắn token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor - Xử lý lỗi tập trung
api.interceptors.response.use(
  (response) => response.data, // Trả thẳng data, bỏ response.data.data
  (error) => {
    const originalRequest = error.config;

    // Xử lý refresh token nếu cần
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Logic refresh token ở đây
    }

    // Custom error messages
    if (error.response?.status === 500) {
      console.error("Server error:", error.response.data);
    }

    return Promise.reject(error);
  }
);

export default api;
