/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Search from "./Search"
import axios from "axios"
import CurrentLocationWeather from "./CurrentLocationWeather/CurrentLocationWeather"

const Hero = () => {
  const [location, setLocation] = useState(null)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      console.log("Geolocation not supported")
    }
  }, [])

  function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    setLocation({ longitude, latitude })

    axios
      .get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      )
      .then(function (response) {
        setWeather(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function error() {
    console.log("Unable to retrieve your location")
  }

  return (
    <div className="main-container">
      {/* <CurrentLocationWeather weather={weather} /> */}

      <Search />
    </div>
  )
}
export default Hero
