import "../styles/globals.css";
import { carregar } from "../utils/storage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Perfil() {
  const perfil = carregar("perfil", {
    nome: "Não informado",
    email: "Não informado",
    telefone: "(00) 00000-0000",
  });

  return (
    <div>
      <Header/>

      <div className="perfil-container">
        <div className="perfil-box">
          <h1 className="perfil-title">Meu Perfil</h1>

          <div className="form-group">
            <label>Nome:</label>
            <input value={perfil.nome} readOnly />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input value={perfil.email} readOnly />
          </div>

          <div className="form-group">
            <label>Telefone:</label>
            <input value={perfil.telefone} readOnly />
          </div>

          <Link to="/atualizarperfil">
            <button className="btn-editar">Editar Perfil</button>
          </Link>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
