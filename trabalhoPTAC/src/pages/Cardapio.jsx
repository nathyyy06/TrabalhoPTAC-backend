import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function Cardapio() {
  return (
    <div>
      <Header/>

<div className="cardapio-container">

  <div className="cardapio-grid">

    <div className="item-cardapio">
      <img src="/images/redvelvet.jpg" alt="Bolo Red Velvet" />
      <h3>Bolo Red Velvet</h3>
      <p>R$ 18,00</p>
    </div>

    <div className="item-cardapio">
      <img src="/images/macaron.jpg" alt="Macaron" />
      <h3>Macaron</h3>
      <p>R$ 20,00</p>
    </div>

    <div className="item-cardapio">
      <img src="/images/torta-morango.jpg" alt="Torta de Morango" />
      <h3>Torta de Morango</h3>
      <p>R$ 16,00</p>
    </div>

  </div>
</div>

<Footer/>

    </div>
  );
}
