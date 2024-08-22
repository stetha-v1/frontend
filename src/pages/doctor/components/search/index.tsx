import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.scss";

interface SearchDoctorProps {
  onSearch: (query: string) => void;
}

export const SearchDoctor: React.FC<SearchDoctorProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className="search__doctor">
      <h3>Find Doctor</h3>
      <p>We have 1,000+ online doctors available now.</p>
      <form className="search__input" onSubmit={handleSubmit}>
        <FaSearch className="icon" />
        <input
          type="text"
          placeholder="Search for a doctor"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};
