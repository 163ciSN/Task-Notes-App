import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach JWT token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ===========================
   USER APIs
=========================== */

export const registerUser = (userData) =>
  API.post("/users/register", userData);

export const loginUser = (userData) =>
  API.post("/users/login", userData);

/* ===========================
   TASK APIs
=========================== */

export const getTasks = () =>
  API.get("/tasks");

export const createTask = (taskData) =>
  API.post("/tasks", taskData);

export const updateTask = (id, taskData) =>
  API.put(`/tasks/${id}`, taskData);

export const deleteTask = (id) =>
  API.delete(`/tasks/${id}`);

export default API;