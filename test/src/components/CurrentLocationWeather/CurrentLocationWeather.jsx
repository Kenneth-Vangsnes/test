/* eslint-disable react/prop-types */
import "./index.css"
import { FaTemperatureFull, FaUmbrella } from "react-icons/fa6"
import { FiArrowUp } from "react-icons/fi"
import { SiWindicss } from "react-icons/si"

const iconURL = "https://openweathermap.org/img/wn/"

const CurrentLocationWeather = ({ weather }) => {
  console.log(weather)
  return (
    <div className="container">
      {weather ? (
        <>
          <div className="location">The weather in {weather.name}</div>
          <img
            className="weather-icon"
            src={`${iconURL}${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
          <FaTemperatureFull size={"20px"} />
          <div className="temperature">{weather.main.temp.toFixed(1)}&deg;</div>
          <div className="feels-like">
            Feels like
            <span className="temperature">
              {weather.main.feels_like.toFixed(1)}&deg;
            </span>
          </div>
          <FaUmbrella size={"20px"} />
          <div className="rain">
            {weather.rain === undefined ? 0 : weather.rain} mm
          </div>
          <div className="wind">
            <SiWindicss size={"20px"} style={{ margin: "4px" }} />
            {Math.ceil(weather.wind.speed)}
            <span style={{ fontSize: "13px" }}>
              {weather.wind.gust === undefined ? null : (
                <span>({Math.ceil(weather.wind.gust)})</span>
              )}
            </span>
            <span style={{ fontSize: "11px", marginLeft: "2px" }}>m/s</span>
            <FiArrowUp style={{ transform: `rotate(${weather.wind.deg})` }} />
          </div>
        </>
      ) : (
        <>Location not aquired</>
      )}
    </div>
  )
}

export default CurrentLocationWeather
