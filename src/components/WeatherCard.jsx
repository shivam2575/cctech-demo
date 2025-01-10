import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ data, image }) => {
  const {
    name, // City name
    sys: { country, sunrise, sunset }, // Country code, sunrise, and sunset
    main: { temp, feels_like, humidity, pressure }, // Main weather details
    weather, // Array containing weather description and icon
    wind: { speed, deg, gust }, // Wind details
    clouds: { all: cloudiness }, // Cloudiness percentage
    timezone, // Timezone offset in seconds
  } = data;

  // Extract the first weather object for description and icon
  const { main: mainWeather, description, icon } = weather[0];

  const formatTime = (timeStamp) => {
    const time = new Date((timeStamp + timezone) * 1000);
    return time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  return (
    <div className="weather-card border margin-10 padding-10">
      <div className="weather-img-container">
        <img src={image} alt="City Image" />
      </div>
      <div className="weather-info-container">
        <h2>Weather Details</h2>
        <p>
          <strong>City:</strong> {name}
        </p>
        <p>
          <strong>Temperature:</strong> {temp}°C
        </p>
        <p>
          <strong>Feels Like:</strong> {feels_like}°C
        </p>
        <p>
          <strong>Weather:</strong> {mainWeather} ({description})
        </p>
        <p>
          <strong>Humidity:</strong> {humidity}%
        </p>
        <p>
          <strong>Pressure:</strong> {pressure} hPa
        </p>
        <p>
          <strong>Wind:</strong> {speed} m/s, {deg}° (Gust: {gust} m/s)
        </p>
        <p>
          <strong>Cloudiness:</strong> {cloudiness}%
        </p>
        <p>
          <strong>Sunrise:</strong> {formatTime(sunrise)}
        </p>
        <p>
          <strong>Sunset:</strong> {formatTime(sunset)}
        </p>
        <div>
          <input name="fav" type="checkbox" />
          <label>Mark as Favourait</label>
        </div>
      </div>
    </div>
  );
};
// `https://openweathermap.org/img/wn/${icon}@2x.png`
export default WeatherCard;
