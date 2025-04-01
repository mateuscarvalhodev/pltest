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
    consumo: number;
    compensada: number;
  }[];
};

export const EnergyChart = ({ data }: Props) => {
  return (
    <div style={{ marginTop: 32 }}>
      <h2>Resultados de Energia (kWh)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} kWh`} />
          <Legend />
          <Bar dataKey="consumo" name="Consumo" fill="#8884d8" />
          <Bar dataKey="compensada" name="Compensada" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;