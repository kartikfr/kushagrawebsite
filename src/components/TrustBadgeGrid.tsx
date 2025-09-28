import React from 'react';
import TrustBadge, { 
  SecurityBadge, 
  PrivacyBadge, 
  GuaranteeBadge, 
  PremiumBadge, 
  ExperienceBadge, 
  FastResultsBadge, 
  NoAdsBadge, 
  GlobalBadge, 
  SupportBadge 
} from './TrustBadge';

interface TrustBadgeGridProps {
  variant?: 'hero' | 'section' | 'footer' | 'inline';
  badges?: Array<'security' | 'privacy' | 'guarantee' | 'premium' | 'experience' | 'fast' | 'no-ads' | 'global' | 'support'>;
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const badgeComponents = {
  security: SecurityBadge,
  privacy: PrivacyBadge,
  guarantee: GuaranteeBadge,
  premium: PremiumBadge,
  experience: ExperienceBadge,
  fast: FastResultsBadge,
  'no-ads': NoAdsBadge,
  global: GlobalBadge,
  support: SupportBadge
};

const TrustBadgeGrid = ({ 
  variant = 'section', 
  badges = ['guarantee', 'premium', 'no-ads'], 
  columns = 3,
  className = '' 
}: TrustBadgeGridProps) => {
  const gridClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
  };

  const variantClasses = {
    hero: 'gap-3 sm:gap-4 mb-6',
    section: 'gap-4 md:gap-6 mb-8',
    footer: 'gap-3 mb-6',
    inline: 'gap-2 sm:gap-3'
  };

  const sizeMap = {
    hero: 'sm' as const,
    section: 'md' as const,
    footer: 'sm' as const,
    inline: 'sm' as const
  };

  return (
    <div className={`
      grid ${gridClasses[columns]} ${variantClasses[variant]} ${className}
    `}>
      {badges.map((badgeKey, index) => {
        const BadgeComponent = badgeComponents[badgeKey];
        return (
          <BadgeComponent 
            key={index} 
            size={sizeMap[variant]}
          />
        );
      })}
    </div>
  );
};

// Pre-defined badge configurations for different sections
export const HeroTrustBadges = ({ className = '' }: { className?: string }) => (
  <TrustBadgeGrid 
    variant="hero" 
    badges={['guarantee', 'premium', 'no-ads']} 
    columns={3}
    className={className}
  />
);

export const SectionTrustBadges = ({ className = '' }: { className?: string }) => (
  <TrustBadgeGrid 
    variant="section" 
    badges={['security', 'experience', 'fast', 'support']} 
    columns={4}
    className={className}
  />
);

export const FooterTrustBadges = ({ className = '' }: { className?: string }) => (
  <TrustBadgeGrid 
    variant="footer" 
    badges={['security', 'privacy', 'global']} 
    columns={3}
    className={className}
  />
);

export const InlineTrustBadges = ({ className = '' }: { className?: string }) => (
  <TrustBadgeGrid 
    variant="inline" 
    badges={['guarantee', 'premium']} 
    columns={2}
    className={className}
  />
);

export default TrustBadgeGrid;
