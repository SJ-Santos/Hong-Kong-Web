import "../styles/LoginRegister_styles.css";
import { useNavigate } from "react-router-dom";

function LoginForm  ({ setShowRegister })  {
    const navigate = useNavigate();
    const GoToHome = (e) => {
      e.preventDefault();
      navigate("/");
    };
    return (
      <form className="container-login" onSubmit={GoToHome}>
        <h2 className="Entrar">Entrar</h2>
        <div className="container-email-senha">
          <div className="email">
            <label htmlFor="usuario">Email</label>
            <input type="text" id="usuario" placeholder="email@email.com" required />
          </div>
          <div className="senha">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="senha" required />
          </div>
        </div>
  
        <div className="lembre">
          <div className="lembrar">
            <input type="checkbox" id="lembre-me" />
            <label htmlFor="lembre-me" id="lembrar-senha">Lembrar Senha</label>
          </div>
          <a id="esqueceu" href="#">
            Esqueceu sua senha?
          </a>
        </div>
  
        <button id="button-entrar" type="submit">Entrar</button>
  
        <div className="linha-com-texto">
          <span>ou</span>
        </div>
  
        <button id="button-registrar-se" type="button" onClick={() => setShowRegister(true)}>
          Registre-se
        </button>
      </form>
    );
  };

  export default LoginForm;