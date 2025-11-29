import { carregar, remover } from "../utils/storage";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function MinhasReservas() {
  const [reservas, setReservas] = useState(carregar("reservas"));

  const cancelar = (id) => {
    remover("reservas", id);
    setReservas(carregar("reservas"));
  };

  return (
    <div>
      <Header />

      <div className="listar-reservas-container">
        <h2>Minhas Reservas</h2>

        <table>
          <thead>
            <tr>
              <th>Mesa</th>
              <th>Data</th>
              <th>Cliente</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            {reservas.map((r) => (
              <tr key={r.id}>
                <td>{r.mesa}</td>
                <td>{r.data}</td>
                <td>{r.cliente}</td>
                <td>
                  <button className="btn-cancelar" onClick={() => cancelar(r.id)}>
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
