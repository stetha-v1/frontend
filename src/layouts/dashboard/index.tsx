import "./index.scss";
import { Outlet } from "react-router-dom";
import { SideNavigations } from "../../components";

export const RootDashBoardLayout = () => {
  return (
    <div className="dashboard__layout">
      <SideNavigations />
      <div className="rootDash__layout__outlet">
        <Outlet />
      </div>
    </div>
  );
};
