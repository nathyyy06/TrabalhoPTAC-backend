import React from 'react';
import '../styles/globals.css';

const ListarReservas = () => {

  const reservas = [
    {
      id: 1,
      numeroMesa: '01',
      numeroReserva: 'R-1023',
      data: '2025-10-30',
    },
    {
      id: 2,
      numeroMesa: '02',
      numeroReserva: 'R-1024',
      data: '2025-10-31',
    },
    {
      id: 3,
      numeroMesa: '03',
      numeroReserva: 'R-1025',
      data: '2025-11-01',
    },
  ];

  const handleCancelar = (id) => {
    alert(`Reserva ${id} cancelada.`);
  };

  const handleEditar = (id) => {
    alert(`Editar reserva ${id}.`);
  };

  const handleVerDetalhes = (id) => {
    alert(`Ver detalhes da reserva ${id}.`);
  };

  return (
    <div className="listar-reservas-container">
      <h2>Listar Reservas</h2>

      <table className="tabela-reservas">
        <thead>
          <tr>
            <th>Nº da Mesa</th>
            <th>Nº da Reserva</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.numeroMesa}</td>
              <td>{reserva.numeroReserva}</td>
              <td>{reserva.data}</td>
              <td className="acoes">
                <button
                  className="btn-cancelar"
                  onClick={() => handleCancelar(reserva.id)}
                >
                  Cancelar
                </button>
                <button
                  className="btn-editar"
                  onClick={() => handleEditar(reserva.id)}
                >
                  Editar
                </button>
                <button
                  className="btn-detalhes"
                  onClick={() => handleVerDetalhes(reserva.id)}
                >
                  Ver Detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarReservas;
