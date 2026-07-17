import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE}/api`, // your backend URL
  // baseURL: "http://localhost:8001/api"
});

export default axiosInstance;
