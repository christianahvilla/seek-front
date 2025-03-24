import { httpClient } from "../../../api/http-client.api";
import { Task } from "../task.types";

export const updateTaskService = async (
  taskId: string,
  task: Omit<Task, "id">
): Promise<Task> => {
  const response = await httpClient.put<Task>(`/tasks/${taskId}`, task);
  return response;
};
