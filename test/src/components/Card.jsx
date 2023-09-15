/* eslint-disable react/prop-types */
import { FiArrowUp } from "react-icons/fi"

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
      <p className="card-temperature">{city.main.temp.toFixed(1)}&deg;</p>
      <p className="card-feels-like">
        Feels like
        <span style={{ color: "red", marginLeft: "2px" }}>
          {city.main.feels_like.toFixed(1)}&deg;
        </span>
      </p>
      <p className="card-wind">{Math.ceil(city.wind.speed)} m/s</p>

      <FiArrowUp style={{ transform: `rotate(${city.wind.deg})` }} />
    </div>
  )
}

export default Card
