import { TaskStatus } from "../task.types";

export const getStatusColor = (
  status: TaskStatus
): "default" | "info" | "success" => {
  switch (status) {
    case TaskStatus.TODO:
      return "default";
    case TaskStatus.IN_PROGRESS:
      return "info";
    case TaskStatus.DONE:
      return "success";
    default:
      return "default";
  }
};

export const getStatusLabel = (status: TaskStatus): string => {
  switch (status) {
    case TaskStatus.TODO:
      return "To Do";
    case TaskStatus.IN_PROGRESS:
      return "In Progress";
    case TaskStatus.DONE:
      return "Done";
    default:
      return status;
  }
};
