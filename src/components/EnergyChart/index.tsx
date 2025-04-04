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
    month: string;
    consumption: number;
    compensated: number;
  }[];
};

export const EnergyChart = ({ data }: Props) => {
  return (
    <div style={{ marginTop: 32 }}>
      <h2>Energy Results (kWh)</h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip formatter={(value: number) => `${value} kWh`} />
          <Legend />
          <Bar dataKey='consumption' name='Consumption' fill='#8884d8' />
          <Bar dataKey='compensated' name='Compensated' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnergyChart;