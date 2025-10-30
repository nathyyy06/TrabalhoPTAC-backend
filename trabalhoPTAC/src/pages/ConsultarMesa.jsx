import React from 'react';
import '../styles/globals.css';

const ConsultarMesa = () => {
  return (
    <div className="consultar-mesa-container">
      <h2>Consultar Mesas</h2>

      <form className="form-consulta">
        <div className="form-group">
          <label htmlFor="numeroMesa">Nº da Mesa</label>
          <input type="text" id="numeroMesa" placeholder="Ex: 01" />
        </div>

        <div className="form-group">
          <label htmlFor="statusMesa">Status da Mesa</label>
          <select id="statusMesa">
            <option value="">Selecione</option>
            <option value="disponivel">Disponível</option>
            <option value="ocupada">Ocupada</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacidadeMesa">Capacidade</label>
          <input type="number" id="capacidadeMesa" placeholder="Ex: 4" />
        </div>

        <div className="botoes">
          <button type="button" className="btn-consultar">Consultar</button>
          <button type="button" className="btn-limpar">Limpar</button>
        </div>
      </form>
    </div>
  );
};

export default ConsultarMesa;
