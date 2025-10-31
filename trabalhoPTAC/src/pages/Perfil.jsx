import "../styles/globals.css"; 
import { Link } from "react-router-dom";

function Perfil() {
  return (
    <div className="perfil-container">
      <div className="perfil-box">
        <h1 className="perfil-title">Meu Perfil</h1>

        <div className="perfil-foto-container">
          <img src="../images/fotodeperfil.jpg" alt="Foto de perfil" className="perfil-foto"/>
        </div>

        <form className="perfil-form">
          <div className="form-group">
            <label htmlFor="nome">Nome Completo:</label>
            <input type="text" id="nome" value="Luiz Magaroto" readOnly />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" value="luizmagaroto@email.com"/>
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" id="telefone" value="(67) 9909-1139"/>
          </div>

          <Link to="/atualizarperfil">
            <button type="button" className="btn-editar"> Editar Perfil </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Perfil;
