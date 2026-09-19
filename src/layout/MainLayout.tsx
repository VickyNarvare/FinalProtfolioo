import { Outlet } from "react-router";
import Navbar from "../shared/components/Navbar/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};
