import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./Card"

const GEOurl = "https://api.openweathermap.org/geo/1.0/direct?"

const Search = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState()
  const [coordinates, setCoordinates] = useState({ lon: 0, lat: 0 })
  const [city, setCity] = useState()
  const getSearchResults = () => {
    //Uses GEO Api to get cities and coordinates
    axios
      .get(`${GEOurl}q=${search}&limit=5&appid=${import.meta.env.VITE_API_KEY}`)
      .then(function (response) {
        setResults(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}?lat=${coordinates.lat}&lon=${
          coordinates.lon
        }&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      )
      .then(function (response) {
        setCity(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [coordinates])

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search for City"
          value={search}
          onChange={(e) => setSearch(e.target.value.toUpperCase())}></input>
        <button className="search-button" onClick={() => getSearchResults()}>
          Search
        </button>

        {results === undefined
          ? null
          : results.map((res, index) => {
              return (
                <div
                  key={res.name + index}
                  onClick={() => {
                    setCoordinates({ lon: res.lon, lat: res.lat })
                  }}>
                  <div className="result">
                    {res.name}, {res.country}
                  </div>
                </div>
              )
            })}
      </div>
      {coordinates.lon === 0 ? null : <Card city={city} />}
    </>
  )
}

export default Search
