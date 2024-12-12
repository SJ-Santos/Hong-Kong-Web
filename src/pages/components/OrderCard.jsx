import React, { useState,useContext } from 'react';
import './components-styles/OrderCard_styles.css'
import { AppContext } from '../../App';
const OrderCard =({id,name, path,quantity,size}) =>{
    const [quant, setQuantity] = useState(quantity);
    const increaseQuantity = () =>{ setQuantity(quant + 1)
      setOrders(orders.map((order) => 
        order.name === name && order.size === size
          ? { ...order, quantity: order.quantity + 1 }
          : order
      ));};
    const decreaseQuantity = () =>{ setQuantity(quant > 1 ? quant - 1 : 1)
      setOrders(orders.map((order) => 
        order.name === name && order.size === size
          ? { ...order, quantity: order.quantity > 1? order.quantity - 1 : 1 }
          : order
      ));
    };
    
    const handleDelete = (id) => {
        console.log('TESTE 1:')
        console.log(orders)
        const update = orders.filter((_, i) => id !== i );
        console.log('TERMINADO:')
        console.log(update+'\n')
        setOrders(update);
    }
     // Evita valores negativos
    const {orders,setOrders} = useContext(AppContext);


    return(
        <>
            <div className="card">
            <button id="remove" onClick={()=>handleDelete(id)}>
              <span>&times;</span>
            </button>

            <div className="image">
              <img src={path} alt={name} />
            </div>

            <div className="info">
              <h2>{name}</h2>
              <p id='portion'>Porção {size} </p>
              <div className="quantity-price">
                <div className="quantity">
                  <button onClick={decreaseQuantity}>-</button>
                  <span>{quant}</span>
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
