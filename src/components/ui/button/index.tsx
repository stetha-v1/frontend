import React from "react";
import "./index.scss";

interface IButton {
  text: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ text, icon }): JSX.Element => {
  return (
    <button className="button">
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};
