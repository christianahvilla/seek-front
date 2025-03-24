import { Snackbar, Alert } from "@mui/material";
import { useSnackbarStore } from "../store/snackbar.store";

export const SnackbarNotification = () => {
  const { open, message, severity, closeSnackbar } = useSnackbarStore();

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert onClose={closeSnackbar} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};
