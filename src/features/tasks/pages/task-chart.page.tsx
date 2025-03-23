import { Box, Typography, Alert } from "@mui/material";
import { useTasks } from "../hooks/use-tasks.hook";
import SkeletonComponent from "../../../components/skeleton.component";
import { TaskStatusChart } from "../components/task-chart.component";

export default function TaskChartPage() {
  const { tasks, loading, error } = useTasks();

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Task Status Chart
      </Typography>

      {loading && <SkeletonComponent />}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {!loading && !error && <TaskStatusChart tasks={tasks} />}
    </Box>
  );
}
