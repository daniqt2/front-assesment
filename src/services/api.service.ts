import axios from "axios";

const instance = axios.create({
  baseURL: "https://main--stellular-fenglisu-e2b691.netlify.app/api", // TODO - SHOULD BE IN ENV
});
export default instance;
