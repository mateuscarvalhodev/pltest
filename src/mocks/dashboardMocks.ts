export const dashboardMocks = {
  totalEnergia: 526, // kWh
  energiaCompensada: 140, // kWh
  valorSemGD: 360.75, // R$
  economiaGD: 125.30, // R$
  graficoEnergia: [
    { mes: 'Jan/24', consumo: 400, compensada: 120 },
    { mes: 'Fev/24', consumo: 460, compensada: 130 },
    { mes: 'Mar/24', consumo: 480, compensada: 125 },
    { mes: 'Abr/24', consumo: 526, compensada: 140 },
  ],
  graficoFinanceiro: [
    { mes: 'Jan/24', valorSemGD: 310.50, economiaGD: 110.40 },
    { mes: 'Fev/24', valorSemGD: 325.90, economiaGD: 115.00 },
    { mes: 'Mar/24', valorSemGD: 340.20, economiaGD: 120.75 },
    { mes: 'Abr/24', valorSemGD: 360.75, economiaGD: 125.30 },
  ],
};