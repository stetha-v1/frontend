import { Button } from "../../components";
import "./index.scss";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home__page">
      <Link to="/auth/login">
        <Button text="Sign in" />
      </Link>
    </div>
  );
};
