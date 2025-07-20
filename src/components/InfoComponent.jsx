import { useContext, useState, useEffect } from "react";
import "./styles/InfoComponent.css";
import { WeatherContext } from "../context/WeatherContextProvider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Alert from "@mui/material/Alert";

function InfoComponent() {
  const { city, error } = useContext(WeatherContext);
  const [unit, setUnit] = useState("°C");
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (city && city.main?.temp !== undefined) {
      setTemperature(city.main.temp);
      setUnit("°C");
    }
  }, [city]);

  const handleChangeUnit = (e) => {
    const newUnit = e.target.value;

    if (newUnit === "°F" && unit === "°C") {
      setTemperature((temperature * 9) / 5 + 32);
    } else if (newUnit === "°C" && unit === "°F") {
      setTemperature(((temperature - 32) * 5) / 9);
    }

    setUnit(newUnit);
  };


  if (!city) {
    return (
      <div className="info">
        <h2 className="city-name">Por favor seleccione una ciudad</h2>
      </div>
    );
  }

  if (city.cod !== 200) {
  return (
    <div className="info">
      <h2 className="city-name">Ciudad no encontrada. Intente otra.</h2>
    </div>
  );
}

  

  

  return (
    <div className={`info ${city.weather[0].main}`}>
      <h2 className="city-name">
        {city.name}, {city.sys.country}
      </h2>

      <div className="data-grid">
        <div className="left-column">
          <p>
            Temperatura: {Math.round(temperature)}
            {unit}{" "}
          </p>
          <FormControl size="small" variant="standard" sx={{ minWidth: 80 }}>
            <Select value={unit} onChange={handleChangeUnit}>
              <MenuItem value="°C">°C</MenuItem>
              <MenuItem value="°F">°F</MenuItem>
            </Select>
          </FormControl>

          <p> Humedad: {city.main.humidity}%</p>
        </div>
        <div className="right-column">
          <p>
            Clima: {city.weather[0].main}
            <img
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              alt="Icono del clima"
              style={{
                verticalAlign: "middle",
                width: "40px",
                height: "40px",
                marginLeft: "8px",
              }}
            />
          </p>

          <p>Vientos: {city.wind.speed}km/s</p>
        </div>
      </div>
    </div>
  );
}

export default InfoComponent;
