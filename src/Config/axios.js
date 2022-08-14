import axios from 'axios';

const Authtoken = localStorage.getItem("token");
// AXIOS CONFIGURE START
axios.defaults.baseURL = "http://159.89.198.52:8000/v1/";
// axios.defaults.baseURL = "http://127.0.0.1:8000/v1/";
axios.defaults.headers.post["Content-Type"] = "application/json";
if (Authtoken) {
  axios.defaults.headers.common["Authorization"] = `JWT ${Authtoken}`;
}

axios.interceptors.request.use(
  (request) => {
    // Edit request config
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    // Edit response config
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
window.axios = axios;

export default axios;