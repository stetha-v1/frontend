import React, { useState } from "react";
import "./index.scss";
import { SearchDoctor, FeaturedDoctors, AllDoctors } from "./components";
import { Link } from "react-router-dom";

interface Doctor {
  id: number;
  name: string;
  image: string;
  specialty: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    specialty: "Cardiologist",
    image:
      "https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png",
  },
  {
    id: 2,
    name: "Dr. Michael Williams",
    specialty: "Dermatologist",
    image:
      "https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png",
  },
  {
    id: 3,
    name: "Dr. Olivia Brown",
    specialty: "Pediatrician",
    image:
      "https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png",
  },
  {
    id: 3,
    name: "Dr. Olipia Brown",
    specialty: "Pediatrician",
    image:
      "https://www.citizenshospitals.com/static/uploads/130789a4-764e-4ee3-88fe-68f9278452d6-1692966652977.png",
  },
];

export const DoctorsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedDoctors, setSearchedDoctors] = useState<Doctor[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const matchedDoctors = doctors.filter((doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedDoctors(matchedDoctors);
  };

  return (
    <div className="doctors__page">
      <SearchDoctor onSearch={handleSearch} />

      {searchQuery ? (
        <div className="search__results">
          {searchedDoctors.length > 0 ? (
            searchedDoctors.map((doctor) => (
              <div className="searched__doctor__card" key={doctor.id}>
                <img src={doctor.image} alt={doctor.name} />
                <div className="searched__doctor__info">
                  <h4>{doctor.name}</h4>
                  <p>{doctor.specialty}</p>
                </div>
                <Link to="#" className="profile__button">
                  See Profile
                </Link>
              </div>
            ))
          ) : (
            <p>No doctors found with the name "{searchQuery}".</p>
          )}
        </div>
      ) : (
        <>
          <FeaturedDoctors />
          <AllDoctors />
        </>
      )}
    </div>
  );
};
