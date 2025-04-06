import { useEffect, useState } from 'react'
import EnergyChart from './components/EnergyChart'
import SummaryCard from './components/SummaryCard'
import FinancialChart from './components/FinancialChart'
import { getDashboardStatistics, DashboardStatistics } from './services/dashboardStatistics'
import { NavLink } from 'react-router'
import './App.css'

function App() {
  const [stats, setStats] = useState<DashboardStatistics | null>(null)

  useEffect(() => {
    getDashboardStatistics()
      .then((result: DashboardStatistics) => {
        console.log(result)
        setStats(result)
      })
      .catch((error) => {
        console.error('Error fetching dashboard statistics:', error)
      })
  }, [])

  if (!stats) return <p>Loading...</p>

  return (
    <>
      <h1>Dashboard</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <SummaryCard label='Energia Total' value={stats.totalEnergy} suffix=' kWh' />
        <SummaryCard label='Energia compensada' value={stats.compensatedEnergy} suffix=' kWh' />
        <SummaryCard label='Total sem DG' value={stats.totalWithoutDG} suffix=' R$' />
        <SummaryCard label='economizado (DG)' value={stats.dgSavings} suffix=' R$' />
      </div>
      <EnergyChart data={stats.energyChartData} />
      <FinancialChart data={stats.financialChartData} />
      <NavLink
        to='/clients'
        className='block rounded bg-violet-600 text-white p-2 w-full'
      >
        Ver todos os clientes
      </NavLink>
    </>
  )
}

export default App