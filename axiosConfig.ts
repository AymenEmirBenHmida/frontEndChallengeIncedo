import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   timeout: 10000, // Optional timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
