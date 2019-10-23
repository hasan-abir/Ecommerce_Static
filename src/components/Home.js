import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>wood shine</h1>
        <p>A place for cutting-edge furnishing.</p>
        <Link to="/store" as={"button"}>
          <button>visit store</button>
        </Link>
      </div>
    </div>
  )
}
