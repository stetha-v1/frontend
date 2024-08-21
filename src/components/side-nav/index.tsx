import "./index.scss";
import { NavLink } from "react-router-dom";
import { ISideNavigations } from "../../typpes";
import logo from "../../assets/images/logo.png";
import { FaCalendarCheck, FaUserDoctor, FaHeart } from "react-icons/fa6";
import { GiMedicines, GiHealthNormal } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdAddAlert, MdHelp, MdFeedback } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

const top_navigations: ISideNavigations[] = [
  {
    id: 1,
    text: "Appointments",
    path: "/",
    icon: <FaCalendarCheck className="nav__icon" />,
  },
  {
    id: 2,
    text: "Doctors",
    path: "/doctors",
    icon: <FaUserDoctor className="nav__icon" />,
  },
  {
    id: 3,
    text: "Prescriptions",
    path: "/prescriptions",
    icon: <GiMedicines className="nav__icon" />,
  },
  {
    id: 4,
    text: "Health Insights",
    path: "/health-insights",
    icon: <GiHealthNormal className="nav__icon" />,
  },
  {
    id: 5,
    text: "Community",
    path: "/community",
    icon: <IoIosPeople className="nav__icon" />,
  },
  {
    id: 6,
    text: "Alerts",
    path: "/alerts",
    icon: <MdAddAlert className="nav__icon" />,
  },
  {
    id: 7,
    text: "Account",
    path: "/account",
    icon: <IoPersonSharp className="nav__icon" />,
  },
];

const bottom_navigations: ISideNavigations[] = [
  {
    id: 1,
    text: "Mental Health",
    path: "/mental-health",
    icon: <FaHeart className="nav__icon" />,
  },
  {
    id: 2,
    text: "Help",
    path: "/help",
    icon: <MdHelp className="nav__icon" />,
  },
  {
    id: 3,
    text: "Feedback",
    path: "/feedback",
    icon: <MdFeedback className="nav__icon" />,
  },
];

export const SideNavigations = () => {
  return (
    <div className="side__navigations__container">
      <div className="top__navs">
        <NavLink to="/" className="logo__container">
          <img src={logo} alt="logo" />
          <h1>Stetha</h1>
        </NavLink>
        {top_navigations.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <span>{item?.icon}</span>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
      <div className="bottom__navs">
        {bottom_navigations.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <span>{item?.icon}</span>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
