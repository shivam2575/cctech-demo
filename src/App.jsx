import "./App.css";
import Header from "./header";
import Body from "./body";
import { useState } from "react";

function App() {
  const weatherData = [
    {
      name: "Pune",
      temp: 20,
      desc: "weather is windy",
      humidity: 30,
      wind_speed: "15",
      sunrise: "6:00 AM",
    },
    {
      name: "Mumbai",
      temp: 22,
      desc: "weather is cloudy",
      humidity: 25,
      wind_speed: "20",
      sunrise: "6:05 AM",
    },
  ];
  const [cityName, setCityName] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const handleCityName = (city) => {
    setShowComponent(true);
    setCityName(city);
  };
  return (
    <>
      <Header getCityName={handleCityName} />
      {showComponent && <Body weatherData={weatherData} cityName={cityName} />}
    </>
  );
}

export default App;
