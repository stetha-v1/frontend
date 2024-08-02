import React from "react";
import "./index.scss";

interface IInput {
  placeholder: string;
  name: string;
  type: string;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  name,
  type,
}): JSX.Element => {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      required
    />
  );
};
