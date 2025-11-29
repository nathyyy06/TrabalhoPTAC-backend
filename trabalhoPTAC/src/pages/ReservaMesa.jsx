import { useState } from "react";
import { adicionar } from "../utils/storage";
import "../styles/globals.css";

export default function ReservaMesa() {
  const [form, setForm] = useState({
    data: "",
    horario: "",
    cliente: "",
    contato: "",
    mesa: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const reservar = () => {
    const reserva = {
      id: Date.now(),
      codigo: "R-" + Math.floor(Math.random() * 9999),
      data: form.data,
      horario: form.horario,
      cliente: form.cliente,
      contato: form.contato,
      mesa: form.mesa,
    };

    adicionar("reservas", reserva);
    alert("Reserva criada!");
  };

  return (
    <div className="reserva-mesa-container">
      <h2>Reservar Mesa</h2>

      <form className="form-reserva">
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
          <input id="mesa" placeholder="Ex: 01" onChange={handleChange} />
        </div>

        <button type="button" className="btn-confirmar" onClick={reservar}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
