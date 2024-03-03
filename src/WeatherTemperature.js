import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsuis")

    function handleFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function convertToCel(event) {
        event.preventDefault();
        setUnit("celsuis")
    }

    if (unit === "celsuis") {
        return (
          <span className="WeatherTemperature">
            <span className="temperature">{props.celsuis}</span>
            <span className="unit">
              °C |{" "}
              <a href="/" onClick={handleFahrenheit} rel="noopener noreferrer">
                °F
              </a>{" "}
            </span>
          </span>
        );
    }
    else {
        let fahrenheit = props.celsuis * 9/5 + 32
          return (
            <span className="WeatherTemperature">
              <span className="temperature">{Math.round(fahrenheit)}</span>
              <span className="unit">
                <a href="/" onClick={convertToCel} rel="noopener noreferrer">°C</a>|{" "}
                  °F
              </span>
            </span>
          );
        }
    }