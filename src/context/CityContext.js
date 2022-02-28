import { createContext, useState, useEffect } from "react";

const CityContext = createContext();
const apiKey = process.env.REACT_APP_API_KEY;

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("Izmir");
  const [apiCity, setApiCity] = useState([38.4147331, 27.1434119]);
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  useEffect(() => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&limit=1&appid=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setApiCity([data[0].lat, data[0].lon]))
      .finally(() => setIsLoading(false));
  }, [selectedCity]);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${apiCity[0]}&lon=${apiCity[1]}&exclude=hourly,minutely,alerts,current&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.daily))
      .finally(() => setIsWeatherLoading(false));
  }, [apiCity]);

  const values = {
    selectedCity,
    setSelectedCity,
    apiCity,
    setApiCity,
    isLoading,
    setIsLoading,
    weather,
    setWeather,
    isWeatherLoading,
    setIsWeatherLoading,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export default CityContext;
