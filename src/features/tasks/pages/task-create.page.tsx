import { Box, Typography } from "@mui/material";
import { TaskCreateForm } from "../components/task-create-form.component";

export default function TaskCreatePage() {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Create Task
      </Typography>
      <TaskCreateForm />
    </Box>
  );
}
