import axios, { AxiosError } from "axios";
import emitter from "@/utils/bus/emiter";

interface Error {
  response: {
    data: { message: string };
  };
}

const instance = axios.create({
  baseURL: "https://main--stellular-fenglisu-e2b691.netlify.app/api", // TODO - SHOULD BE IN ENV
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
