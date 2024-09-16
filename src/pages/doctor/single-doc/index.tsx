import "./index.scss";
import { useParams } from "react-router-dom";
import { Doctor } from "../../../typpes";

const doctor: Doctor = {
  id: 1,
  name: "Dr. Emily Johnson",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s",
  profileLink: "#",
};

export const SingleDoctorPage = () => {
  const { id: doc_id } = useParams();
  return (
    <div className="single__doc__page">
      <div className="doctor__profile">
        <img src={doctor.image} alt={doctor.name} />
        <div className="profile__info">
          <h2>{doctor.name}</h2>
          <p>Specializes in epidemiology</p>
          <small>10 yrs experience</small>
        </div>
      </div>
      <div className="profile__down">
        <p>
          Dr. Esther is a board director-​certified epidemiologist. She has been
          practising epidemiology for over five years and has treated over 1000
          patients. Dr Esther is known for her compassionate care and expertise
          in epidemiology.
        </p>
      </div>
      <h1>Doctor {doc_id}</h1>
    </div>
  );
};
