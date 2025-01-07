import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { useState } from "react";

function App() {
  const weatherData = [
    {
      name: "Daman",
      temp: 20,
      desc: "weather is windy",
      humidity: 30,
      wind_speed: "15",
      sunrise: "06:00 AM",
      sunset: "06:30 PM",
      img_url: "https://www.holidify.com/images/bgImages/DAMAN.jpg",
    },
    {
      name: "Mumbai",
      temp: 22,
      desc: "weather is cloudy",
      humidity: 25,
      wind_speed: "20",
      sunrise: "06:05 AM",
      sunset: "06:32 PM",
      img_url:
        "https://www.agoda.com/wp-content/uploads/2024/01/Featured-image-Gateway-of-India-Mumbai-1244x700.jpg",
    },
  ];
  const [cityName, setCityName] = useState("");
  const handleCityName = (city) => {
    setCityName(city);
  };
  console.log(`received city name ${cityName}`);
  return (
    <>
      <Header getCityName={handleCityName} />
      <Body weatherData={weatherData} cityName={cityName} />
    </>
  );
}

export default App;
