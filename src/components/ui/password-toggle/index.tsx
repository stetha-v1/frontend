import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import "./index.scss";
import { Input } from "../input";

interface IPasswordToggle {
  placeholder: string;
  name: string;
}

export const PasswordToggle: React.FC<IPasswordToggle> = ({
  placeholder,
  name,
}): JSX.Element => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-toggle">
      <Input
        placeholder={placeholder}
        name={name}
        type={passwordVisible ? "text" : "password"}
      />

      <button
        className="toggle__btn"
        type="button"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? (
          <IoMdEyeOff className="password__icon" />
        ) : (
          <IoMdEye className="password__icon" />
        )}
      </button>
    </div>
  );
};
