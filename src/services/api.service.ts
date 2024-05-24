import axios, { AxiosError } from "axios";
import emitter from "@/utils/bus/emiter";

const BASE_URL = import.meta.env.VITE_API_URL;

interface Error {
  response: {
    data: { message: string };
  };
}

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("TOKEN-TL");
  if (token) config.headers.Authorization = token;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    emitter.emit("error", { error: (error as Error).response?.data.message });
  }
);

export default instance;
