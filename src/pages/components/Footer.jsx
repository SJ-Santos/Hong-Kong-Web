import React from 'react';
import './components-styles/Footer_styles.css';
import Logomarca from '../assets/icons/Logomarca.png';
import Retangulo from '../assets/icons/Rectangle.png';
import Group from '../assets/icons/Group.png';
import Vector from '../assets/icons/Vector.png';
import Vector1 from '../assets/icons/Vector1.png';
import Vector2 from '../assets/icons/Vector2.png';
import Vector3 from '../assets/icons/Vector3.png';
import { useNavigate } from 'react-router-dom';
 
function Footer  ()  {
    const navigate  = useNavigate();
    const GoToOrders = () => {
        navigate('/Pedidos', { state: { orders } });
      };
  return (
    <footer className="footer">
      <img src={Logomarca} alt="Footer" className="Logomarca" />
      <div className="retangulop">
        <p>Copyright 2024  |  Desenvolvido por...</p>
      </div>
      <img src={Retangulo} alt="Footer" className="Retangulo" />
      <img src={Group} alt="Footer" className="Group" />
      <img src={Vector} alt="Footer" className="Vector" />
      <img src={Vector1} alt="Footer" className="Vector1" />
      <img src={Vector2} alt="Footer" className="Vector2" />
      <img src={Vector3} alt="Footer" className="Vector3" />
      <div className="Cardapio">
        <a href="#menu">Cardápio</a>
      </div>
      <div className="Insta">
        <a href="https://www.instagram.com/hongkongrestaurante_/" target="_blank" rel="noopener noreferrer">
          hongkongrestaurante_
        </a>
      </div>
      <p className="ContatoNumero">+55 81 996300660</p>
      <p className="Ifood">Hong Kong Restaurante</p>
      <p className="Rappi">Hong Kong Restaurante</p>
      <img src={Retangulo} alt="Footer" className="Retangulo1" />
      <p className="Endereco">Rua Bernardo Guimarães, n° 415, Santo Amaro - Recife/PE</p>
      <p className="Local">Rua do Lazer, Box 15</p>
      <p className="CEP">CEP 50050440</p>
      <img src={Retangulo} alt="Footer" className="Retangulo2" />
      <div className="Contato">
        <a href="#contact">Contato</a>
      </div>
      <div className="SobreNos">
        <a href="#about">Sobre nós</a>
      </div>
      <div className="Pedidos">
      <a href="">Pedidos</a>

      </div>
      
    
    </footer>
  );
};
 
export default Footer