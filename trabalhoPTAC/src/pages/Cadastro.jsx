import '../styles/globals.css';

function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-box">
        <h1 className="cadastro-title">Cadastro</h1>
        
        <form className="cadastro-form">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" placeholder="Digite seu nome completo"/>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" placeholder="(00) 00000-0000" />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" placeholder="Crie uma senha" />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha:</label>
            <input type="password" id="confirmarSenha" placeholder="Repita sua senha"/>
          </div>

          <button type="button" className="btn-cadastro"> Cadastrar </button>
        </form>

        <p className="login-link"> Já tem uma conta? <a href="/auth/login">Faça login</a></p>
      </div>
    </div>
  );
}

export default Cadastro;
