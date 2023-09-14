import weather from "../assets/weather.jpg"

const Navbar = () => {
  return (
    <div
      className="navbar-container"
      style={{
        backgroundImage: `url(${weather})`,
        backgroundSize: "cover",
      }}>
      <span className="navbar-title">The Weather</span>
    </div>
  )
}

export default Navbar
