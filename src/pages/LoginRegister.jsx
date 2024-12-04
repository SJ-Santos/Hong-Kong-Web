import React, { useState } from "react";
// Estilos globais
import "./styles/LoginRegister_styles.css";
// Importando os ícones diretamente refazer os imports de imgens
import HONG from "./assets/icons/HONG.svg";
import KONG from "./assets/icons/KONG.svg";
import yakisoba from "./assets/icons/yakisoba_animation.svg"
import { useNavigate } from "react-router-dom";



const LoginRegister = () => {
  
  const navigate = useNavigate();
  const [showRegister, setShowRegister] = useState(false);
  const GoToOrders = () =>{navigate('/Orders');};
  const GoToHome = () =>{navigate('/Home');};
  return (
    <div className="container-tela">
      <div className="userIn">
      {/* Header */}
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

      <div className={`imagem-div ${showRegister ? "imagem-direita" : "imagem-esquerda"}`}>
        <img className="imagem" src={yakisoba} alt="Imagem para animação" />
      </div>


      {/* Conteúdo principal */}
      {showRegister ? (
        <RegisterForm setShowRegister={setShowRegister} />
      ) : (
        <LoginForm setShowRegister={setShowRegister} />
      )}
      </div>
    </div>
  );
};

// Componente de formulário de registro
const RegisterForm = ({ setShowRegister }) => (
  <div className="container-registro">
    <h2 className="registre-se">Registre-se</h2>
    <div className="registro">
      <div className="nome-sobrenome">
        <div className="nome">
          <label htmlFor="usuario-nome">Nome</label>
          <input type="text" id="usuario-nome" placeholder="Nome" />
        </div>
        <div className="sobrenome">
          <label htmlFor="usuario-sobrenome">Sobrenome</label>
          <input type="text" id="usuario-sobrenome" placeholder="Sobrenome" />
        </div>
      </div>

      <div className="email-registro">
        <label htmlFor="usuario-email">Email</label>
        <input type="email" id="usuario-email" placeholder="email@email.com" />
      </div>

      <div className="senha-confirmarsenha">
        <div className="senharegistro">
          <label htmlFor="usuario-senha">Senha</label>
          <input type="password" id="usuario-senha" placeholder="Senha" />
        </div>
        <div className="senharegistro">
          <label htmlFor="usuario-confirmarsenha">Confirmar senha</label>
          <input type="password" id="usuario-confirmarsenha" placeholder="Confirmar senha" />
        </div>
      </div>

      <div className="numero">
        <label htmlFor="usuario-numero">Número</label>
        <input type="text" id="usuario-numero" placeholder="(00)00000-0000" />
      </div>

      <button id="button-entrar">Finalizar</button>

      <div className="linha-com-texto">
        <span>ou</span>
      </div>

      <button id="button-registrar-se" onClick={() => setShowRegister(false)}>
        Voltar ao Login
      </button>
    </div>
  </div>
);

// Componente de formulário de login
const LoginForm = ({ setShowRegister }) => {
  const navigate = useNavigate();
  const GoToHome = () => {
    navigate("/");
  };
  return (<div className="container-login">
    <h2 className="Entrar">Entrar</h2>
    <div className="container-email-senha">
      <div className="email">
        <label htmlFor="usuario">Email</label>
        <input type="text" id="usuario" placeholder="email@email.com" />
      </div>
      <div className="senha">
        <label htmlFor="usuario">Senha</label>
        <input type="password" id="usuario" placeholder="senha" />
      </div>
    </div>

    <div className="lembre">
      <div className="lembrar">
        <input type="checkbox" id="lembre-me" />
        <label id="lembrar-senha">Lembrar Senha</label>
      </div>
      <a id="esqueceu" href="#">
        Esqueceu sua senha?
      </a>
    </div>

    <button id="button-entrar" onClick={GoToHome} >Entrar</button>

    <div className="linha-com-texto">
      <span>ou</span>
    </div>

    <button id="button-registrar-se" onClick={() => setShowRegister(true)}>
      Registre-se
    </button>
  </div>);
}

  ;

export default LoginRegister;