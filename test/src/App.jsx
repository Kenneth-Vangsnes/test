import { useEffect } from "react"
import "./App.css"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {
  useEffect(() => {
    const handleResize = () => {
      const metaViewport = document.querySelector("meta[name=viewport]")
      metaViewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      )
      console.log("hey")
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
