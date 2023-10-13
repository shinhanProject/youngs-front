import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_ENDPOINT}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
