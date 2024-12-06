import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from "axios";

function apiConfig(baseUrl: string): AxiosRequestConfig {
  return {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
    }
  };
}

function initAxios(config: AxiosRequestConfig): AxiosInstance {
  const defineInstance = axios.create(config);
  defineInstance.interceptors.request.use(
    (request) => {
      return request;
    },
    (error) => Promise.reject(error)
  );

  defineInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return defineInstance;
}

function api(baseURL = "/api") {
  return initAxios(apiConfig(baseURL));
}

export default api;