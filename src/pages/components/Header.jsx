import React, { useState, useEffect } from 'react';
import './components-styles/Header_styles.css';
import './components-styles/btn.css';
import Hong from '../assets/icons/HONG.svg';
import { useNavigate } from 'react-router-dom';
import Kong from '../assets/icons/KONG.svg';
import redCart from '../assets/icons/red cart.svg';
import user from '../assets/icons/red user.svg';

function Header({ orders }) {
  const navigate = useNavigate();
  const userIn = localStorage.getItem('token') ? true : false;

  const GoToLogin = () => {
    navigate('/LoginRegister');
  };

  const GoToOrders = () => {
    navigate('/Orders', { state: { orders } });
  };

  const GoToHome = () => {
    navigate('/');
  };

  const [quant, setQuant] = useState(0);

  useEffect(() => {
    const totalQuantity = orders?.reduce((accmulator, order) => {
      return accmulator + (order.quantity || 0);
    }, 0);

    setQuant(totalQuantity);
  }, [orders]);

  return (
    <header>
      <nav id="nav_bar">
        <div id="logo" onClick={GoToHome}>
          <img src={Hong} alt="Hong" />
          <img src={Kong} alt="Kong" />
        </div>
        <ul id="nav_list">
          <li className="nav-items">
            <a href="#menu" onClick={GoToHome}>Cardápio</a>
          </li>
          <li className="nav-items">
            <a href="#contact">Contato</a>
          </li>
          <li className="nav-items">
            <a href="#about" onClick={GoToHome}>Sobre nós</a>
          </li>
        </ul>
        <div id="shortcuts">
          <button id="cart" onClick={GoToOrders}>
            {orders?.length >= 1 && <span id="notify">{quant}</span>}
            <img src={redCart} alt="Carrinho" />
          </button>
          {!userIn && <button id="login-btn" onClick={GoToLogin}>Entrar</button>}
          {userIn && (
            <button id="user">
              <img src={user} alt="Usuario" />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
