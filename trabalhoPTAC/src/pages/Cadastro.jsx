import '../styles/globals.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Cadastro() {
  return (
    <div>
      <Header />

      <div className="cadastro-box">
        <h1 className="cadastro-title">Cadastro</h1>
        
        <form className="cadastro-form">

          <div className="form-group">
            <label>Nome Completo:</label>
            <input type="text" placeholder="Digite seu nome" required />
          </div>

          <div className="form-group">
            <label>E-mail:</label>
            <input type="email" placeholder="Digite seu e-mail" required />
          </div>

          <div className="form-group">
            <label>Telefone:</label>
            <input type="tel" placeholder="(00) 00000-0000" required />
          </div>

          <div className="form-group">
            <label>Senha:</label>
            <input type="password" placeholder="Crie uma senha" required />
          </div>

          <div className="form-group">
            <label>Confirmar Senha:</label>
            <input type="password" placeholder="Repita sua senha" required />
          </div>

          <button type="button" className="btn-cadastro">Cadastrar</button>
        </form>

      </div>

      <Footer />
    </div>
  );
}
