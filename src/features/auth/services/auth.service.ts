import { AxiosError } from "axios";
import { httpClient } from "../../../api/http-client.api";

const TOKEN_KEY = "auth_token";

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginService = async (data: LoginPayload) => {
  try {
    const response = await httpClient.post<{ token: string }>("/login", data);

    if (!response?.token) {
      throw new Error("Token not received");
    }

    localStorage.setItem(TOKEN_KEY, response.token);
  } catch (err) {
    const error = err as AxiosError<{ message?: string }>;
    const message = error?.response?.data?.message || "Something went wrong";
    throw new Error(message);
  }
};
