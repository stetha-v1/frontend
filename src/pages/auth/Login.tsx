import "./index.scss";
import { Form } from "react-router-dom";
import { Button, Input, PasswordToggle } from "../../components";
import { ActionFunction, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export const action: ActionFunction = async ({ request: Request }) => {
  const user_input = await Request.formData();
  console.log(user_input);
  return null;
};

export const LoginPage = () => {
  return (
    <div className="auth__page">
      <Form className="form" method="POST" replace>
        <div className="auth__header">
          <div className="text">
            <h1>Sign in</h1>
            <FaArrowRight className="arrow__icon" />
          </div>
          <span>Enter your email and password to sign in!</span>
        </div>

        <Input placeholder="email@email.com" name="email" type="email" />
        <PasswordToggle placeholder="password" name="password" />
        <Button text="Sign in" />
        <span>
          Not registered yet?<Link to="/auth/register">create account</Link>
        </span>
      </Form>
    </div>
  );
};
