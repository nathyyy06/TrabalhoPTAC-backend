import "../styles/globals.css"; 

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" placeholder="Digite sua senha" />
          </div>

          <button type="button" className="btn-login"> Entrar </button>
        </form>

        <p className="register-link"> Ainda não tem uma conta? <a href="/auth/cadastro">Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default Login;
