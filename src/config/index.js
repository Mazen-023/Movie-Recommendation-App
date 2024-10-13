import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://schoole-era.vercel.app/api/v1/auth",
  timeout: 5000,
});

export default axiosInstance;
