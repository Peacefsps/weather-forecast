import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from './FormatDate.js'

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({loaded: false});

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      precipitation: response.data.clouds.all,
      iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
      defaultCity: response.data.name,
    });
  }
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  // function handleInput(event) {
  //   setCity(event.target.value);
  // }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                autoFocus="on"
                // onChange={handleInput}
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
        <h1>{props.defaultCity}</h1>
        <ul>
          <li><FormatDate date={weatherData.date}  /></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconURL}
              alt={weatherData.description}
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.temperature}%</li>
              <li>Humidity: {weatherData.humidity}% </li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  else {
    const apiKey = "311f1f45fee82242ab4086372ab360f5";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiURL).then(displayWeather);
    return ("Loading")
  }
}
