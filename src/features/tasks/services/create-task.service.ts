import { httpClient } from "../../../api/http-client.api";
import { Task } from "../task.types";

export const createTaskService = async (
  task: Omit<Task, "id">
): Promise<Task> => {
  const response = await httpClient.post<Task>("/tasks", task);
  return response;
};
