import React, { useState } from "react";
import "./header.css";

const Header = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) onSearch(input);
  };

  return (
    <div className="header border">
      <input
        type="text"
        value={input}
        placeholder="Enter City Name"
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      ></input>
      <button onClick={handleSearch} type="submit" className="search-btn">
        Search
      </button>
    </div>
  );
};

export default Header;
