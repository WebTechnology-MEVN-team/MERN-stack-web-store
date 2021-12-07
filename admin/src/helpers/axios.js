import axios from "axios";
import { apiUrl } from "../urlConfigs";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  // headers: {
  //   "Authenticator":""
  // },
});

export default axiosInstance;
