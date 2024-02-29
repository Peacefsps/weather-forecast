import React from "react";
import FormatDate from "./FormatDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.defaultCity}</h1>
        <ul>
          <li>
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <WeatherTemperature celsuis={props.data.temperature} />
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {props.data.temperature}%</li>
              <li>Humidity: {props.data.humidity}% </li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}