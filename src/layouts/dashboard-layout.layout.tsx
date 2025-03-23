import { Outlet } from "react-router-dom";
import { Header } from "../components/header.component";

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </>
  );
};
