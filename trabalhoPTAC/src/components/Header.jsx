import "../styles/globals.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Casa do Sabor</h2>
        </div>

        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/consultar">Minhas Reservas</a></li>
            <li><a href="/perfil">Perfil</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
