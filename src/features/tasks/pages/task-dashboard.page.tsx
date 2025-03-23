import { Box, Typography, Alert, Button } from "@mui/material";
import { useTasks } from "../hooks/use-tasks.hook";
import { TaskList } from "../components/task-list.component";
import SkeletonComponent from "../../../components/skeleton.component";
import { useNavigate } from "react-router-dom";

export default function TaskDashboardPage() {
  const { tasks, loading, error } = useTasks();
  const navigate = useNavigate();

  return (
    <Box p={4}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4">Task Dashboard</Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/dashboard/create")}
        >
          Add Task
        </Button>
      </Box>

      {loading && <SkeletonComponent />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && <TaskList tasks={tasks} />}
    </Box>
  );
}
