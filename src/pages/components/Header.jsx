import React from 'react';
import './components-styles/Header_styles.css'
import './components-styles/btn.css'
import Hong from '../assets/icons/HONG.svg'
import Kong from '../assets/icons/KONG.svg'
import redCart from '../assets/icons/red cart.svg'
function Header() {
  return (
    <header>
      <nav id="nav_bar">
        <div id="logo">
          <img src={Hong} alt="Hong" />
          <img src={Kong} alt="Kong" />
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
          <button id="cart">
            <a href="#">
              <img src={redCart} alt="Carrinho" />
            </a>
          </button>
          <a href="pages/login_register.html">
            <button id="login-btn">Entrar</button>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;