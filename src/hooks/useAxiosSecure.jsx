import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        console.log(
          "Error Caught from our own axios interceptor",
          error.response
        );
        if (error.response.status === 401 || error.response.status === 403) {
          //1. LogOut for error
          handleLogout();
          //2. And Navigate to Login page
          navigate("/login");
        }
        return Promise.reject(error)
      }
    );
  }, [handleLogout, navigate]);

  return axiosSecure; //CleanUp
};

export default useAxiosSecure;
