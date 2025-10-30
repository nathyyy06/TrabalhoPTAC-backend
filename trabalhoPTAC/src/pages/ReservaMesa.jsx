
import '../styles/globals.css';

const ReservaMesa = () => {
  return (
    <div className="reserva-mesa-container">
      <h2>Reservar Mesa</h2>

      <form className="form-reserva">
        <div className="form-group">
          <label htmlFor="dataReserva">Data da Reserva</label>
          <input type="date" id="dataReserva" />
        </div>

        <div className="form-group">
          <label htmlFor="horarioReserva">Horário</label>
          <input type="time" id="horarioReserva" />
        </div>

        <div className="form-group">
          <label htmlFor="nomeCliente">Nome do Cliente</label>
          <input type="text" id="nomeCliente" placeholder="Ex: João Silva" />
        </div>

        <div className="form-group">
          <label htmlFor="contatoCliente">Contato</label>
          <input type="tel" id="contatoCliente" placeholder="Ex: (11) 99999-9999" />
        </div>

        <div className="form-group">
          <label htmlFor="mesaReserva">Mesa</label>
          <select id="mesaReserva">
            <option value="">Selecione uma mesa</option>
            <option value="mesa1">Mesa 1</option>
            <option value="mesa2">Mesa 2</option>
            <option value="mesa3">Mesa 3</option>
          </select>
        </div>

        <div className="botoes">
          <button type="button" className="btn-confirmar">Confirmar Reserva</button>
        </div>
      </form>
    </div>
  );
};

export default ReservaMesa;
