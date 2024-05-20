import axios from "axios";

const instance = axios.create({
  baseURL: "https://main--stellular-fenglisu-e2b691.netlify.app/api",
});
export default instance;
