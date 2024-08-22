import "./index.scss";
import { SearchDoctor, FeaturedDoctors, AllDoctors } from "./components";

export const DoctorsPage = () => {
  return (
    <div className="doctors__page">
      <SearchDoctor />
      <FeaturedDoctors />
      <AllDoctors />
    </div>
  );
};
