import './App.css';
import Weather from './Weather.js'

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by
          <a href="https://github.com/Peacefsps" target="blank">
            {" "}
            Peace Iwakin{" "}
          </a>
          and is
          <a
            href="https://github.com/Peacefsps/weather-forecast"
            target="blank"
          >
            {" "}
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
