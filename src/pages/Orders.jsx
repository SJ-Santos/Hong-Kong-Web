import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import superCorrect from'./assets/icons/superCorrect.svg'
import './styles/Orders_styles.css';
import './components/components-styles/Header_styles.css';
import './components/components-styles/btn.css';
import CamaraoComArroz from './assets/imgs/plate_img/Camarao_com_arroz.jpeg';
import Header from './components/Header';
import OrderCard from './components/OrderCard';
import Correct from './assets/icons/correct.svg';
import whiteCart from './assets/icons/whiteCart.svg';
import './styles/Orders_styles.css'

const Orders = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const { orders } = location.state || {};
  console.log(orders)
  const goToLogin = () => navigate('/LoginRegister');
  const userIn = false;
  const [showText, setShowText] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [color, setColor] = useState('none');
  
  const handleButton = ()=>{
        setColor('block')
        if (userIn){
          setShowEnd(true)
        }
        else{
          
        setShowText(true)

        }
        }
const exit =()=>{
  setColor('none')
  if(userIn){
    setShowEnd(false)
    
  }
  else{
  setShowText(false)
  }
}
  return (
    <div>
      <div className='overlay' style={{display:color} } onClick={exit} ></div>
      <div >
      <Header />
        <div className="container">
          
           <OrderCard>  </OrderCard>
           <OrderCard/>
          <div className="actions">
            <button
              onClick={() => handleButton()}
              className='finishOrder'
            >
              <img src={Correct} alt="Simbolo de correto" />
              Finalizar pedido
            </button>
            <div className='OneOrOther'>
              <span className='line1'></span>
              <p>ou</p>
              <span className='line2'></span>
            </div>
            <div className='continueOrder'>
              <img src={whiteCart} alt="Simbolo de carrinho de compras" />
              Continuar comprando
            </div>
          </div>
        </div>
        { 
          showText && <div
          className="messageLogin"
          
        >
          <p className='ops'>Ops! Para finalizar o seu pedido, você deve entrar na sua conta!</p>
          <div className='login'>
            Entre na sua conta
          </div>
          <div className='OneOrOther'>
            <span className='line1'></span>
            <p>ou</p>
            <span className='line2'></span>
          </div>
          <button className='signIn'>
            Registre-se agora mesmo
          </button>
        </div>
        }
        {showEnd &&
        <div className='thankYou' >
            <p className='finished'>Pedido Finalizado!</p>
            <img src={superCorrect} alt="Super correct" />
            <span></span>
            <p className='goodMeal'>Obrigado pela preferência. Tenha uma boa refeição!</p>
        </div>}
      </div>
    </div>
  );
};

export default Orders;
