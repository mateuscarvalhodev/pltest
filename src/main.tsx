import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        {/* 
        <Route element={<SidebarLayout />}>
        <Route path="/clientes" element={<Clients />} />
        <Route path='/clientes-selecionados' element={<SelectedClients />} />
        */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
