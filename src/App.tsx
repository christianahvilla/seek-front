import { RouterProvider } from "react-router-dom";
import { router } from "./routes/app-router.route";
import { SnackbarNotification } from "./shared/components/snackbar-notification.component";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackbarNotification />
    </>
  );
}

export default App;
