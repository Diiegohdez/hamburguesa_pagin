
import React from 'react'


function MenuItems({image, name, price}) {
  return (
    <div className="MenuItems">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>${price}</p>
    </div>
  )
}

export default MenuItems