import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface HttpProps {
  baseUrl: string;
  withCredentials?: boolean;
}
class Http {
  private axios: AxiosInstance;

  constructor({ baseUrl, withCredentials = false }: HttpProps) {
    this.axios = axios.create({
      baseURL: baseUrl,
      withCredentials,
    });
  }

  intercept() {
    return this.axios.interceptors;
  }

  get<T>(url: string, config?: AxiosRequestConfig<T>) {
    return this.axios.get(url, config);
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) {
    return this.axios.post(url, data, config);
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) {
    return this.axios.put(url, data, config);
  }

  patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig<T>) {
    return this.axios.patch(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig<T>) {
    return this.axios.delete(url, config);
  }
}

export const baseApi = new Http({
  baseUrl: "https://jjal.xyz",
});
