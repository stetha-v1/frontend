import React from "react";
import logo from "../../assets/images/logo.png";
import "./index.scss";
import { IHeader } from "../../typpes";
import { Link } from "react-router-dom";

export const Header: React.FC<IHeader> = ({ company_name, right_data }) => {
  return (
    <div className="header__container">
      <div className="left__container">
        <img src={logo} alt="company_logo" />
        <h3>{company_name}</h3>
      </div>
      <div className="right__container">
        <div className="navigations">
          {right_data.navigations &&
            right_data.navigations.map((nav, index) => (
              <Link key={index} to={nav.path}>
                {nav.label}
              </Link>
            ))}
        </div>
        <div className="navigation__icons">
          {right_data.navigations_icons &&
            right_data.navigations_icons.map((iconData, index) => (
              <Link key={index} to={iconData.path}>
                {iconData.image ? (
                  <img src={iconData.image} alt={`icon-${index}`} />
                ) : (
                  iconData.icon
                )}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
