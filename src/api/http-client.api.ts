import { ApiClient } from "./api-client.interface";
import { AxiosClient } from "./axios-client.api";

export const httpClient: ApiClient = new AxiosClient();
