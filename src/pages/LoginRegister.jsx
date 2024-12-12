import React, { useState } from "react";
// Estilos globais
import "./styles/LoginRegister_styles.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HeaderLogin from "./components/HeaderLogin";
// Importando os ícones diretamente refazer os imports de imgens

import yakisoba from "./assets/icons/yakisoba_animation.svg"
import { useNavigate } from "react-router-dom";



const LoginRegister = () => {
  

  const [showRegister, setShowRegister] = useState(false);
  
  return (
    <div className="container-tela">
      <div className="userIn">
      
      <HeaderLogin />

      <div className={`imagem-div ${showRegister ? "imagem-direita" : "imagem-esquerda"}`}>
        <img className="imagem" src={yakisoba} alt="Imagem para animação" />
      </div>


     
        <RegisterForm  setShowRegister={setShowRegister} />
      
        <LoginForm setShowRegister={setShowRegister} />
      
      </div>
    </div>
  );
};


export default LoginRegister;