/* eslint-disable react/prop-types */
const iconURL = "https://openweathermap.org/img/wn/"
const Card = ({ city }) => {
  console.log(city)
  return (
    <div className="card-container">
      <h1 className="card-title">Weather in:</h1>
      <h1 className="card-city">{city.name}</h1>
      <div className="card-icon-container">
        <img
          className="card-icon"
          src={`${iconURL}${city.weather[0].icon}@2x.png`}
          alt="weather-icon"
        />
        <p className="card-weather-type">{city.weather[0].main}</p>
      </div>
      <p className="card-temperature">
        Temperature: {city.main.temp.toFixed(1)}
      </p>
      <p className="card-feels-like">
        Feels like: {city.main.feels_like.toFixed(1)}
      </p>
      <p className="card-weather">{}</p>
    </div>
  )
}

export default Card
