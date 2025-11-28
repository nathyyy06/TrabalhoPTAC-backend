import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';


function Home() {
  return (
    <div>
      <Header/>

      <div className="home-container">
        <h2 className="home-title">Bem-vindo ao Sistema de Reservas</h2>

        {/* CARDS PRINCIPAIS */}
        <div className="cards-container">

          <Link to="/reserva" className="card">
            <h3>Reservar Mesa</h3>
            <p>Escolha uma mesa e faça sua reserva.</p>
          </Link>

          <Link to="/consultar" className="card">
            <h3>Consultar Mesas</h3>
            <p>Veja quais mesas estão disponíveis.</p>
          </Link>

          <Link to="/listar" className="card">
            <h3>Listar Reservas</h3>
            <p>Confira todas as reservas feitas.</p>
          </Link>

          <Link to="/cadastrar" className="card">
            <h3>Cadastrar Mesa</h3>
            <p>Adicione novas mesas ao sistema. (Somente admin)</p>
          </Link>

          

        </div>

        

       

      </div>

      <Footer/>
    </div>
  );
}

export default Home;
