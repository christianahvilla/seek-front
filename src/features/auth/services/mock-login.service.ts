import { AxiosError } from "axios";
import { TOKEN_KEY } from "../auth.constants";

export interface LoginPayload {
  email: string;
  password: string;
}

// Sample JWT payload: { "email": "john@doe.com", "name": "John Doe" }
const FAKE_JWT_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
  "eyJlbWFpbCI6ImpvaG5AZG9lLmNvbSIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTcxMTMwMDAwMCwiZXhwIjoyMDEyMzAwMDAwfQ." +
  "fake_signature";

export const mockLoginService = async (data: LoginPayload): Promise<void> => {
  await new Promise((res) => setTimeout(res, 500)); // simulate delay

  if (data.email !== "john@doe.com" || data.password !== "123456") {
    const error = {
      isAxiosError: true,
      response: {
        status: 401,
        data: {
          message: "Invalid email or password",
        },
      },
    } as AxiosError;

    throw error;
  }

  localStorage.setItem(TOKEN_KEY, FAKE_JWT_TOKEN);
};
