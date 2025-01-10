import React from "react";
import "./body.css";
import Sidebar from "./Sidebar";
import WeatherCard from "./WeatherCard";
import ErrorCard from "./ErrorCard";

const Body = ({ weatherData, cityImage, error }) => {
  return (
    <div className="body-container border margin-5">
      <Sidebar />
      <div className="border weather-card-container margin-10">
        {error && <ErrorCard message={error} />}
        {weatherData && <WeatherCard data={weatherData} image={cityImage} />}
      </div>
    </div>
  );
};

export default Body;
