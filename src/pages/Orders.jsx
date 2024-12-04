import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Orders_styles.css';
import './components/components-styles/Header_styles.css';
import './components/components-styles/btn.css';
import CamaraoComArroz from './assets/imgs/plate_img/Camarao_com_arroz.jpeg';
import Header from './components/Header';
import Correct from './assets/icons/correct.svg';
import whiteCart from './assets/icons/whiteCart.svg';

const Orders = (props) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1); // Evita valores negativos
  const goToLogin = () => navigate('/LoginRegister');
  const userIn = false;
  const [showText, setShowText] = useState(false);
  const [color, setColor] = useState('none');
  
  const handleButton = ()=>{
        setShowText(true)
        setColor('block')
  }
const exit =()=>{
  setShowText(false)
  setColor('none')
}
  return (
    <div>
      <div className='overlay' style={{display:color}} onClick={exit}></div>
      <div >
      <Header />
        <div className="container">
        
          <div className="card">
            <button id="remove">
              <span>&times;</span>
            </button>

            <div className="image">
              <img src={CamaraoComArroz} alt="Camarões ao molho de tomate" />
            </div>

            <div className="info">
              <h2>Camarões ao molho de tomate</h2>
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

          <div className="actions">
            <button
              onClick={() => handleButton()}
              className='finishOrder'
            >
              <img src={Correct} alt="Simbolo de correto" />
              Finalizar pedido
            </button>
            <div className='OneOrOther'>
              <span className='line1'></span>
              <p>ou</p>
              <span className='line2'></span>
            </div>
            <div className='continueOrder'>
              <img src={whiteCart} alt="Simbolo de carrinho de compras" />
              Continuar comprando
            </div>
          </div>
        </div>
        { 
          showText && <div
          className="messageLogin"
          
        >
          <p className='ops'>Ops! Para finalizar o seu pedido, você deve entrar na sua conta!</p>
          <div className='login'>
            Entre na sua conta
          </div>
          <div className='OneOrOther'>
            <span className='line1'></span>
            <p>ou</p>
            <span className='line2'></span>
          </div>
          <button className='signIn'>
            Registre-se agora mesmo
          </button>
        </div>
        }
      </div>
    </div>
  );
};

export default Orders;
