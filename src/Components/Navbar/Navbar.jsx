import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import {ArrowDropDownCircle} from "@material-ui/icons"

function Navbar() {

  const [openLink, setOpeLink] = useState(false)

  const toggleNavbar=()=>{
      setOpeLink(!openLink);
  };

  return (
    <div className="Navbar">
        <div className="NavbarLeft" id={openLink ? "open" : "close"}>
            <Link to="/"><img src="https://i.ibb.co/1qdtcyK/Hambur.png" alt='' /></Link>
            <div className="hiddeLink">
            <Link to="/">Inicio</Link>
            <Link to="/Producto">Menu</Link>
            <Link to="Contactanos">Contacto</Link>
            </div>
        </div>
        <div className="NavbarRight">
            <Link to="/">Inicio</Link>
            <Link to="/Producto">Menu</Link>
            <Link to="Contactanos">Contacto</Link>
            <button onClick={toggleNavbar}>
              <ArrowDropDownCircle/>
            </button>
        </div>
    </div>
  )
}

export default Navbar