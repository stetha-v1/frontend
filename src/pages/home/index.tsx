import "./index.scss";
import { AppointmentList, DoctorsList } from "./components";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home__page">
      <h1>Welcome Back, David</h1>
      <div className="home__page__container">
        <div className="appointments-list">
          <h4 className="treatments-title">Your Treatments</h4>
          <AppointmentList />
        </div>
        <div className="home-doctors">
          <div className="home-doctors-header">
            <h4>Doctors</h4>
            <Link to="doctors">View all</Link>
          </div>
          <div className="home-doctors-container">
            <DoctorsList />
          </div>
        </div>
      </div>
    </div>
  );
};
