import "../styles/LoginRegister_styles.css";
import { useNavigate } from "react-router-dom";
import HONG from "../assets/icons/HONG.svg";
import KONG from "../assets/icons/KONG.svg";

function HeaderLogin() {
    const navigate = useNavigate();
    const GoToHome = () =>{navigate('/');};
    return(
    <header className="header">
            <div className="logo-container" onClick={GoToHome}>
              <img className="logo" src={HONG} alt="Hong Logo" />
              <img className="logo" src={KONG} alt="Kong Logo" />
            </div>
    
            <nav className="navbar">
              <a href="#menu" onClick={GoToHome}>Cardápio</a>
              <a href="#" >Contato</a>
              <a href="#about" onClick={GoToHome}>Sobre Nós</a>
            </nav>
          </header>
          );
};
export default HeaderLogin;