import { Grid2 } from "@mui/material";
import { Task } from "../task.types";
import { TaskCard } from "./task-card.component";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <Grid2 container spacing={2}>
      {tasks.map((task) => (
        <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={task.id}>
          <TaskCard task={task} />
        </Grid2>
      ))}
    </Grid2>
  );
};
