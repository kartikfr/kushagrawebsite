interface MetricChipProps {
  children: React.ReactNode;
  className?: string;
}

const MetricChip = ({ children, className = "" }: MetricChipProps) => {
  return (
    <div className={`metric-chip px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-sm whitespace-nowrap flex-shrink-0 ${className}`}>
      {children}
    </div>
  );
};

export default MetricChip;