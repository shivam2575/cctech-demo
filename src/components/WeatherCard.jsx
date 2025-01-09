import React from "react";
import "./WeatherCard.css";

const WeatherCard = (props) => {
  const { weatherInfo } = props;
  if (weatherInfo.length > 0) {
    const { name, temp, desc, humidity, wind_speed, sunrise, sunset, img_url } =
      weatherInfo[0];
    return (
      <div className="weather-card border margin-10 padding-10">
        <div className="weather-img-container">
          <img src={img_url} />
        </div>
        <div className="weather-info-container">
          <div>City name: {name}</div>
          <div>Temperature: {temp}</div>
          <div>Weather description: {desc}</div>
          <div>Humidity: {humidity}</div>
          <div>wind speed: {wind_speed}</div>
          <div>sunrise time: {sunrise}</div>
          <div>sunset time: {sunset}</div>
          <div>
            <input name="fav" type="checkbox" />
            <label>Mark as Favourait</label>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="weather-card border margin-10 padding-10">
      <h3>Invalid City Name</h3>
    </div>
  );
};

export default WeatherCard;
