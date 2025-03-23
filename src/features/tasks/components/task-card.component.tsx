import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { Task } from "../task.types";
import { getStatusColor, getStatusLabel } from "../helpers/task-status.helper";
import { TaskActionsMenu } from "./task-actions-menu.component";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="start">
          <Box>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {task.description}
            </Typography>
            <Chip
              label={getStatusLabel(task.status)}
              color={getStatusColor(task.status)}
            />
          </Box>

          <TaskActionsMenu />
        </Box>
      </CardContent>
    </Card>
  );
};
