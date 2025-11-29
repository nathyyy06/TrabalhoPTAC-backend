import { useState } from "react";
import { adicionar, atualizar, remover, carregar } from "../utils/storage";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function CadastrarMesa() {
  const [mesas, setMesas] = useState(carregar("mesas"));
  const [form, setForm] = useState({
    numero: "",
    capacidade: "",
    status: "disponivel"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const salvarMesa = () => {
    const novaMesa = {
      id: Date.now(),
      ...form,
    };

    adicionar("mesas", novaMesa);
    setMesas(carregar("mesas"));
    alert("Mesa cadastrada!");
  };

  const excluirMesa = (id) => {
    remover("mesas", id);
    setMesas(carregar("mesas"));
  };

  const editarMesa = (mesa) => {
    setForm({
      numero: mesa.numero,
      capacidade: mesa.capacidade,
      status: mesa.status,
    });

    remover("mesas", mesa.id);
    setMesas(carregar("mesas"));
  };

  return (
    <div className="cadastrar-mesa-container">
      <Footer />
      <h2>Cadastrar Mesas</h2>

      <form className="form-mesa">
        <div className="form-group">
          <label>Número da Mesa</label>
          <input id="numero" value={form.numero} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Capacidade</label>
          <input id="capacidade" value={form.capacidade} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select id="status" value={form.status} onChange={handleChange}>
            <option value="disponivel">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>

        <div className="botoes">
          <button type="button" className="btn-salvar" onClick={salvarMesa}>
            Salvar
          </button>
        </div>
      </form>

      <h3 style={{ marginTop: 20 }}>Mesas Cadastradas</h3>
      {mesas.map((m) => (
        <div key={m.id} className="box">
          <p>Mesa {m.numero} | Capacidade: {m.capacidade}</p>
          <p>Status: {m.status}</p>

          <button className="btn-editar" onClick={() => editarMesa(m)}>Editar</button>
          <button className="btn-excluir" onClick={() => excluirMesa(m.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}
