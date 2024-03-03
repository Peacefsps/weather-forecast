import React from "react";
import WeatherIcon from './WeatherIcon.js'


export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000)
        let days = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ]
        let day = days[date.getDay()];
        return day;
    }
    return (
      <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-max">
            {Math.round(props.data.temp.max)}°
          </span>{" "}
          <span className="WeatherForecast-temp-min">
            {Math.round(props.data.temp.min)}°
          </span>
        </div>
      </div>
    );
}