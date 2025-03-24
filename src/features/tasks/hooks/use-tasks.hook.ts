import { useEffect, useState } from "react";
import { useTaskStore } from "../store/task.store";
import { extractErrorMessage } from "../../../utils/handle-error.util";
import { getTasksService } from "../services/task.service";
import { useSnackbarStore } from "../../../shared/store/snackbar.store";

export const useTasks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { tasks, setTasks } = useTaskStore();
  const { showSnackbar } = useSnackbarStore();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasksService();
        setTasks(data);
      } catch (error: unknown) {
        showSnackbar("Task could not be got", "error");
        setError(extractErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setTasks, showSnackbar]);

  return { tasks, loading, error };
};
