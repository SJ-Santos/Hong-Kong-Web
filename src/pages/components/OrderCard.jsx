import React, { useState } from 'react';
import './components-styles/OrderCard_styles.css'

const OrderCard =({name, path}) =>{
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1); // Evita valores negativos
   
    return(
        <>
            <div className="card">
            <button id="remove">
              <span>&times;</span>
            </button>

            <div className="image">
              <img src={path} alt={name} />
            </div>

            <div className="info">
              <h2>{name}</h2>
              <p id='portion'>Porção individual</p>
              <div className="quantity-price">
                <div className="quantity">
                  <button onClick={decreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <div className="price">R$ 00,00</div>
              </div>
              <div className="observation">
                <p className='obsTitle'>Observação:</p>
                <textarea name="obsOrder" id="obsOrder"></textarea>
              </div>
            </div>
          </div>

        </>
    )
}
export default OrderCard;
