//mensagem de obrigado
import superCorrect from'../assets/icons/superCorrect.svg';
import '../styles/Orders_styles.css';
import '../components/components-styles/Header_styles.css';
import '../components/components-styles/btn.css';

function ThankYou(){
 return(
     <div className='thankYou' >
        <p className='finished'>Pedido Finalizado!</p>
        <img src={superCorrect} alt="Super correct" />
        <span></span>
        <p className='goodMeal'>Obrigado pela preferência. Tenha uma boa refeição!</p>
    </div>
 );
};

export default ThankYou;