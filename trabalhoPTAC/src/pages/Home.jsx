import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

function Home() {
  return (
    <div>
      <Header />

      <div className="home-container">

        <h2 className="home-title">
          Bem-vindo ao SweetReserve 🍓
        </h2>

        <div className="cards-container">

          <Link to="/reserva" className="card">
            <h3>Reservar Mesa</h3>
            <p>Escolha uma mesa e faça sua reserva.</p>
          </Link>

          <Link to="/consultar" className="card">
            <h3>Consultar Mesas</h3>
            <p>Veja mesas disponíveis.</p>
          </Link>

          <Link to="/listar" className="card">
            <h3>Listar Reservas</h3>
            <p>Veja todas as reservas do sistema.</p>
          </Link>

          <Link to="/cadastrar" className="card">
            <h3>Cadastrar Mesa</h3>
            <p>Adicionar novas mesas (Admin).</p>
          </Link>

          <Link to="/minhasreservas" className="card">
            <h3>Minhas Reservas</h3>
            <p>Veja suas reservas pessoais.</p>
          </Link>

          <Link to="/cardapio" className="card">
            <h3>Cardápio</h3>
            <p>Doces, cafés e muito mais!</p>
          </Link>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
