import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import './components-styles/Header_styles.css';
import './components-styles/btn.css';

//IMAGES
import Hong from '../assets/icons/HONG.svg';
import Kong from '../assets/icons/KONG.svg';
import redCart from '../assets/icons/red cart.svg';
import user from '../assets/icons/red user.svg';
import menu from '../assets/icons/menu.svg'
import inicio from '../assets/icons/Inicio.svg'
import whiteCart from '../assets/icons/whiteCart.svg'
import userWhite from '../assets/icons/userWhite.svg'
function Header() {
  const {orders} = useContext(AppContext)
  const navigate = useNavigate();
  const userIn = localStorage.getItem('token') ? true : false;

  const GoToLogin = () => {
    navigate('/Login-registro');
  };

  const GoToOrders = () => {
    navigate('/Pedidos', { state: { orders } });
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
          
      <div id='nav_list-mobile'>
            <ul>
              <div className='imgs' >
               <img src={menu} alt="Icone de menu" />
              <li className="nav_items-mobile">Cardápio</li>
              </div>
              <div className='imgs'>
               <img src={inicio} alt="Icone de Inicio" />
              <li className="nav_items-mobile">Início</li>
              </div>
              <div className='imgs'>
               <img src={whiteCart} alt="Icone de Carrinhos" />
              <li className="nav_items-mobile">Carrinho</li>
              </div>
              <div className='imgs'>
               <img src={userWhite} alt="Icone de menu" />
              <li className="nav_items-mobile">User</li>
              </div>
            </ul>
          </div>
    </header>
  );
}

export default Header;
