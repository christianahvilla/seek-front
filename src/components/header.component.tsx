import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/use-auth.hook";

export const Header = () => {
  const { logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography variant="h6" component="div">
            Task Manager
          </Typography>
          <Button component={RouterLink} to="/dashboard" color="inherit">
            Home
          </Button>
          <Button component={RouterLink} to="/dashboard/charts" color="inherit">
            Charts
          </Button>
        </Box>

        <Button color="secondary" variant="contained" onClick={logout}>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
