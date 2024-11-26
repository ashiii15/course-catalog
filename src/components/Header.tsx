import React, { useState } from "react";

interface HeaderProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img
            src="/tree-book-pencil-icon-logo-600nw-2010894365-removebg-preview.png"
            alt="Course Catalog Logo"
          />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={() => onSearch(searchQuery)}>
          Search
        </button>
        <select
          className="filter-dropdown"
          onChange={(e) => onFilter(e.target.value)}
        >
          <option value="rating">Rating</option>
          <option value="price">Price</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
