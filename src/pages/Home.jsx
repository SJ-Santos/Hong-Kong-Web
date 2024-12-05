import React, { useState } from 'react'; // Adicionando useState
import Header from './components/Header';
import DishCard from './components/DishCard';
import Sobrenos from './components/AboutUs';
import { useNavigate } from 'react-router-dom';
import dishes from './dishes.json'
import './styles/Home_styles.css';// Importe o CSS que você usava
//*****************importar as imagens*********************** refazer todos os imports qnd colocar as imagens
import Yaksoba from './assets/imgs/plate_img/Yaksoba.png'
function Home() {


  const [orders, setOrders] = useState([]); // Agora o useState está sendo importado corretamente

  // Função para adicionar um prato ao pedido
  const onAddToOrder = (name, cost,id, size, path) => {
    setOrders([...orders, { name,  cost,id, size , path}]); // Adiciona o pedido ao array
  };
  console.log(orders);

  return (
    <div>
      <Header  orders={orders} />
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
                key={dish.id} // Adicionando a chave para cada item no mapa
                name={dish.name}
                cost={dish.cost}
                id={dish.id}
                path={dish.path} // Passando a imagem como prop
                onAddToOrder={onAddToOrder}
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
