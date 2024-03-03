import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({loaded: false});
  const [city, setCity] = useState(props.defaultCity)

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      coord: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      precipitation: response.data.clouds.all,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      defaultCity: response.data.name,
    });
  }

  function search() {
    const apiKey = "311f1f45fee82242ab4086372ab360f5";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city)
  }

  function handleInput(event) {
    setCity(event.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                autoFocus="on"
                onChange={handleInput}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coord} />
      </div>
    );
  }
  else {
    search()
    return ("Loading")
  }
}