import "../styles/globals.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo ou nome do sistema */}
        <div className="logo">
          <h2>🍽️ MyRestaurant</h2>
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
