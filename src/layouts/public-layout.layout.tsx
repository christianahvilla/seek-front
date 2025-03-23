import { Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <>
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </>
  );
};
