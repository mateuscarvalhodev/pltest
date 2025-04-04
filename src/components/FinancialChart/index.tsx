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
    totalWithoutDG: number;
    dgSavings: number;
  }[];
};

export const FinancialChart = ({ data }: Props) => {
  return (
    <div style={{ marginTop: 32 }}>
      <h2>Financial Results (R$)</h2>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip formatter={(value: number) =>
            value.toLocaleString('en-US', { style: 'currency', currency: 'BRL' })
          } />
          <Legend />
          <Bar dataKey='totalWithoutDG' name='Total Without DG' fill='#ffc658' />
          <Bar dataKey='dgSavings' name='DG Savings' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialChart;