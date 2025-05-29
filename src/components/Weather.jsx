import { useState } from "react";
import "../components/styles/Weather.css";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const api = {
  key: "cd0ba1a5d5c3f451ea789947f8617bb1",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  return (
    <div className="weather-container">
      {/* Header */}
      <h1>{t("homepage.temperatureToday")}</h1>
      {/* serach box */}
      <div className="weather-search">
        <input
          type="text"
          className="weather-search-box"
          placeholder="Enter City..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="weather-search-button" on onClick={searchPressed}>
          <IoSearch />
        </button>
      </div>
      {typeof weather.main != "undefined" ? (
        <div>
          {/* Location */}
          <p>{weather.name}</p>
          {/* temperature */}
          <p className="weather-temp">{weather.main.temp}°C</p>
          {/* condition */}
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].descriptions}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Weather;
