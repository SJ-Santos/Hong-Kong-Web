//tela de é necessario fazer login
import '../styles/Orders_styles.css';
import '../components/components-styles/Header_styles.css';
import '../components/components-styles/btn.css';

const LoginMessage  =() =>{
return(
    <div className="messageLogin">
          <p className='ops'>Ops! Para finalizar o seu pedido, você deve entrar na sua conta!</p>
          <div className='login' onClick={goToLogin}>
            Entre na sua conta
          </div>
          <div className='OneOrOther'>
            <span className='line1'></span>
            <p>ou</p>
            <span className='line2'></span>
          </div>
          <button className='signIn' onClick={goToLogin}>
            Registre-se agora mesmo
          </button>
    </div>
);
};

export default LoginMessage;