import React from "react";
import "./body.css";

const Body = (props) => {
  const { weatherData } = props;
  return (
    <div className="weather-card">
      <div>City name</div>
      <div>Temperature</div>
      <div>Weather description</div>
      <div>Humidity</div>
      <div>wind speed</div>
      <div>sunrise/sunset times</div>
    </div>
  );
};

export default Body;
