import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export const getRequest = (url:string, params?:string) => {
  return axiosInstance.get(url, { params });
};

export const deleterequest = (url:string, params?:string) => {
  return axiosInstance.delete(url, params as any);
};

export const postRequest = (url:string, params?:any) => {
  try {
    return axiosInstance.post(url, params);
  } catch (error) {
    console.log(error);
  }
};