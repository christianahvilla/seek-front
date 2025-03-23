import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/use-auth.hook";

export const Header = () => {
  const { logout, user } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6">Task Manager</Typography>
          <Button component={RouterLink} to="/dashboard" color="inherit">
            Dashboard
          </Button>
          <Button component={RouterLink} to="/dashboard/charts" color="inherit">
            Charts
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {user && (
            <Typography variant="body2">Welcome, {user.name}</Typography>
          )}
          <Button color="secondary" variant="contained" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
