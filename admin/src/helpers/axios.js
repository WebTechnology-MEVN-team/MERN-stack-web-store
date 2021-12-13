import axios from "axios";
import { apiUrl } from "../urlConfigs";
import store from "../store";
import { authConstants } from "../actions/Constants";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: token ? `minht ${token}` : "",
  },
});

// axiosInstance.interceptors.request.use((req) => {
//   const { auth } = store.getState();
//   if (auth.token) {
//     req.headers.Authorization = `minht ${auth.token}`;
//   }
//   return req;
// });

// axiosInstance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (error) => {
//     console.log(error.response);
//     const status = error.response ? error.response.status : 500;
//     if (status && status === 500) {
//       localStorage.clear();
//       store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
