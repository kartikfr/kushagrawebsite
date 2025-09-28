import React from 'react';
import { TrendingUp, Users, Clock, Target, Zap, Award, DollarSign, ArrowUp } from 'lucide-react';

interface StatsBadgeProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
  trend?: {
    value: string;
    direction: 'up' | 'down';
  };
  variant?: 'default' | 'premium' | 'success' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatsBadge = ({ 
  icon: Icon, 
  value, 
  label, 
  trend,
  variant = 'default', 
  size = 'md',
  className = '' 
}: StatsBadgeProps) => {
  const sizeClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const variantClasses = {
    default: 'bg-bg-2 border-line-subtle text-text-primary',
    premium: 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 text-accent',
    success: 'bg-success/5 border-success/20 text-success',
    accent: 'bg-warning/5 border-warning/20 text-warning'
  };

  const trendColors = {
    up: 'text-success',
    down: 'text-error'
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      ${variantClasses[variant]}
      glass-subtle rounded-lg border backdrop-blur-sm
      transition-all duration-300 hover:scale-105 hover:shadow-elev-1
      text-center
      ${className}
    `}>
      <div className="mb-2">
        <Icon size={iconSizes[size]} className="text-current" />
      </div>
      <div className={`font-bold text-current mb-1 ${
        size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-2xl'
      }`}>
        {value}
      </div>
      <p className={`text-text-secondary mb-1 ${
        size === 'sm' ? 'text-xs' : 'text-sm'
      }`}>
        {label}
      </p>
      {trend && (
        <div className={`flex items-center justify-center gap-1 ${
          size === 'sm' ? 'text-xs' : 'text-sm'
        } ${trendColors[trend.direction]}`}>
          <ArrowUp 
            size={size === 'sm' ? 10 : 12} 
            className={trend.direction === 'down' ? 'rotate-180' : ''} 
          />
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
};

// Pre-defined stats badges
export const ImpressionsStatsBadge = ({ className = '' }: { className?: string }) => (
  <StatsBadge
    icon={TrendingUp}
    value="8.4×"
    label="More impressions"
    trend={{ value: "in 28 days", direction: 'up' }}
    variant="success"
    className={className}
  />
);

export const CallsStatsBadge = ({ className = '' }: { className?: string }) => (
  <StatsBadge
    icon={Target}
    value="14"
    label="Sales calls"
    trend={{ value: "in 3 weeks", direction: 'up' }}
    variant="premium"
    className={className}
  />
);

export const RevenueStatsBadge = ({ className = '' }: { className?: string }) => (
  <StatsBadge
    icon={DollarSign}
    value="$XX,XXX"
    label="New pipeline"
    trend={{ value: "from inbound", direction: 'up' }}
    variant="accent"
    className={className}
  />
);

export const ClientsStatsBadge = ({ className = '' }: { className?: string }) => (
  <StatsBadge
    icon={Users}
    value="1-5"
    label="High-ticket clients/month"
    variant="default"
    className={className}
  />
);

export const SpeedStatsBadge = ({ className = '' }: { className?: string }) => (
  <StatsBadge
    icon={Zap}
    value="14-30"
    label="Days to results"
    variant="premium"
    className={className}
  />
);

export const SuccessRateBadge = ({ className = '' }: { className?: string }) => (
  <StatsBadge
    icon={Award}
    value="100%"
    label="Success rate"
    variant="success"
    className={className}
  />
);

export default StatsBadge;
