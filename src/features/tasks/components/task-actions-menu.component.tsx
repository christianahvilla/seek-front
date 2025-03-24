import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTaskService } from "../services/delete-task.service";
import { useTaskStore } from "../store/task.store";
import { useSnackbarStore } from "../../../shared/store/snackbar.store";
import { updateTaskService } from "../services/update-task.service";
import { TaskStatus } from "../task.types";

interface TaskActionMenuProps {
  taskId: string;
}

export const TaskActionsMenu = ({ taskId }: TaskActionMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { removeTask, updateTask, tasks } = useTaskStore();
  const { showSnackbar } = useSnackbarStore();

  const task = tasks.find((t) => t.id === taskId);
  if (!task) return null;

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    navigate(`/dashboard/edit/${taskId}`);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setConfirmOpen(true);
    handleMenuClose();
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteTaskService(taskId);
      removeTask(taskId);
    } catch (error) {
      console.error("Delete failed", error);
      showSnackbar("Task could not be deleted", "error");
    } finally {
      setConfirmOpen(false);
    }
  };

  const handleChangeStatus = async (newStatus: TaskStatus) => {
    try {
      const updated = await updateTaskService(taskId, {
        title: task.title,
        description: task.description,
        status: newStatus,
      });
      updateTask(updated);
      showSnackbar(
        `Task moved to ${newStatus.replace("_", " ").toUpperCase()}`,
        "info"
      );
    } catch (error) {
      console.error("Update failed", error);
      showSnackbar("Failed to change task status", "error");
    }
    handleMenuClose();
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleChangeStatus(TaskStatus.TODO)}>
          Move to TODO
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus(TaskStatus.IN_PROGRESS)}>
          Move to IN PROGRESS
        </MenuItem>
        <MenuItem onClick={() => handleChangeStatus(TaskStatus.DONE)}>
          Move to DONE
        </MenuItem>
        <MenuItem divider />
        <MenuItem onClick={handleEdit}>Edit Task</MenuItem>
        <MenuItem onClick={handleDeleteClick} sx={{ color: "error.main" }}>
          Delete Task
        </MenuItem>
      </Menu>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button color="error" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
