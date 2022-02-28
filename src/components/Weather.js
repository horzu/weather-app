import { useContext } from "react";

import CityContext from "../context/CityContext";

function Weather() {
  const { weather, isWeatherLoading } = useContext(CityContext);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let today = new Date();
  today = today.getDay();

  return (
    !isWeatherLoading && (
      <div className="weathers">
        {weather.map((val, idx) => {
          return (
            <div key={idx}>
              <div className="weather-box">
                <p className="day">{days[(today + idx) % 7]}</p>
                <span className="icon">
                  <img src={`http://openweathermap.org/img/wn/${val.weather[0].icon}.png`} alt={val.weather[0].description} />
                </span>
                <div className="temprature">
                  <span className="high">{Math.floor(val.temp.day)}°</span>
                  <span className="low">{Math.floor(val.temp.night)}°</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default Weather;
