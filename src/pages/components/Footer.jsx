import React from 'react';
import './components-styles/Footer_styles.css';

//imagens:
import Logomarca from '../assets/icons/Logomarca2.svg';
import Telefone from '../assets/icons/Telefone.svg';
import Instagram from '../assets/icons/Instagram.svg';
import Ifood from '../assets/icons/Ifood.svg';
import Rappi from '../assets/icons/Rappi.svg';
import { useNavigate } from 'react-router-dom';
 
function Footer  ()  {
    const navigate  = useNavigate();
    const GoToOrders = () => {
        navigate('/Orders', { state: { orders } });
      };
  return (
    <footer className="footer">
      {/* lOGO */}
      <img src={Logomarca} alt="Logo marca do HongKong Restaurante" className="Logomarca" />
      <div className="retangulo"></div>
      <div className='iconsFooter'>
      <div className="insta">
      <img src={Instagram} alt="Icone de Instagram" className="Instagram" />
      <a href="https://www.instagram.com/hongkongrestaurante_/" target="_blank">hongkongrestaurante_</a>
      </div>
      <div className="tele">
      <img src={Telefone} alt="Icone de telefone" className="Telefone" />
      <p className="ContatoNumero">+55 81 996300660</p>
      </div>
      <div className="food">
      <img src={Ifood} alt="Icone de Ifood" className="Ifood" />
      <p className="ContatoIfood">Hong Kong Restaurante</p>
      </div>
      <div className="rap">
      <img src={Rappi} alt="Icone de Rappi" className="Rappi" />
      <p className="ContatoRappi">Hong Kong Restaurante</p>
      </div>
      </div>
      
      <div className="retangulo1"></div>
      <div className='Locais'>
      <p className="Endereco">Rua Bernardo Guimarães, n° 415, Santo Amaro - Recife/PE</p>
      <p className="Local">Rua do Lazer, Box 15</p>
      <p className="CEP">CEP 50050440</p>
      </div>
        
      <div className="retangulo2"></div>
        <div className="shorts">
        <a href="#menu">Cardápio</a>
        <a href="#contact">Contato</a>
        <a href="#about">Sobre nós</a>
        <p>Pedidos</p>
        </div>

      
      <div className="copyright"> 
        <p > &copy; Copyright 2024  |  Desenvolvido por Alunos</p>
      </div>
    </footer>
  );
};
 
export default Footer;