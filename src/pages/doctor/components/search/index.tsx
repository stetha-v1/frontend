import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.scss";

export const SearchDoctor = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
    //  actual search logic later
  };

  return (
    <div className="search__doctor">
      <h3>Find Doctor</h3>
      <p>We have 1,000+ online doctors available now.</p>
      <form className="search__input" onSubmit={handleSearch}>
        <FaSearch className="icon" />
        <input
          type="text"
          placeholder="Search for a doctor"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
};
