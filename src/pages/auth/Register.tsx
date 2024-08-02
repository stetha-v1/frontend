import "./index.scss";
import { Form } from "react-router-dom";
import { Button, Input, PasswordToggle } from "../../components";
import { ActionFunction, Link, useNavigation } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { CgSpinner } from "react-icons/cg";

export const action: ActionFunction = async ({ request: Request }) => {
  const user_input = await Request.formData();
  console.log(user_input);
  return null;
};

export const RegisterPage = () => {
  const loging_state = useNavigation();
  return (
    <div className="auth__page">
      <Form className="form" method="POST" replace>
        <div className="auth__header">
          <div className="text">
            <VscAccount className="arrow__icon" />
            <h1>Sign up</h1>
          </div>
          <span>Enter your details to create an account!</span>
        </div>
        <div className="usernames__container">
          <Input placeholder="first name" name="first_name" type="text" />
          <Input placeholder="last name" name="last_name" type="text" />
        </div>
        <Input placeholder="email@email.com" name="email" type="email" />
        <PasswordToggle placeholder="password" name="password" />
        <PasswordToggle placeholder="confirm password" name="re_password" />
        <Button
          text={
            loging_state.state === "submitting"
              ? "creating account..."
              : "Sign up"
          }
          icon={
            loging_state.state === "submitting" ? (
              <CgSpinner className="spinner__icon" />
            ) : null
          }
        />
        <span>
          have an account?<Link to="/auth/login">sign in</Link>
        </span>
      </Form>
    </div>
  );
};
