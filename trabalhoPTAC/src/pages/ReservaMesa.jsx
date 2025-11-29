import { useState } from "react";
import { adicionar } from "../utils/storage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function ReservaMesa() {
  const [form, setForm] = useState({
    data: "",
    horario: "",
    cliente: "",
    contato: "",
    mesa: "",
    pessoas: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const reservar = () => {
    const reserva = {
      id: Date.now(),
      codigo: "R-" + Math.floor(Math.random() * 9999),
      ...form,
    };

    adicionar("reservas", reserva);
    alert("Reserva criada com sucesso!");
  };

  return (
    <div>
      <Header />

      <div className="reserva-mesa-container">
        <h2>Reservar Mesa</h2>

        <div className="form-reserva">

          <div className="form-group">
            <label>Data</label>
            <input id="data" type="date" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Horário</label>
            <input id="horario" type="time" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Cliente</label>
            <input id="cliente" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Contato</label>
            <input id="contato" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Mesa</label>
            <input id="mesa" onChange={handleChange} placeholder="Ex: 05" />
          </div>

          <div className="form-group">
            <label>Quantidade de Pessoas</label>
            <input id="pessoas" type="number" min="1" onChange={handleChange} />
          </div>

          <button className="btn-confirmar" onClick={reservar}>
            Confirmar Reserva
          </button>

        </div>
      </div>

      <Footer />
    </div>
  );
}
