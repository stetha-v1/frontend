import React from "react";
import "./index.scss";
import { Doctor } from "../../../../typpes";


const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s",
    profileLink: "#",
  },
  {
    id: 2,
    name: "Dr. Michael Williams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s",
    profileLink: "#",
  },
  {
    id: 3,
    name: "Dr. Olivia Brown",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVU17NQvjEPTXlVZJtdrG5o3VBkz6DQgV9Q&s",
    profileLink: "#",
  },
];

export const AllDoctors: React.FC = () => {
  return (
    <div className="all__doctors">
      <h3>All doctors (1,000+)</h3>
      <div className="doctor__list">
        {doctors.map((doctor) => (
          <div className="doctor__row" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />
            <div className="doctor__info">
              <h4>{doctor.name}</h4>
            </div>
            <a href={doctor.profileLink} className="profile__link">
              See Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
