import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main" className="d-fd-flex p-2">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
