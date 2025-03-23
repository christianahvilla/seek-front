import { httpClient } from "../../../api/http-client.api";
import { Task } from "../task.types";

export const getTasksService = async (): Promise<Task[]> => {
  const response = await httpClient.get<Task[]>("/tasks");
  return response;
};
