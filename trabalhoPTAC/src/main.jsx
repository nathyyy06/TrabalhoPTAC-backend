import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CadastrarMesa from './pages/CadastrarMesa'
import ReservaMesa from './pages/ReservaMesa'
import ConsultarMesa from './pages/ConsultarMesa'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/cadastro" element={<CadastrarMesa/>}/>
            <Route path="/reserva" element={<ReservaMesa/>}/>
            <Route path="/consultar" element={<ConsultarMesa/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
