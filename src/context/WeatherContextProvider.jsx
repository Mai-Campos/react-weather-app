import { createContext, useState } from "react";

export const WeatherContext = createContext();

export function WeatherContextProvider(props) {
  const [city, setCity] = useState(null);
  const [error, setError] = useState(false)

  const getInfo = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8ba0a8147c902505146c9c13a48f875e&units=metric`
      );
      const data = await response.json();
      setCity(data);
    } catch (e) {
      console.error("Error al obtener datos del clima:", e);
      setError(true);
    }
  };
  return (
    <WeatherContext.Provider value={{ city, getInfo, error }}>
      {props.children}
    </WeatherContext.Provider>
  );
}
