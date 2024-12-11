import React, { useState,useContext} from 'react'; 
import Header from './components/Header';
import DishCard from './components/DishCard';
import Sobrenos from './components/AboutUs';
import { useNavigate } from 'react-router-dom';
import dishes from './dishes.json'
import './styles/Home_styles.css';
import Yaksoba from './assets/imgs/plate_img/Yaksoba.png';
import { AppContext } from '../App';
function Home() {
  const {orders,setOrders,onAddToOrder} = useContext(AppContext)
 
  return (
    <div>
      <Header />
      <main id="content">
        <section id="home">
          <div id="cta">
            <h1>Yakisoba? É a nossa especialidade! Experimente o nosso prato mais pedido!</h1>
            <div id="cta_btn">
              <a href="#menu" id="order">Peça agora</a>
            </div>
          </div>
          <div id="banner">
            <div className="shape" id="rect1"></div>
            <div className="shape" id="rect2"></div>
            <div className="shape" id="rect3"></div>
            <img src={Yaksoba} alt="yaksoba" />
          </div>
        </section>

        <section id="menu">
          <div id="line">
            <div id="l1"></div>
            <h1>CARDÁPIO</h1>
            <div id="l2"></div>
          </div>
          <div id="dishes">
            {dishes.map((dish) => (
              <DishCard
                key={dish.id}
                name={dish.name}
                cost={dish.cost}
                id={dish.id}
                path={dish.path}
                quantity={dish.quantity}
              />
            ))}
          </div>
        </section>
        <section id="about"></section>
        <Sobrenos />
      </main>
    </div>
  );
}

export default Home;
