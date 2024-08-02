import "./index.scss";
import { Form } from "react-router-dom";
import { Button, Input, PasswordToggle } from "../../components";
import { ActionFunction, Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

export const action: ActionFunction = async ({ request: Request }) => {
  const user_input = await Request.formData();
  console.log(user_input);
  return null;
};

export const RegisterPage = () => {
  return (
    <div className="auth__page">
      <Form className="form" method="POST" replace>
        <div className="auth__header">
          <div className="text">
            <h1>Sign up</h1>
            <VscAccount className="arrow__icon" />
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
        <Button text="Sign up" />
        <span>
          have an account?<Link to="/auth/login">sign in</Link>
        </span>
      </Form>
    </div>
  );
};
