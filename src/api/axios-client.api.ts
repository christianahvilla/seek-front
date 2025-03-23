import axios, { AxiosInstance } from "axios";
import { ApiClient } from "./api-client.interface";

export class AxiosClient implements ApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "https://api.tu-backend.com",
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("auth_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async get<T>(url: string): Promise<T> {
    const res = await this.instance.get<T>(url);
    return res.data;
  }

  async post<T>(url: string, body: unknown): Promise<T> {
    const res = await this.instance.post<T>(url, body);
    return res.data;
  }

  async put<T>(url: string, body: unknown): Promise<T> {
    const res = await this.instance.put<T>(url, body);
    return res.data;
  }

  async delete<T>(url: string): Promise<T> {
    const res = await this.instance.delete<T>(url);
    return res.data;
  }
}
