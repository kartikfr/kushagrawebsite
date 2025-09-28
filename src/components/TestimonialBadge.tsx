import React from 'react';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

interface TestimonialBadgeProps {
  rating?: number;
  reviews?: number;
  text?: string;
  author?: string;
  role?: string;
  variant?: 'default' | 'premium' | 'compact';
  className?: string;
}

const TestimonialBadge = ({ 
  rating = 5, 
  reviews = 0, 
  text, 
  author, 
  role, 
  variant = 'default',
  className = '' 
}: TestimonialBadgeProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`fill-current ${
          i < rating ? 'text-warning' : 'text-text-tertiary'
        }`} 
      />
    ));
  };

  const variantClasses = {
    default: 'bg-bg-2 border-line-subtle p-4 md:p-6',
    premium: 'bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 p-4 md:p-6',
    compact: 'bg-bg-3 border-line-medium p-3'
  };

  if (variant === 'compact') {
    return (
      <div className={`
        ${variantClasses.compact}
        glass-subtle rounded-lg border backdrop-blur-sm
        transition-all duration-300 hover:scale-105 hover:shadow-elev-1
        ${className}
      `}>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-1">
            {renderStars(rating)}
          </div>
          <span className="text-sm font-semibold text-text-primary">{rating}.0</span>
        </div>
        <p className="text-xs text-text-secondary">
          {reviews > 0 ? `${reviews} reviews` : 'Verified client'}
        </p>
      </div>
    );
  }

  return (
    <div className={`
      ${variantClasses[variant]}
      glass-subtle rounded-lg border backdrop-blur-sm
      transition-all duration-300 hover:scale-105 hover:shadow-elev-1
      ${className}
    `}>
      <div className="flex items-center gap-2 mb-3">
        <Quote size={20} className="text-accent" />
        <div className="flex items-center gap-1">
          {renderStars(rating)}
        </div>
        <span className="text-sm font-semibold text-text-primary">{rating}.0</span>
      </div>
      
      {text && (
        <blockquote className="text-sm md:text-base text-text-secondary mb-3 italic">
          "{text}"
        </blockquote>
      )}
      
      {author && (
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-text-primary">{author}</p>
            {role && <p className="text-xs text-text-tertiary">{role}</p>}
          </div>
          {reviews > 0 && (
            <div className="text-right">
              <p className="text-xs text-text-tertiary">{reviews} reviews</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Pre-defined testimonial badges
export const ClientTestimonialBadge = ({ className = '' }: { className?: string }) => (
  <TestimonialBadge
    rating={5}
    reviews={47}
    text="Kushagra transformed my LinkedIn presence. From 0 to 14 qualified calls in just 3 weeks!"
    author="Sarah Chen"
    role="Executive Coach"
    variant="premium"
    className={className}
  />
);

export const RatingBadge = ({ className = '' }: { className?: string }) => (
  <TestimonialBadge
    rating={5}
    reviews={127}
    variant="compact"
    className={className}
  />
);

export const SuccessBadge = ({ className = '' }: { className?: string }) => (
  <TestimonialBadge
    rating={5}
    reviews={89}
    text="8.4× more impressions and 5 new clients in the first month. Absolutely incredible results!"
    author="Michael Rodriguez"
    role="Business Consultant"
    variant="default"
    className={className}
  />
);

export default TestimonialBadge;
