import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Perfil from './pages/Perfil'
import AtualizarPerfil from './pages/AtualizarPerfil'
import CadastrarMesa from './pages/CadastrarMesa'
import ReservaMesa from './pages/ReservaMesa'
import ConsultarMesa from './pages/ConsultarMesa'
import ListarReservas from './pages/ListarReservas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/auth/cadastro" element={<Cadastro/>}/>
            <Route path="/perfil" element={<Perfil/>}/>
            <Route path="/atualizarperfil" element={<AtualizarPerfil/>}/>
            <Route path="/cadastrarmesa" element={<CadastrarMesa/>}/>
            <Route path="/reserva" element={<ReservaMesa/>}/>
            <Route path="/consultar" element={<ConsultarMesa/>}/>
            <Route path="/listar" element={<ListarReservas/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
