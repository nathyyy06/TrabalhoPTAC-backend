import { useState, useEffect } from "react";
import { salvar, carregar } from "../utils/storage";
import "../styles/globals.css";

export default function AtualizarPerfil() {
  const [perfil, setPerfil] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  useEffect(() => {
    const dados = carregar("perfil", {});
    setPerfil(dados);
  }, []);

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.id]: e.target.value });
  };

  const salvarPerfil = () => {
    salvar("perfil", perfil);
    alert("Perfil atualizado!");
  };

  return (
    <div className="alterar-perfil-container">
      <h1 className="title">Alterar Perfil</h1>

      <form className="form">
        <div className="form-group">
          <label>Nome:</label>
          <input id="nome" value={perfil.nome} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input id="email" value={perfil.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Telefone:</label>
          <input id="telefone" value={perfil.telefone} onChange={handleChange} />
        </div>

        <button type="button" className="btn-salvar" onClick={salvarPerfil}>
          Salvar
        </button>
      </form>
    </div>
  );
}
