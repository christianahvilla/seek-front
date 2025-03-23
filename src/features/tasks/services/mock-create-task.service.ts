import { Task } from "../task.types";

export const mockCreateTaskService = async (task: Task): Promise<Task> => {
  await new Promise((res) => setTimeout(res, 500)); // Simulated delay
  return task;
};
