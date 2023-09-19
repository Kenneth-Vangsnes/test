import { useEffect } from "react"
import "./App.css"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  useEffect(() => {
    const handleResize = () => {
      const initialHeight = window.innerHeight

      document.documentElement.style.setProperty("overflow", "auto")
      const metaViewport = document.querySelector("meta[name=viewport]")
      metaViewport.setAttribute(
        "content",
        "height=" + initialHeight + "px, width=device-width, initial-scale=1.0"
      )
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
