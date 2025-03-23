import { Box, Typography } from "@mui/material";

export default function TaskDashboardPage() {
  return (
    <Box p={4}>
      <Typography variant="h4">📋 Task Dashboard (Mock)</Typography>
      <Typography variant="body1" mt={2}>
        Aquí irá el listado de tareas cuando se conecte el servicio.
      </Typography>
    </Box>
  );
}
