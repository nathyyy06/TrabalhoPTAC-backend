import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function Cardapio() {
  return (
    <div>
      <Header/>

      <div className="cardapio-container">
        <h2>🍰 Cardápio</h2>

        <div className="cardapio-grid">

          <div className="item-cardapio">
            <h3>Bolo Red Velvet</h3>
            <p>R$ 18,00</p>
          </div>

          <div className="item-cardapio">
            <h3>Cappuccino Cremoso</h3>
            <p>R$ 12,00</p>
          </div>

          <div className="item-cardapio">
            <h3>Torta de Morango</h3>
            <p>R$ 16,00</p>
          </div>

          <div className="item-cardapio">
            <h3>Macaron (6 un.)</h3>
            <p>R$ 20,00</p>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  );
}
