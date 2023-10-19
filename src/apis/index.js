import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://${process.env.REACT_APP_ENDPOINT}`,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 인증 정보를 전달하도록 설정
});