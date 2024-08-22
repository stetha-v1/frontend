import React from "react";
import { MdVerified } from "react-icons/md";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";

// Define the type for a single doctor
interface Doctor {
  id: number;
  name: string;
  speciality: string;
  verified: boolean;
}

export const DoctorsList: React.FC = () => {
  // Random doctor data
  const doctors: Doctor[] = [
    { id: 1, name: "Dr. John Doe", speciality: "Cardiology", verified: true },
    {
      id: 2,
      name: "Dr. Jane Smith",
      speciality: "Dermatology",
      verified: false,
    },
    { id: 3, name: "Dr. Alice Brown", speciality: "Neurology", verified: true },
    {
      id: 4,
      name: "Dr. Michael Johnson",
      speciality: "Pediatrics",
      verified: false,
    },
    {
      id: 5,
      name: "Dr. Emily Davis",
      speciality: "Psychiatry",
      verified: true,
    },
    {
      id: 6,
      name: "Dr. David Wilson",
      speciality: "Orthopedics",
      verified: true,
    },
  ];

  // Assuming we want to display the first 6 doctors
  const randomSix = doctors.slice(0, 6);

  return (
    <div className="home-doctors-list">
      {randomSix.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </div>
  );
};

const DoctorCard: React.FC<Doctor> = ({ id, name, speciality, verified }) => {
  const pathTo = useLocation();
  return (
    <Link
      to={`/doctors/${id}`}
      className="home-doc-card"
      state={{ pathname: pathTo.pathname }}
    >
      <div className="appointment-card-profile-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s"
          alt="doc-image"
          className="appointment-doc-profile"
        />
        <div className="card-info doctors">
          <h4>
            {name}{" "}
            <span>
              {verified ? <MdVerified className="verified-icon" /> : null}
            </span>
          </h4>
          <small>{speciality}</small>
        </div>
      </div>
    </Link>
  );
};
