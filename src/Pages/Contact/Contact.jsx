import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className="Contact">
      <div className="ContactLeft" style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/2280573/pexels-photo-2280573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")` 
    }}></div>

      <div className="ContactRight">
        <h1 className="ContactTitle">Contactanos</h1>
        <form id="Contact-Form" method="POST"> 
           <label className="ContactLabel" thmlFor="name">Nombre</label>
           <input className="ContactInput" name="name" placeholder="Ingrese su Nombre Completo " type="text"/>
           <label className="ContactLabel" thmlFor="email">Correo  </label>
           <input className="ContactInput" name="email" placeholder="Ingrese su Correo " type="email"/>
           <label className="ContactLabel" thmlFor="message">Mensaje</label>
           <textarea className="ContactText" rows="6" name="message" required></textarea>
           <button className="ContactButton" type="submit">Enviar </button>
        </form>
      </div>
    </div>
  )
}

export default Contact