import React, { useState } from "react";
import "./index.scss";
import { SearchDoctor, FeaturedDoctors, AllDoctors } from "./components";

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
    image: "doctor1.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Williams",
    specialty: "Dermatologist",
    image: "doctor2.jpg",
  },
  {
    id: 3,
    name: "Dr. Olivia Brown",
    specialty: "Pediatrician",
    image: "doctor3.jpg",
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
            <div className="doctor__card">
              <img src={searchedDoctor.image} alt={searchedDoctor.name} />
              <div className="doctor__info">
                <h4>{searchedDoctor.name}</h4>
                <p>{searchedDoctor.specialty}</p>
              </div>
            </div>
          ) : (
            <p>No doctor found with the name "{searchQuery}".</p>
          )}
        </div>
      )}
    </div>
  );
};
