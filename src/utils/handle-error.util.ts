import { AxiosError } from "axios";

export const extractErrorMessage = (error: unknown): string => {
  const axiosError = error as AxiosError<{ message?: string }>;
  return axiosError.response?.data?.message || "Unexpected error";
};
