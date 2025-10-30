import Footer from "../components/Footer";
import '../styles/globals.css';

const CadastrarMesa = () => {
  return (
    <div className="cadastrar-mesa-container">
      <h2>Cadastrar Mesas</h2>

      <form className="form-mesa">
        <div className="form-group">
          <label htmlFor="numeroMesa">Número da Mesa</label>
          <input type="text" id="numeroMesa" placeholder="Ex: 01" />
        </div>

        <div className="form-group">
          <label htmlFor="capacidadeMesa">Capacidade</label>
          <input type="number" id="capacidadeMesa" placeholder="Ex: 4" />
        </div>

        <div className="form-group">
          <label htmlFor="statusMesa">Status</label>
          <select id="statusMesa">
            <option value="disponivel">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>

        <div className="botoes">
          <button type="button" className="btn-salvar">Salvar</button>
          <button type="button" className="btn-editar">Editar</button>
          <button type="button" className="btn-excluir">Excluir</button>
        </div>
      </form>
    </div>
  );
};

export default CadastrarMesa;
