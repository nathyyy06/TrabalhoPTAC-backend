import { Link, useLocation } from "react-router-dom";
import "../styles/globals.css";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <h2>🍰 SweetReserve</h2>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link className={pathname === "/" ? "active" : ""} to="/">Home</Link>
          </li>
          <li>
            <Link className={pathname === "/reserva" ? "active" : ""} to="/reserva">Reservar</Link>
          </li>
          <li>
            <Link className={pathname === "/consultar" ? "active" : ""} to="/consultar">Consultar Mesas</Link>
          </li>
          <li>
            <Link className={pathname === "/listar" ? "active" : ""} to="/listar">Listar Reservas</Link>
          </li>
          <li>
            <Link className={pathname === "/minhasreservas" ? "active" : ""} to="/minhasreservas">Minhas Reservas</Link>
          </li>
          <li>
            <Link className={pathname === "/cardapio" ? "active" : ""} to="/cardapio">Cardápio</Link>
          </li>
          <li>
            <Link className={pathname === "/cadastrar" ? "active" : ""} to="/cadastrar">Cadastrar Mesa</Link>
          </li>
          <li>
            <Link className={pathname === "/perfil" ? "active" : ""} to="/perfil">Perfil</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
