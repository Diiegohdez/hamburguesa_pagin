import React from 'react'
import "./abouts.css"

function Abouts() {
  return (
    <div className="Abouts">
        <div className="AboutsTop" style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/1474974/pexels-photo-1474974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}></div>

        <div className="AboutsBottom">
            <h1 className="AboustTitle">Acerca de Nosotros</h1>
            <p>Somos un Restaurante en linea donde nos enfocamos en 
                prepara la mejores Hamburguesa para explotar el sentido 
                del gusto de nuestro cliente y ofrecerle una experiencia
                unica contamos con la experiencia, el personal y los 
                utensilios para brindarte la mejor experiencia en Hamburguesa
            </p>
        </div>
    </div>
  )
}

export default Abouts