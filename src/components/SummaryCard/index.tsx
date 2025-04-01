type Props = {
  label: string;
  value: number | string;
  suffix?: string;
};

export const SummaryCard = ({ label, value, suffix = '' }: Props) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '220px',
      backgroundColor: '#f7f7f7',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
    }}>
      <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>{label}</p>
      <strong style={{ fontSize: '20px', color: '#222' }}>
        {typeof value === 'number'
          ? value.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) + suffix
          : value}
      </strong>
    </div>
  );
};

export default SummaryCard;