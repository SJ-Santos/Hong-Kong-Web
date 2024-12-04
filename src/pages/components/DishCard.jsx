import React, { useState } from 'react';
import './components-styles/DishCard_styles.css';

//*********image************** */
import  carrinho from '../assets/icons/whiteCart.svg'
function DishCard({ image, name, cost }) {
  
 
  return (
    <div className="dishes-all">
      <img id="dish_photo" src={image} alt={name} />
      <h3 className="dish_name">{name}</h3>
      <p className="cost">{cost}</p>
      <div id="choice_size">
        <input type="radio" name="size" />
        <p>Grande</p>
        <input type="radio" name="size" />
        <p>Junior</p>
      </div>
      <button onClick={()=>cart1()}>
        
          <img src={carrinho} alt="Adicionar ao carrinho" />
          ADICIONAR
        
      </button>
    </div>
  );
}

export default DishCard;