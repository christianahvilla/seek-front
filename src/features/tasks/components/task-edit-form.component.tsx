import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  MenuItem,
  Box,
  Grid2,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TaskFormInputs, TaskStatus } from "../task.types";
import { useTaskStore } from "../store/task.store";
// Use mock service for now
import { useNavigate } from "react-router-dom";
// import { createTaskService } from '../services/create-task.service'

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.mixed<TaskStatus>().oneOf(Object.values(TaskStatus)).required(),
});

interface TaskEditFormProps {
  taskId: string;
}

export const TaskEditForm = ({ taskId }: TaskEditFormProps) => {
  const { tasks, updateTask } = useTaskStore();
  const task = tasks.find((t) => t.id === taskId);
  const navigate = useNavigate();
  console.log(task);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<TaskFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status ?? TaskStatus.TODO, // ✅ Ensures default enum value
    },
  });

  const onSubmit = async (data: TaskFormInputs) => {
    const updated = { ...task!, ...data };
    updateTask(updated);
    navigate("/dashboard");
  };

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 0, md: 4 }} />
      <Grid2 size={{ xs: 10, md: 4 }}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
        >
          <TextField
            label="Title"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            label="Description"
            {...register("description")}
            error={!!errors.description}
            helperText={errors.description?.message}
          />

          <FormControl fullWidth error={!!errors.status}>
            <InputLabel id="task-status-label">Status</InputLabel>
            <Select
              labelId="task-status-label"
              id="task-status-select"
              value={watch("status")}
              label="Status"
              {...register("status")}
            >
              {Object.values(TaskStatus).map((status) => (
                <MenuItem key={status} value={status}>
                  {status.replace("_", " ").toUpperCase()}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{errors.status?.message}</FormHelperText>
          </FormControl>

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 0, md: 4 }} />
    </Grid2>
  );
};
