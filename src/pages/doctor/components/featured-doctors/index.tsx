import React from "react";
import "./index.scss";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialty: "Dermatologist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
  {
    id: 3,
    name: "Dr. Robert Brown",
    specialty: "Pediatrician",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
  {
    id: 4,
    name: "Dr. Robert Brown",
    specialty: "Pediatrician",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
  {
    id: 5,
    name: "Dr. Robert Brown",
    specialty: "Pediatrician",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
  
];

export const FeaturedDoctors: React.FC = () => {
  return (
    <div className="featured__doctors">
      <h3>Featured Doctors</h3>
      <div className="doctor__list">
        {doctors.map((doctor) => (
          <div className="doctor__card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} />
            <div className="doctor__info">
              <h4>{doctor.name}</h4>
              <p>{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
