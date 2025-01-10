import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
import { API_KEY, UNSPLASH_ACCESS_KEY } from "../utils/constants";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeatherandCityData = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    const CITY_URL = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${UNSPLASH_ACCESS_KEY}`;
    try {
      const results = await Promise.allSettled([
        fetch(API_URL).then((res) => {
          if (!res.ok) {
            throw new Error("Error while fetching data..!!");
          }
          return res.json();
        }),
        fetch(CITY_URL).then((res) => {
          if (!res.ok) {
            throw new Error("Error while fetching data..!!");
          }
          return res.json();
        }),
      ]);
      console.log(results);

      //handle weather data
      const weatherData = results[0];
      if (weatherData.status === "fulfilled") setWeatherData(weatherData.value);
      else {
        setWeatherData(null);
        setError(weatherData.reason.message);
      }

      //handle city Image data
      const cityImageData = results[1];
      if (cityImageData.status === "fulfilled")
        setCityData(cityImageData.value.results[0]?.urls.full);
      else {
        setCityData(null);
        console.error(cityImageData.reason.message);
      }

      //handle error messages
      const errorMessages = results
        .filter((res) => res.status === "rejected")
        .map((res) => res.reason.message);

      if (errorMessages.length > 0) {
        setError(`Issues occurred: ${errorMessages.join(" ")}`);
      } else {
        setError(null);
      }
    } catch (error) {
      console.error("Unexpected error:", err.message);
      setError("An unexpected error occurred.");
    }
  };

  const fetchCityImage = async (cityName) => {
    const CITY_URL = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${UNSPLASH_ACCESS_KEY}`;

    try {
      const response = await fetch(CITY_URL);
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error("Error while fetching city image..!!");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  return (
    <>
      <Header onSearch={fetchWeatherandCityData} />
      <Body weatherData={weatherData} cityImage={cityData} error={error} />
    </>
  );
}

export default App;
