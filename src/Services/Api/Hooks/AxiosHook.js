import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { URLS } from "../../Constants/urls";
import { useNavigate } from "react-router-dom";

const useAxios = () => {
  const isLoggedIn = false;
  const dispatch = useDispatch();
  const Authtoken = localStorage.getItem("token");

  const navigate = useNavigate();
  const axiosInstance = axios.create({
    baseURL: URLS.API_URL,
  });

  axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      console.log("Do something before request is sent");
      return config;
    },
    function (error) {
      // Do something with request error
      console.log("Do something with request error");
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      console.log("Do something with response data");
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("Do something with response error");
      return Promise.reject(error);
    }
  );

  // if (isLoggedIn) {
  //   axiosInstance.interceptors.request.use(async (req) => {
  //     const user = jwt_decode(Authtoken);

  //     const unixNow = Math.round(new Date().getTime() / 1000);
  //     const isExpired = unixNow > user.exp;

  //     if (!isExpired) return req;
  //     navigate("/");
  //     // axios
  //     //   .post(`${URLS.API_URL}/token/refresh/`, {
  //     //     refresh: userInfo?.data.refresh_token,
  //     //   })
  //     //   .then((response) => {})
  //     //   .catch((err) => {
  //     //     if (err.response) {
  //     //       console.log(err);
  //     //     } else if (err.request) {
  //     //       console.log(err);
  //     //     } else {
  //     //       console.log(err);
  //     //     }
  //     //   });
  //   });
  // }

  return axiosInstance;
};
export default useAxios;
