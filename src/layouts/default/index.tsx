import { Outlet } from "react-router";
import LayoutFooter from "./components/footer";
import LayoutHeader from "./components/header";

const LayoutDefault = () => {
  return (
    <div className="h-screen w-screen overflow-auto grid grid-rows-[60px_1fr_80px]">
      <LayoutHeader />
      <div className="w-full h-full bg-(--surface-0)">
        <Outlet />
      </div>
      <LayoutFooter />
    </div>
  );
};

export default LayoutDefault;
