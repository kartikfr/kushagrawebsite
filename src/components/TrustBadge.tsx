import React from 'react';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  Award, 
  Star, 
  Users, 
  Clock, 
  Zap,
  Target,
  TrendingUp,
  Globe,
  Heart
} from 'lucide-react';

interface TrustBadgeProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle?: string;
  variant?: 'default' | 'premium' | 'security' | 'guarantee' | 'social';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const TrustBadge = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  variant = 'default', 
  size = 'md',
  className = '' 
}: TrustBadgeProps) => {
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
    security: 'bg-success/5 border-success/20 text-success',
    guarantee: 'bg-warning/5 border-warning/20 text-warning',
    social: 'bg-bg-3 border-line-medium text-text-primary'
  };

  return (
    <div className={`
      ${sizeClasses[size]} 
      ${variantClasses[variant]}
      glass-subtle rounded-lg border backdrop-blur-sm
      transition-all duration-300 hover:scale-105 hover:shadow-elev-1
      flex flex-col items-center text-center
      ${className}
    `}>
      <div className="mb-2">
        <Icon size={iconSizes[size]} className="text-current" />
      </div>
      <h3 className={`font-semibold text-current ${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}>
        {title}
      </h3>
      {subtitle && (
        <p className={`text-text-secondary mt-1 ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Pre-defined trust badge components
export const SecurityBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Shield}
    title="SSL Secured"
    subtitle="256-bit encryption"
    variant="security"
    size={size}
    className={className}
  />
);

export const PrivacyBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Lock}
    title="Privacy Protected"
    subtitle="GDPR compliant"
    variant="security"
    size={size}
    className={className}
  />
);

export const GuaranteeBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={CheckCircle}
    title="Results Guaranteed"
    subtitle="Or you don't pay"
    variant="guarantee"
    size={size}
    className={className}
  />
);

export const PremiumBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Award}
    title="Premium Service"
    subtitle="Done-for-you"
    variant="premium"
    size={size}
    className={className}
  />
);

export const ExperienceBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Star}
    title="5-Star Rated"
    subtitle="Client satisfaction"
    variant="premium"
    size={size}
    className={className}
  />
);

export const FastResultsBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Zap}
    title="Fast Results"
    subtitle="14-30 days"
    variant="premium"
    size={size}
    className={className}
  />
);

export const NoAdsBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Target}
    title="100% Organic"
    subtitle="No ad spend"
    variant="default"
    size={size}
    className={className}
  />
);

export const GlobalBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Globe}
    title="Global Reach"
    subtitle="Worldwide clients"
    variant="default"
    size={size}
    className={className}
  />
);

export const SupportBadge = ({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg'; className?: string }) => (
  <TrustBadge
    icon={Heart}
    title="24/7 Support"
    subtitle="Always here for you"
    variant="social"
    size={size}
    className={className}
  />
);

export default TrustBadge;
