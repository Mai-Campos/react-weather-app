import "./styles/SelectCityComponent.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContextProvider";

function SelectCityComponent() {
  const { getInfo } = useContext(WeatherContext);
  const [query, setQuery] = useState("");

  const handleKeyDown = (e) => {
    if(e.key == 'Enter'){
          getInfo(query);
    }
  }

 const handleClick = () =>{
    getInfo(query)
  }

  return (
    <div className="form-city">
      <p className="label">Seleccione una ciudad</p>
      <div className="input-group">
        <TextField
          id="standard-basic"
          label="Introduzca una ciudad"
          variant="standard"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <Button variant="outlined" className="search-btn" onClick={handleClick}>
          Buscar
        </Button>
      </div>
    </div>
  );
}

export default SelectCityComponent;
