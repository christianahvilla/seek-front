import { useEffect, useState } from "react";
import { useTaskStore } from "../store/task.store";
import { mockGetTasksService as getTasksService } from "../services/mock-task.service";
import { extractErrorMessage } from "../../../utils/handle-error.util";
// import { getTasksService } from '../services/task.service'

export const useTasks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasksService();
        setTasks(data);
      } catch (error: unknown) {
        setError(extractErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setTasks]);

  return { tasks, loading, error };
};
