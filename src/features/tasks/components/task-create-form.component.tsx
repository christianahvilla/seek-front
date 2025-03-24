import { useForm } from "react-hook-form";
import {
  Button,
  TextField,
  MenuItem,
  Box,
  Typography,
  Grid2,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TaskFormInputs, TaskStatus } from "../task.types";
import { useTaskStore } from "../store/task.store";
import { useNavigate } from "react-router-dom";
import { createTaskService } from "../services/create-task.service";
import { useSnackbarStore } from "../../../shared/store/snackbar.store";

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  status: yup.mixed<TaskStatus>().oneOf(Object.values(TaskStatus)).required(),
});

export const TaskCreateForm = () => {
  const { addTask } = useTaskStore();
  const { showSnackbar } = useSnackbarStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TaskFormInputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: TaskFormInputs) => {
    try {
      const task = {
        ...data,
      };
      const created = await createTaskService(task);
      addTask(created);
      reset();
      showSnackbar("Task created successfully", "success");
      navigate("/dashboard");
    } catch (error: unknown) {
      showSnackbar("Task could not be created", "error");
      console.error("Task creation failed", error);
    }
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
          <Typography variant="h6">Add New Task</Typography>

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

          <TextField
            label="Status"
            select
            {...register("status")}
            error={!!errors.status}
            helperText={errors.status?.message}
          >
            {Object.values(TaskStatus).map((status) => (
              <MenuItem key={status} value={status}>
                {status.replace("_", " ").toUpperCase()}
              </MenuItem>
            ))}
          </TextField>

          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Task"}
          </Button>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 0, md: 4 }} />
    </Grid2>
  );
};
