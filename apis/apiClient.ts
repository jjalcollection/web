import axios, { AxiosRequestConfig } from "axios";

// TODO 서버 주소 나오면 세팅
const SERVER_URL = "";

const apiClient = axios.create({
  withCredentials: true,
  timeout: 50000,
});

apiClient.defaults.baseURL = `${SERVER_URL}`;

export function get<T>(url: string, config?: AxiosRequestConfig<T>) {
  return apiClient.get(url, config);
}

export function post<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig<T>
) {
  return apiClient.post(url, data, config);
}

export function put<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig<T>
) {
  return apiClient.put(url, data, config);
}

export function patch<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig<T>
) {
  return apiClient.patch(url, data, config);
}

export function del<T>(url: string, config?: AxiosRequestConfig<T>) {
  return apiClient.delete(url, config);
}

const client = {
  get,
  post,
  patch,
  put,
  del,
};

export default client;
