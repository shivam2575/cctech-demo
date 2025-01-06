import React from "react";
import "./header.css";

const Header = (props) => {
  const { weatherData } = props;
  return (
    <div className="header">
      <input type="text" className="search-input"></input>
      <button type="submit" className="search-btn">
        Search
      </button>
    </div>
  );
};

export default Header;
