import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://victoria-fall-backend.manoramaseoservice.com/api", // your backend URL
  // baseURL: "http://localhost:8001/api"
});

export default axiosInstance;
