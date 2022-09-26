import Axios, { AxiosInstance } from "axios";
import { API_URL, RAPID_API_HOST, RAPID_API_KEY } from "./config";

const apiClient: AxiosInstance = Axios.create({
  baseURL: API_URL,
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST
  }
});

export default apiClient;
