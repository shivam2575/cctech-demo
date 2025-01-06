import "./App.css";
import Header from "./header";
import Body from "./body";

function App() {
  const weatherData = [
    {
      name: "pune",
      temp: 20,
      desc: "weather is windy",
      humidity: 30,
      wind_speed: "15",
      sunrise: "6:00 AM",
    },
    {
      name: "mumbai",
      temp: 22,
      desc: "weather is cloudy",
      humidity: 25,
      wind_speed: "20",
      sunrise: "6:05 AM",
    },
  ];
  return (
    <>
      <Header weatherData={weatherData} />
      <Body weatherData={weatherData} />
    </>
  );
}

export default App;
