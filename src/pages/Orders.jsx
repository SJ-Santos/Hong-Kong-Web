import React, { useState,useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import './styles/Orders_styles.css';
import './components/components-styles/Header_styles.css';
import './components/components-styles/btn.css';
import Header from './components/Header';
import OrderCard from './components/OrderCard';
import LoginMessage from './components/LoginMessage';
import Actions from './components/Actions';
import ThankYou from './components/ThankYou';
import OrderTotal from './components/OrderTotal';
import Correct from './assets/icons/correct.svg';
import whiteCart from './assets/icons/whiteCart.svg';
import './styles/Orders_styles.css'
import { AppContext } from '../App';

const Orders = () => {
  const navigate = useNavigate(); 
  const goToLogin = () => navigate('/Login-registro');
  const {orders} = useContext(AppContext);
  //Serve para dizer se o usuario está dentro ou não
  const userIn = false; //Precisa que tenha interação com o banco de dados 

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
      <Header/>
        <div className="container">
         { orders.map((order)=>
        
              <OrderCard 
                key={order.id}
                name={order.name}
                path={order.path}
                quantity={order.quantity} 
                size = {order.size}/>
              
          )} 
            <OrderTotal />
            <Actions    />
        </div>
        { 
          showText && <LoginMessage />
        }
        {
          showEnd && <ThankYou />
        }
      </div>
    </div>
  );
};

export default Orders;
