import { AxiosError } from "axios";
import { httpClient } from "../../../api/http-client.api";
import { LoginPayload } from "../auth.types";
import { TOKEN_KEY } from "../auth.constants";

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
