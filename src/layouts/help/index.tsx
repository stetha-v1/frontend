import "./index.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { IHeader } from "../../typpes";
import { IoSettingsOutline } from "react-icons/io5";

const headerData: IHeader = {
  company_name: "Stetha Healthcare AI",
  right_data: {
    navigations: null,
    navigations_icons: [
      {
        icon: <IoSettingsOutline className="header__icon" />,
        image: null,
        path: "/settings",
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

export const HelpPageLayout = () => {
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
