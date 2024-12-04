import React from 'react';
import './components-styles/Header_styles.css'
import './components-styles/btn.css'
import Hong from '../assets/icons/HONG.svg'
import { useNavigate } from 'react-router-dom';
import Kong from '../assets/icons/KONG.svg'
import redCart from '../assets/icons/red cart.svg'
function Header() {

  const navigate = useNavigate();
  const GoToLogin = () =>{
    navigate('/LoginRegister');
  };
  const GoToOrders = () =>{navigate('/Orders');};
  const GoToHome = () =>{navigate('/Home');};
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
          <img src={redCart} alt="Carrinho" />  
          </button>
          
          <button id="login-btn" onClick = {GoToLogin} >Entrar</button>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;