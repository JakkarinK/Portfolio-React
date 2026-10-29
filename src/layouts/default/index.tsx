import { Outlet } from "react-router";
import LayoutFooter from "./components/footer";
import LayoutHeader from "./components/header";

const LayoutDefault = () => {
  return (
    <div className="portfolio-layout">
      <LayoutHeader />
      <main className="page-content">
        <Outlet />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default LayoutDefault;
