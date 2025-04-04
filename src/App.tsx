import { useState, useEffect } from 'react'
import './App.css'
import EnergyChart from './components/EnergyChart'
import SummaryCard from './components/SummaryCard'
import { dashboardMocks } from './mocks/dashboardMocks'
import FinancialChart from './components/FinancialChart'
import { NavLink } from 'react-router'

function App() {
  const [summary, setSummary] = useState<typeof dashboardMocks | null>(null);


  useEffect(() => {
    const timeout = setTimeout(() => setSummary(dashboardMocks), 500)
    return () => clearTimeout(timeout);
  }, [])
  if (!summary) return <p>Carregando...</p>
  return (
    <>
      <h1>Dashboard</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <SummaryCard label='Consumo de Energia (kWh)' value={summary.totalEnergia} suffix=' kWh' />
        <SummaryCard label='Energia Compensada (kWh)' value={summary.energiaCompensada} suffix=' kWh' />
        <SummaryCard label='Valor Total sem GD' value={summary.valorSemGD} suffix=' R$' />
        <SummaryCard label='Economia GD' value={summary.economiaGD} suffix=' R$' />
      </div>

      <EnergyChart data={summary.graficoEnergia} />
      <FinancialChart data={summary.graficoFinanceiro} />
      <NavLink
        to='/clients'
        className='block rounded bg-violet-600 text-white p-2 w-full'
      >
        Visualizar todos os clientes
      </NavLink>

    </>
  )
}

export default App
