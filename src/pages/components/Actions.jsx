import '../styles/Orders_styles.css';
import './components-styles/Header_styles.css';
import './components-styles/btn.css';
import Correct from '../assets/icons/correct.svg';
import whiteCart from '../assets/icons/whiteCart.svg';

function Actions (){
    const handleButton = ()=>{
        setColor('block')
        if (userIn){
          setShowEnd(true)
        }
        else{
          
        setShowText(true)

        }
        }
   return (
    <div className="actions">
       <button
         onClick={handleButton}
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
   );
};

export default Actions;