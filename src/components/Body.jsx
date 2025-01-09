import React from "react";
import "./body.css";
import Sidebar from "./Sidebar";
import WeatherCard from "./WeatherCard";

const Body = (props) => {
  const { weatherData, cityName } = props;
  const weatherInfo = weatherData.filter((data) => data.name === cityName);
  return (
    <div className="body-container border margin-5">
      <Sidebar />
      <WeatherCard weatherInfo={weatherInfo} />
    </div>
  );
};

export default Body;
