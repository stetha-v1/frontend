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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
  {
    id: 2,
    name: "Dr. Michael Williams",
    specialty: "Dermatologist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
  {
    id: 3,
    name: "Dr. Olivia Brown",
    specialty: "Pediatrician",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-suF-HNAYPoZM6k-sO69b531jmN0-GiFOQ&s",
  },
];

export const DoctorsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedDoctor, setSearchedDoctor] = useState<Doctor | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const doctor = doctors.find((doc) =>
      doc.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedDoctor(doctor || null);
  };

  return (
    <div className="doctors__page">
      <SearchDoctor onSearch={handleSearch} />

      {!searchQuery && (
        <>
          <FeaturedDoctors />
          <AllDoctors />
        </>
      )}

      {searchQuery && (
        <div className="search__result">
          {searchedDoctor ? (
            <div className="searched__doctor__card">
              <img src={searchedDoctor.image} alt={searchedDoctor.name} />
              <div className="searched__doctor__info">
                <h4>{searchedDoctor.name}</h4>
                <p>{searchedDoctor.specialty}</p>
              </div>
              <Link
                to='#'
                className="profile__button"
              >
                See Profile
              </Link>
            </div>
          ) : (
            <p>No doctor found with the name "{searchQuery}".</p>
          )}
        </div>
      )}
    </div>
  );
};
