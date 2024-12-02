import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/Orders_styles.css';
import './components/components-styles/Header_styles.css';
import './components/components-styles/btn.css';
import CamaraoComArroz from './assets/imgs/plate_img/Camarao_com_arroz.jpeg'
import Header from './components/Header';

const Orders = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1); // Evita valores negativos
  const goToLogin = () => navigate('/LoginRegister'); // Corrigido

  return (
    <div>
     <Header></Header>
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
              <div className="price">R$ 00,00 </div>
            </div>
            <div className="observation">
              <p className='obsTitle'>Observação:</p>
              <textarea name="obsOrder" id="obsOrder"></textarea>
            </div>
          </div>
        </div>

        <div className="actions">
          <details className="login-summary">
            <summary>✔️ Finalizar Pedido</summary>
            <div className="login-message">
              <p>Ops! Para finalizar o seu pedido, você deve entrar na sua conta!</p>
              <button className="login-button">Entre na sua conta</button>
              <div className="divider">
                <span></span> ou <span></span>
              </div>
              <button className="register-button">Registre-se agora mesmo</button>
            </div>
          </details>

          <p>ou</p>

          <details className="finish-summary">
            <summary>
              <img src="/assets/icons/white cart.svg" alt="Carrinho de compras" style={{ width: '16px', height: '16px' }} />
              Continuar comprando
            </summary>
            <div className="finish-message">
              <p>Pedido finalizado!</p>
              <img src="/assets/icons/red check.svg" alt="check vermelho" />
              <p>Obrigado pela preferência. Tenha uma boa refeição!</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Orders;
