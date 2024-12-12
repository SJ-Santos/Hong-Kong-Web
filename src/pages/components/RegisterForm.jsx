import "../styles/LoginRegister_styles.css";


function RegisterForm  ({ setShowRegister }) {

    return(

    <form className="container-registro" onSubmit={(e) => e.preventDefault()}>
      <h2 className="registre-se">Registre-se</h2>
      <div className="registro">
        <div className="nome-sobrenome">
          <div className="nome">
            <label htmlFor="usuario-nome">Nome</label>
            <input type="text" id="usuario-nome" placeholder="Nome" required />
          </div>
          <div className="sobrenome">
            <label htmlFor="usuario-sobrenome">Sobrenome</label>
            <input type="text" id="usuario-sobrenome" placeholder="Sobrenome" required />
          </div>
        </div>
  
        <div className="email-registro">
          <label htmlFor="usuario-email">Email</label>
          <input type="email" id="usuario-email" placeholder="email@email.com" required />
        </div>
  
        <div className="senha-confirmarsenha">
          <div className="senharegistro">
            <label htmlFor="usuario-senha">Senha</label>
            <input type="password" id="usuario-senha" placeholder="Senha" required />
          </div>
          <div className="senharegistro">
            <label htmlFor="usuario-confirmarsenha">Confirmar senha</label>
            <input type="password" id="usuario-confirmarsenha" placeholder="Confirmar senha" required />
          </div>
        </div>
  
        <div className="numero">
          <label htmlFor="usuario-numero">Número</label>
          <input type="text" id="usuario-numero" placeholder="(00)00000-0000" />
        </div>
  
        <button id="button-entrar" type="submit">Finalizar</button>
  
        <div className="linha-com-texto">
          <span>ou</span>
        </div>
  
        <button id="button-registrar-se" type="button" onClick={() => setShowRegister(false)}>
          Voltar ao Login
        </button>
      </div>
    </form>
    );
};

export default RegisterForm;