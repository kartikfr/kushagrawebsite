interface MetricChipProps {
  children: React.ReactNode;
  className?: string;
}

const MetricChip = ({ children, className = "" }: MetricChipProps) => {
  return (
    <div className={`metric-chip px-4 py-2 ${className}`}>
      {children}
    </div>
  );
};

export default MetricChip;