import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

function Home() {
  return (
    <div className="Home" style={{ 
      backgroundImage: `url("https://i.ibb.co/hYJVcc4/hamburguesa2.jpg")` 
    }}>
      <div className="headerContainer" >
        <h1>Burger Sinú</h1>
        <p>Ven con hambre, vete feliz</p>
        <Link to="/Producto">
          <button>Ordena ya !</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Home