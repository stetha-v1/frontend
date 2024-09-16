import "./index.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { IHeader } from "../../typpes";
import { FaCircleQuestion } from "react-icons/fa6";

const headerData: IHeader = {
  company_name: "Stetha",
  right_data: {
    navigations: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Appointments",
        path: "/appointments",
      },
      {
        label: "Messages",
        path: "/chat",
      },
      {
        label: "Prescriptions",
        path: "/prescriptions",
      },
    ],
    navigations_icons: [
       {
        icon : <FaCircleQuestion className="header__icon" />,
        image : null,
        path : '/help'
      },
      {
        icon: null,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s",
        path: "/home",
      },
     
    ],
  },
};

export const SingleAppointmentsLayout = () => {
  return (
    <div>
      <Header
        company_name={headerData.company_name}
        right_data={headerData.right_data}
      />
      <Outlet />
    </div>
  );
};
