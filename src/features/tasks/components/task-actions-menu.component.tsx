import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export const TaskActionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
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
