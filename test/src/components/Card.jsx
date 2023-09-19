/* eslint-disable react/prop-types */
import { FiArrowUp } from "react-icons/fi"
import { FaTemperatureFull, FaUmbrella } from "react-icons/fa6"
import { SiWindicss } from "react-icons/si"

const iconURL = "https://openweathermap.org/img/wn/"
const Card = ({ city }) => {
  return (
    <div className="card-container">
      <h1 className="card-city">{city.name}</h1>
      <div className="card-icon-container">
        <img
          className="card-icon"
          src={`${iconURL}${city.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
        <p className="card-weather-type">{city.weather[0].main}</p>
      </div>
      <div className="card-temperature-div">
        <FaTemperatureFull size={"20px"} />
        <p className="card-temperature">{city.main.temp.toFixed(1)}&deg;</p>
      </div>
      <p className="card-feels-like">
        Feels like
        <span style={{ color: "red", marginLeft: "2px" }}>
          {city.main.feels_like.toFixed(1)}&deg;
        </span>
      </p>
      <div className="card-rain">
        <FaUmbrella size={"20px"} />
        <span className="card-rain-amount">{city.rain ? city.rain : 0} mm</span>
      </div>
      <div className="card-wind-div">
        <SiWindicss size={"20px"} />
        <p className="card-wind">{Math.ceil(city.wind.speed)} m/s</p>
        <FiArrowUp
          size={"20px"}
          style={{ transform: `rotate(${city.wind.deg})` }}
        />
      </div>
    </div>
  )
}

export default Card
