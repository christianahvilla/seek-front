import { AxiosError } from "axios";

export const extractErrorMessage = (error: unknown): string => {
  const axiosError = error as AxiosError<{ message?: string }>;
  console.log(axiosError);
  return axiosError.response?.data?.message || "Unexpected error";
};
