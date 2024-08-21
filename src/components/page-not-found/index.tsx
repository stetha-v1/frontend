import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.scss";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <FaExclamationTriangle className="page-not-found__icon" />
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="page-not-found__link">
        Go Back Home
      </Link>
    </div>
  );
};
