import "./index.scss";
import { Outlet } from "react-router-dom";
import { SideNavigations } from "../../components";
import { Link } from "react-router-dom";
import { MdOutlineQuestionAnswer } from "react-icons/md";

export const RootDashBoardLayout = () => {
  return (
    <div className="dashboard__layout">
      <SideNavigations />
      <div className="rootDash__layout__outlet">
        <Outlet />
      </div>
      <div className="help">
        <Link to="/help">
          <MdOutlineQuestionAnswer className="help__icon" />
        </Link>
      </div>
    </div>
  );
};
