import { carregar, remover } from "../utils/storage";
import { useState } from "react";
import "../styles/globals.css";

export default function ListarReservas() {
  const [reservas, setReservas] = useState(carregar("reservas"));

  const cancelar = (id) => {
    remover("reservas", id);
    setReservas(carregar("reservas"));
  };

  return (
    <div className="listar-reservas-container">
      <h2>Listar Reservas</h2>

      <table className="tabela-reservas">
        <thead>
          <tr>
            <th>Mesa</th>
            <th>Nº Reserva</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {reservas.map((r) => (
            <tr key={r.id}>
              <td>{r.mesa}</td>
              <td>{r.codigo}</td>
              <td>{r.data}</td>
              <td>
                <button className="btn-cancelar" onClick={() => cancelar(r.id)}>Cancelar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
