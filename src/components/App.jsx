import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { useState } from "react";
import { API_KEY } from "../utils/constants";

function App() {
  // const weatherData = [
  //   {
  //     name: "Daman",
  //     temp: 20,
  //     desc: "weather is windy",
  //     humidity: 30,
  //     wind_speed: "15",
  //     sunrise: "06:00 AM",
  //     sunset: "06:30 PM",
  //     img_url: "https://www.holidify.com/images/bgImages/DAMAN.jpg",
  //     fav: false,
  //   },
  //   {
  //     name: "Mumbai",
  //     temp: 22,
  //     desc: "weather is cloudy",
  //     humidity: 25,
  //     wind_speed: "20",
  //     sunrise: "06:05 AM",
  //     sunset: "06:32 PM",
  //     img_url:
  //       "https://www.agoda.com/wp-content/uploads/2024/01/Featured-image-Gateway-of-India-Mumbai-1244x700.jpg",
  //     fav: false,
  //   },
  // ];

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeatherData = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    console.log(API_URL);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Error while fetching data..!!");
      }
      const data = response.json();
      console.log(data);
      setWeatherData(data);
      setError("");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setWeatherData(null);
    }
  };
  // const handleCityName = (city) => {
  //   setCity(city);
  // };
  // console.log(`received city name ${cityName}`);
  return (
    <>
      <Header onSearch={fetchWeatherData} />
      {/* <Body weatherData={weatherData} cityName={cityName} /> */}
    </>
  );
}

export default App;
