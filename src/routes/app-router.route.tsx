import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PublicLayout } from "../layouts/public-layout.layout";
import { DashboardLayout } from "../layouts/dashboard-layout.layout";
import { PrivateRoute } from "./private-route.route";
import SkeletonComponent from "../components/skeleton.component";
import { AuthRedirect } from "./auth-redirect.route";

const Fallback = <SkeletonComponent />;

const LoginPage = lazy(() => import("../features/auth/pages/login.page"));
const TaskChartPage = lazy(
  () => import("../features/tasks/pages/task-chart.page")
);
const TaskDashboardPage = lazy(
  () => import("../features/tasks/pages/task-dashboard.page")
);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PublicLayout />,
//     children: [
//       {
//         path: "",
//         element: (
//           <Suspense fallback={Fallback}>
//             <HomePage />
//           </Suspense>
//         ),
//       },
//       {
//         path: "login",
//         element: (
//           <Suspense fallback={Fallback}>
//             <LoginPage />
//           </Suspense>
//         ),
//       },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <PrivateRoute>
//         <DashboardLayout />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "",
//         element: (
//           <Suspense fallback={Fallback}>
//             <TaskDashboardPage />
//           </Suspense>
//         ),
//       },
//       {
//         path: "charts",
//         element: (
//           <Suspense fallback={Fallback}>
//             <TaskChartPage />
//           </Suspense>
//         ),
//       },
//     ],
//   },
// ]);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "",
        element: <AuthRedirect />,
      },
      {
        path: "login",
        element: (
          <Suspense fallback={Fallback}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={Fallback}>
            <TaskDashboardPage />
          </Suspense>
        ),
      },
      {
        path: "charts",
        element: (
          <Suspense fallback={Fallback}>
            <TaskChartPage />
          </Suspense>
        ),
      },
    ],
  },
]);
