import React, { useState } from 'react'; // Adicionando useState
import Header from './components/Header';
import DishCard from './components/DishCard';
import Sobrenos from './components/AboutUs';
import { useNavigate } from 'react-router-dom';
import dishes from './dishes.json'
import './styles/Home_styles.css';// Importe o CSS que você usava
//*****************importar as imagens*********************** refazer todos os imports qnd colocar as imagens
import Yaksoba from './assets/imgs/plate_img/Yaksoba.png'
import YaksobaFundo from './assets/imgs/plate_img/Yaksoba_com_fundo.jpeg'
import carne from './assets/imgs/plate_img/chopsuey_com_arroz.jpeg'
import aparmegiana from './assets/imgs/plate_img/aparmegiana_com_macarrao.jpeg'
import frango from './assets/imgs/plate_img/bolinho_de_frango_arroz_e_batata.jpeg'
import yakFritas from './assets/imgs/plate_img/Chopsuey_com_batata.jpeg'
import bifum from './assets/imgs/plate_img/Bifum _de_camarão.jpeg'
import camarao from './assets/imgs/plate_img/Camarao_com_arroz.jpeg'
import xadrez from './assets/imgs/plate_img/Frango_xadrez_com_arroz.jpeg'
import empanado from './assets/imgs/plate_img/Bolinhos_de_frango_com_arroz.jpeg'

function Home() {


  const [orders, setOrders] = useState([]); // Agora o useState está sendo importado corretamente

  // Função para adicionar um prato ao pedido
  const onAddToOrder = (name, cost,id, size) => {
    setOrders([...orders, { name,  cost,id, size }]); // Adiciona o pedido ao array
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
              <a href="#" id="order">Peça agora</a>
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
                image={dish.image} // Passando a imagem como prop
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
