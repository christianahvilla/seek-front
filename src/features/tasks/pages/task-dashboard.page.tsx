import { Box, Typography, Alert } from "@mui/material";
import { useTasks } from "../hooks/use-tasks.hook";
import { TaskList } from "../components/task-list.component";
import SkeletonComponent from "../../../components/skeleton.component";

export default function TaskDashboardPage() {
  const { tasks, loading, error } = useTasks();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Task Dashboard
      </Typography>

      {loading && <SkeletonComponent />}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && <TaskList tasks={tasks} />}
    </Box>
  );
}
