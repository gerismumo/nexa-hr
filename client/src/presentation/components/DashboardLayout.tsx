import { HeaderMenu } from "../components/Header/Header";
import { NavbarNested } from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:flex fixed  w-[280px]">
        <NavbarNested />
      </aside>
      <div className="flex-1 w-full md:ml-[280px] flex flex-col">
        <HeaderMenu />
        <main className=" flex-1 overflow-auto mt-[56px] sm:mt-0">
          <div className="py-3 px-[10px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
