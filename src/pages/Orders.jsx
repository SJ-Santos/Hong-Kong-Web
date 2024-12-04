import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/Orders_styles.css';
import './components/components-styles/Header_styles.css';
import './components/components-styles/btn.css';
<<<<<<< HEAD
=======
import CamaraoComArroz from './assets/imgs/plate_img/Camarao_com_arroz.jpeg'
import Header from './components/Header';
>>>>>>> Home

const Pedidos = () => {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);
  const goToLogin = () => history.push('/pages/LoginRegister');
 //refazer imports 
  return (
    <div>
<<<<<<< HEAD
      <header>
        <nav id="nav_bar">
          <div id="logo">
            <img src="/assets/icons/HONG.svg" alt="Hong" />
            <img src="/assets/icons/KONG.svg" alt="Kong" />
          </div>
          <ul id="nav_list">
            <li className="nav-items">
              <a href="#menu">Cardápio</a>
            </li>
            <li className="nav-items">
              <a href="#contact">Contato</a>
            </li>
            <li className="nav-items">
              <a href="#about">Sobre nós</a>
            </li>
          </ul>
          <div id="shortcuts">
            <span id="search-bar">
              <input id="search" type="text" placeholder="Pesquisa" />
              <img src="/assets/icons/search.svg" alt="Buscar" />
            </span>
            <button id="cart">
              <img src="/assets/icons/red cart.svg" alt="Carrinho" />
            </button>
            <button id="login-btn" onClick={goToLogin}>Entrar</button>
          </div>
        </nav>
      </header>

=======
     <Header></Header>
>>>>>>> Home
      <div className="container">
        <div className="card">
          <button id="remove">
          <span>&times;</span>
          </button>

          <div className="image">
            <img src="/assets/img/plate_img/Camarao_com_arroz.jpeg" alt="Camarões ao molho de tomate" />
          </div>

          <div className="info">
            <h2>Camarões ao molho de tomate</h2>
            <p id='portion'>Porção individual</p>
            <div className="quantity-price">
              <div className="quantity">
                <button ><div>-</div></button>
                <span>{}</span>
                <button ><div>+</div></button>
              </div>
              <div className="price">R$ 00,00 </div>
            </div>
            <div className="observation">
<<<<<<< HEAD
              <p><strong>Observação:</strong></p>
              <input type="text" placeholder='Coloque a observação aqui'/>
=======
              <p className='obsTitle'>Observação:</p>
              <textarea name="obsOrder" id="obsOrder"></textarea>
>>>>>>> Home
            </div>
          </div>
        </div>

        <div className="actions">
          <div><img src="" alt="" />
                  <h2>Finalizar pedido</h2>
                
              </div>
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
