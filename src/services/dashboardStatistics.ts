import api from './invoicesService'

// Dados brutos conforme retornados pelo endpoint
interface EnergyBillStatistics {
  data: {
    [month: string]: {
      consumo: {
        total: number;
        compensado: number;
      };
      valor: {
        'Valor Sem GD': number;
        'Economia GD': number;
      };
    };
  };
}

// Interface que usaremos no front
export interface DashboardStatistics {
  totalEnergy: number;
  compensatedEnergy: number;
  totalWithoutDG: number;
  dgSavings: number;
  energyChartData: {
    month: string;
    consumption: number;
    compensated: number;
  }[];
  financialChartData: {
    month: string;
    totalWithoutDG: number;
    dgSavings: number;
  }[];
}

export async function getDashboardStatistics(): Promise<DashboardStatistics> {

  const response = await api.get<EnergyBillStatistics>('/energy-bills/statistics');
  const rawData = response.data.data;

  let totalEnergy = 0;
  let compensatedEnergy = 0;
  let totalWithoutDG = 0;
  let dgSavings = 0;

  const energyChartData: DashboardStatistics['energyChartData'] = [];
  const financialChartData: DashboardStatistics['financialChartData'] = [];

  const monthMap: Record<string, string> = {
    jan: 'Jan',
    fev: 'Fev',
    mar: 'Mar',
    abr: 'Abr',
    mai: 'Mai',
    jun: 'Jun',
    jul: 'Jul',
    ago: 'Ago',
    set: 'Set',
    out: 'Out',
    nov: 'Nov',
    dez: 'Dez',
  };

  for (const key in rawData) {
    if (Object.prototype.hasOwnProperty.call(rawData, key)) {
      const parts = key.split('/');
      const monthAbbr = parts[0].toLowerCase();
      const year = parts[1];
      const monthEnglish = monthMap[monthAbbr] || key;
      const formattedMonth = `${monthEnglish}/${year.slice(-2)}`;

      const monthData = rawData[key];
      const consumptionTotal = monthData.consumo.total;
      const consumptionCompensated = monthData.consumo.compensado;
      const valueWithoutDG = monthData.valor['Valor Sem GD'];
      const savingsDG = monthData.valor['Economia GD'];

      totalEnergy += consumptionTotal;
      compensatedEnergy += consumptionCompensated;
      totalWithoutDG += valueWithoutDG;
      dgSavings += savingsDG;

      energyChartData.push({
        month: formattedMonth,
        consumption: consumptionTotal,
        compensated: consumptionCompensated,
      });

      financialChartData.push({
        month: formattedMonth,
        totalWithoutDG: valueWithoutDG,
        dgSavings: savingsDG,
      });
    }
  }
  return {
    totalEnergy,
    compensatedEnergy,
    totalWithoutDG,
    dgSavings,
    energyChartData,
    financialChartData,
  };
}