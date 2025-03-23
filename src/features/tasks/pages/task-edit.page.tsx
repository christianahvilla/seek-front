import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { TaskEditForm } from "../components/task-edit-form.component";

export default function TaskEditPage() {
  const { id } = useParams();

  if (!id) return null;

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Edit Task
      </Typography>
      <TaskEditForm taskId={id} />
    </Box>
  );
}
