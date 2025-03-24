import { httpClient } from "../../../api/http-client.api";

export const deleteTaskService = async (taskId: string): Promise<void> => {
  await httpClient.delete(`/tasks/${taskId}`);
};
