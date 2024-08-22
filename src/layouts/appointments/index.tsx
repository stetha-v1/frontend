import "./index.scss";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ISideNavigations } from "../../typpes";

const appointemts_navs: ISideNavigations[] = [
  {
    id: 1,
    text: "Upcoming",
    path: "/appointments",
  },
  {
    id: 2,
    text: "Past",
    path: "past",
  },
  {
    id: 3,
    text: "Reschedule",
    path: "reschedule",
  },
  {
    id: 4,
    text: "Cancelled",
    path: "cancelled",
  },
];

export const AppointmentsPageLayout = () => {
  return (
    <div className="appointemts__layout">
      <h3>Appointments</h3>

      <div className="appointments__navigations">
        {appointemts_navs.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            end
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <span>{item?.icon}</span>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
      <div className="appointments__layout__outlet">
        <Outlet />
      </div>
    </div>
  );
};
