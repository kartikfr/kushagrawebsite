import React from 'react';
import { TrendingUp, Users, Calendar, ExternalLink } from 'lucide-react';

interface ResultImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  metrics: {
    impressions: string;
    followers: string;
    period: string;
  };
}

const LinkedInResultsShowcase = () => {
  // Select the best 6 images for showcase
  const showcaseImages: ResultImage[] = [
    {
      id: '1',
      src: '/website/1735023359432.jpeg',
      alt: 'LinkedIn Growth Results - Executive Coach',
      title: 'Executive Coach',
      metrics: {
        impressions: '8.4×',
        followers: '+2,847',
        period: '28 days'
      }
    },
    {
      id: '2',
      src: '/website/a.1.jpeg',
      alt: 'LinkedIn Growth Results - Business Consultant',
      title: 'Business Consultant',
      metrics: {
        impressions: '12×',
        followers: '+1,923',
        period: '21 days'
      }
    },
    {
      id: '3',
      src: '/website/a.2.jpeg',
      alt: 'LinkedIn Growth Results - Sales Professional',
      title: 'Sales Professional',
      metrics: {
        impressions: '6.8×',
        followers: '+3,156',
        period: '35 days'
      }
    },
    {
      id: '4',
      src: '/website/a.3.jpeg',
      alt: 'LinkedIn Growth Results - Marketing Expert',
      title: 'Marketing Expert',
      metrics: {
        impressions: '15.2×',
        followers: '+4,287',
        period: '42 days'
      }
    },
    {
      id: '5',
      src: '/website/b.1.jpeg',
      alt: 'LinkedIn Growth Results - Leadership Coach',
      title: 'Leadership Coach',
      metrics: {
        impressions: '9.7×',
        followers: '+2,634',
        period: '30 days'
      }
    },
    {
      id: '6',
      src: '/website/b.2.jpeg',
      alt: 'LinkedIn Growth Results - Entrepreneur',
      title: 'Entrepreneur',
      metrics: {
        impressions: '11.3×',
        followers: '+3,892',
        period: '38 days'
      }
    }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
          Real Results from Real Clients
        </h3>
        <p className="text-text-secondary text-sm md:text-base">
          See the LinkedIn growth metrics from our successful client campaigns
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
        {showcaseImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg glass border border-line-subtle hover:border-accent/30 transition-all duration-300 hover:scale-105 hover:shadow-elev-1"
          >
            {/* Image Container */}
            <div className="aspect-square relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay with metrics */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover metrics */}
              <div className="absolute inset-0 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-xs space-y-1">
                  <div className="flex items-center gap-1">
                    <TrendingUp size={10} />
                    <span className="font-medium">{image.metrics.impressions}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={10} />
                    <span className="font-medium">{image.metrics.followers}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={10} />
                    <span className="font-medium">{image.metrics.period}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client title */}
            <div className="p-2 text-center">
              <p className="text-xs text-text-secondary font-medium truncate">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-6">
        <p className="text-sm text-text-tertiary mb-2">
          Want to see your LinkedIn growth metrics here?
        </p>
        <button className="inline-flex items-center gap-2 text-accent hover:text-accent-strong transition-colors text-sm font-medium">
          View All Results
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};

export default LinkedInResultsShowcase;
