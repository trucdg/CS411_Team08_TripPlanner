import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
