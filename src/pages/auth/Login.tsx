import "./index.scss";
import { Form } from "react-router-dom";
import { Button, Input, PasswordToggle } from "../../components";
import { ActionFunction, Link, useNavigation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { CgSpinner } from "react-icons/cg";

export const action: ActionFunction = async ({ request: Request }) => {
  const user_input = await Request.formData();
  console.log(user_input);
  return null;
};

export const LoginPage = () => {
  const loging_state = useNavigation();
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
        <Button
          text={
            loging_state.state === "submitting" ? "signing in..." : "Sign in"
          }
          icon={
            loging_state.state === "submitting" ? (
              <CgSpinner className="spinner__icon" />
            ) : null
          }
        />
        <span>
          Not registered yet?<Link to="/auth/register">create account</Link>
        </span>
      </Form>
    </div>
  );
};
