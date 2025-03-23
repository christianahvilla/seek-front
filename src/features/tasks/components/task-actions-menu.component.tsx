import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TaskActionMenuProps {
  taskId: string;
}

export const TaskActionsMenu = ({ taskId }: TaskActionMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

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

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <MenuItem onClick={handleEdit}>Edit Task</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mark as To Do</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mark as In Progress</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mark as Done</MenuItem>
        <MenuItem divider />
        <MenuItem onClick={handleMenuClose} sx={{ color: "error.main" }}>
          Delete Task
        </MenuItem>
      </Menu>
    </>
  );
};
