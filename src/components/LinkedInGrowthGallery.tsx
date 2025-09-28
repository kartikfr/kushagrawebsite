import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, TrendingUp, Users, Calendar } from 'lucide-react';

interface GrowthImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  metrics?: {
    impressions?: string;
    followers?: string;
    period?: string;
  };
}

const LinkedInGrowthGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GrowthImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define your LinkedIn growth images with metadata
  const growthImages: GrowthImage[] = [
    {
      id: '1',
      src: '/website/1735023359432.jpeg',
      alt: 'LinkedIn Growth Results - Client A',
      title: 'Executive Coach Success',
      description: 'Transformed LinkedIn presence with strategic content and engagement',
      metrics: {
        impressions: '8.4× increase',
        followers: '+2,847 new',
        period: '28 days'
      }
    },
    {
      id: '2',
      src: '/website/a.1.jpeg',
      alt: 'LinkedIn Growth Results - Client B',
      title: 'Business Consultant Growth',
      description: 'Achieved 14 qualified calls in just 3 weeks',
      metrics: {
        impressions: '12× increase',
        followers: '+1,923 new',
        period: '21 days'
      }
    },
    {
      id: '3',
      src: '/website/a.2.jpeg',
      alt: 'LinkedIn Growth Results - Client C',
      title: 'Sales Professional Results',
      description: 'Generated $50K+ in new pipeline from LinkedIn',
      metrics: {
        impressions: '6.8× increase',
        followers: '+3,156 new',
        period: '35 days'
      }
    },
    {
      id: '4',
      src: '/website/a.3.jpeg',
      alt: 'LinkedIn Growth Results - Client D',
      title: 'Marketing Expert Success',
      description: 'Built authority and attracted premium clients',
      metrics: {
        impressions: '15.2× increase',
        followers: '+4,287 new',
        period: '42 days'
      }
    },
    {
      id: '5',
      src: '/website/b.1.jpeg',
      alt: 'LinkedIn Growth Results - Client E',
      title: 'Leadership Coach Growth',
      description: 'Established thought leadership in executive coaching',
      metrics: {
        impressions: '9.7× increase',
        followers: '+2,634 new',
        period: '30 days'
      }
    },
    {
      id: '6',
      src: '/website/b.2.jpeg',
      alt: 'LinkedIn Growth Results - Client F',
      title: 'Entrepreneur Success',
      description: 'Scaled personal brand and attracted high-value clients',
      metrics: {
        impressions: '11.3× increase',
        followers: '+3,892 new',
        period: '38 days'
      }
    },
    {
      id: '7',
      src: '/website/Gtp-65Ka0AARhKG.jpeg',
      alt: 'LinkedIn Growth Results - Client G',
      title: 'Tech Consultant Growth',
      description: 'Positioned as industry expert and generated leads',
      metrics: {
        impressions: '7.9× increase',
        followers: '+2,145 new',
        period: '25 days'
      }
    },
    {
      id: '8',
      src: '/website/Gtp-65NbgAIvNdc.jpeg',
      alt: 'LinkedIn Growth Results - Client H',
      title: 'Financial Advisor Success',
      description: 'Built trust and attracted qualified prospects',
      metrics: {
        impressions: '13.6× increase',
        followers: '+3,478 new',
        period: '45 days'
      }
    },
    {
      id: '9',
      src: '/website/Gxh8IfXWgAABEg2.jpeg',
      alt: 'LinkedIn Growth Results - Client I',
      title: 'Healthcare Professional Growth',
      description: 'Established credibility and expanded network',
      metrics: {
        impressions: '5.4× increase',
        followers: '+1,876 new',
        period: '32 days'
      }
    }
  ];

  const openModal = (image: GrowthImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % growthImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(growthImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + growthImages.length) % growthImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(growthImages[prevIndex]);
  };

  return (
    <>
      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {growthImages.map((image, index) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg glass border border-line-subtle cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elev-2"
            onClick={() => openModal(image, index)}
          >
            {/* Image Container */}
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Maximize2 size={16} className="text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-text-primary mb-1 text-sm md:text-base">
                {image.title}
              </h3>
              <p className="text-text-secondary text-xs md:text-sm mb-3">
                {image.description}
              </p>
              
              {/* Metrics */}
              {image.metrics && (
                <div className="flex flex-wrap gap-2">
                  {image.metrics.impressions && (
                    <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-full">
                      <TrendingUp size={12} />
                      <span className="text-xs font-medium">{image.metrics.impressions}</span>
                    </div>
                  )}
                  {image.metrics.followers && (
                    <div className="flex items-center gap-1 bg-success/10 text-success px-2 py-1 rounded-full">
                      <Users size={12} />
                      <span className="text-xs font-medium">{image.metrics.followers}</span>
                    </div>
                  )}
                  {image.metrics.period && (
                    <div className="flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full">
                      <Calendar size={12} />
                      <span className="text-xs font-medium">{image.metrics.period}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-scrim-80 backdrop-blur-sm">
          <div className="relative w-full max-w-6xl max-h-[90vh] glass border border-glass-stroke rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-line-subtle bg-bg-2/50">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {selectedImage.description}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-bg-3"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative p-4">
              <div className="aspect-[16/10] relative overflow-hidden rounded-lg">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Metrics */}
            {selectedImage.metrics && (
              <div className="p-4 border-t border-line-subtle bg-bg-2/50">
                <div className="flex flex-wrap gap-4 justify-center">
                  {selectedImage.metrics.impressions && (
                    <div className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg">
                      <TrendingUp size={16} />
                      <span className="font-medium">{selectedImage.metrics.impressions}</span>
                    </div>
                  )}
                  {selectedImage.metrics.followers && (
                    <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-lg">
                      <Users size={16} />
                      <span className="font-medium">{selectedImage.metrics.followers}</span>
                    </div>
                  )}
                  {selectedImage.metrics.period && (
                    <div className="flex items-center gap-2 bg-warning/10 text-warning px-4 py-2 rounded-lg">
                      <Calendar size={16} />
                      <span className="font-medium">{selectedImage.metrics.period}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {growthImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkedInGrowthGallery;
