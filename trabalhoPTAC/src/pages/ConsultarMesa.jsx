import '../styles/globals.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { carregar } from "../utils/storage";

export default function ConsultarMesa() {
  const mesas = carregar("mesas", []);

  return (
    <div>
      <Header />

      <div className="consultar-mesa-container">
        <h2>Consultar Mesas</h2>

        {mesas.length === 0 && <p>Nenhuma mesa cadastrada ainda.</p>}

        {mesas.map((m) => (
          <div key={m.id} className="box">
            <p><strong>Mesa:</strong> {m.numero}</p>
            <p><strong>Capacidade:</strong> {m.capacidade}</p>
            <p><strong>Status:</strong> {m.status}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
