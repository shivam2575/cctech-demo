import React from "react";
import "./body.css";

const Body = (props) => {
  const { weatherData, cityName } = props;
  const weatherInfo = weatherData.filter((data) => data.name === cityName);
  console.log(weatherInfo.length);
  if (weatherInfo.length > 0) {
    const { name, temp, desc, humidity, wind_speed, sunrise } = weatherInfo[0];
    return (
      <div className="weather-card">
        <div>City name: {name}</div>
        <div>Temperature: {temp}</div>
        <div>Weather description: {desc}</div>
        <div>Humidity: {humidity}</div>
        <div>wind speed: {wind_speed}</div>
        <div>sunrise/sunset times: {sunrise}</div>
      </div>
    );
  }
  return (
    <div className="weather-card">
      <div>Invalid City Name..!!</div>
    </div>
  );
};

export default Body;
