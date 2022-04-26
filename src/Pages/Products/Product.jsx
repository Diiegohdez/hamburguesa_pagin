import React from 'react'
import "./product.css"
import {ProductList} from "../../My data/List"
import MenuItems from "../../Components/MenuItem/MenuItems"


function Product() {
  return (
    <div className="Product">
      <h1 className="ProductTitle">Burguer Menu</h1>
      <div className="ProductList">
        {ProductList.map((menuItem, key)=>{
            return(
              <MenuItems
              key={key}
              image = {menuItem.image}
              name = {menuItem.name}
              price = {menuItem.price}
              />
            );
      })}
      </div>
    </div>
  );
}

export default Product;