import '../styles/Orders_styles.css';
import './components-styles/Header_styles.css';
import './components-styles/btn.css';

function OrderTotal (){
    return (
        <div className='total'>
              <h2>TOTAL DO PEDIDO:</h2>
              <h2 className='totalPrice'>R$ 00,00</h2>
        </div>
    );
}

export default OrderTotal;