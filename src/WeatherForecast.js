import axios from "axios";
import React, { useState, useEffect } from "react";
import './WeatherForecast.css'
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] =  useState(null)
    
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates])

    function handleForecast(response) {
        console.log(response.data)
        setLoaded(true)
        setForecast(response.data.daily)
    }
    
    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return (
                         <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                    );
                }
            })}
          </div>
        </div>
      );
    }
    else {
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;

        let apiKey = "311f1f45fee82242ab4086372ab360f5";
        let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
        axios.get(apiURL).then(handleForecast);

        return null;
    }
}
    