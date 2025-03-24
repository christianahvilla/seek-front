import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from "./routes/app-router.route";
import { SnackbarNotification } from "./shared/components/snackbar-notification.component";

const router = createBrowserRouter(routesConfig);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SnackbarNotification />
    </>
  );
}

export default App;
