import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: API_KEY,
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error en en la Api", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
