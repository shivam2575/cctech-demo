import React, { useState } from "react";
import "./header.css";

const Header = (props) => {
  const [inputValue, setInputValue] = useState("");
  const { getCityName } = props;
  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };
  const onTrigger = () => {
    getCityName(inputValue);
    setInputValue("");
  };
  return (
    <div className="header">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="search-input"
      ></input>
      <button onClick={onTrigger} type="submit" className="search-btn">
        Search
      </button>
    </div>
  );
};

export default Header;
