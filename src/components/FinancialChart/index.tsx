import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts';

type Props = {
  data: {
    mes: string;
    valorSemGD: number;
    economiaGD: number;
  }[];
};

export const FinancialChart = ({ data }: Props) => {
  return (
    <div style={{ marginTop: 32 }}>
      <h2>Resultados Financeiros (R$)</h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <XAxis dataKey='mes' />
          <YAxis />
          <Tooltip formatter={(value: number) =>
            value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          } />
          <Legend />
          <Bar dataKey='valorSemGD' name='Valor Sem GD' fill='#ffc658' />
          <Bar dataKey='economiaGD' name='Economia GD' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialChart;