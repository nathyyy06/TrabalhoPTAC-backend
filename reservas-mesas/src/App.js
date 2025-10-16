import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import AtualizarPerfil from './pages/AtualizarPerfil';
import CadastrarMesas from './pages/CadastrarMesas';
import BuscarMesas from './pages/BuscarMesas';
import ReservarMesas from './pages/ReservarMesas';
import VerMinhasReservas from './pages/VerMinhasReservas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/atualizar-perfil" element={<AtualizarPerfil />} />
        <Route path="/cadastrar-mesas" element={<CadastrarMesas />} />
        <Route path="/buscar-mesas" element={<BuscarMesas />} />
        <Route path="/reservar-mesas" element={<ReservarMesas />} />
        <Route path="/ver-minhas-reservas" element={<VerMinhasReservas />} />
      </Routes>
    </Router>
  );
}

export default App;
