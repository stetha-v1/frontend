import React from "react";
import "./index.scss";
import { FaStethoscope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineUploadFile } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { RiMessage2Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

interface ISingleAppointmentNav {
  id: number;
  icon: React.ReactNode;
  path: string;
  label: string;
}

const navData: ISingleAppointmentNav[] = [
  {
    id: 1,
    icon: <FaStethoscope className="sa__nav__icons" />,
    path: "/doctors",
    label: "Doctor's Note",
  },
  {
    id: 2,
    icon: <MdOutlineUploadFile className="sa__nav__icons" />,
    path: "#",
    label: "Upload Records",
  },
  {
    id: 3,
    icon: <GiMedicines className="sa__nav__icons" />,
    path: "#",
    label: "Request Prescriptions",
  },
  {
    id: 4,
    icon: <SlCalender className="sa__nav__icons" />,
    path: "#",
    label: "Add to Calender",
  },
  {
    id: 5,
    icon: <RiMessage2Line className="sa__nav__icons" />,
    path: "#",
    label: "Message Doctor",
  },
  {
    id: 6,
    icon: <BsThreeDots className="sa__nav__icons" />,
    path: "#",
    label: "More Options",
  },
];

export const SingleAppointmentsPageSideBar = () => {
  return (
    <div className="single__appointments__sidebar">
      <div className="doctor__image__container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s "
          alt="doc-image"
        />
        <div className="sa__doc__info">
          <h4>Chatting with</h4>
          <small>Dr. John Smith</small>
        </div>
      </div>

      {/* sa -> single__appointmment */}
      <div className="sa__navigations">
        {navData.map((nav) => (
          <Link key={nav.id} to={nav.path}>
            <span>{nav.icon}</span>
            <p>{nav.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
