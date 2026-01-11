import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ResultsCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const resultImages = [
    '/website/Result Image/1735023359432.jpeg',
    '/website/Result Image/a.1.jpeg',
    '/website/Result Image/a.2.jpeg',
    '/website/Result Image/a.3.jpeg',
    '/website/Result Image/b.1.jpeg',
    '/website/Result Image/b.2.jpeg',
    '/website/Result Image/Gtp-65Ka0AARhKG.jpeg',
    '/website/Result Image/Gtp-65NbgAIvNdc.jpeg',
    '/website/Result Image/Gxh8IfXWgAABEg2.jpeg',
  ];

  // Duplicate images for infinite scroll effect
  const duplicatedImages = [...resultImages, ...resultImages];

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationId: number;
    let scrollPosition = scrollContainer.scrollLeft;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!scrollContainer || isPaused) return;
      
      scrollPosition += scrollSpeed;
      
      // Reset position when reaching the duplicated content
      const maxScroll = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const openImage = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index % resultImages.length);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    const newIndex = selectedIndex === 0 ? resultImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(resultImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = selectedIndex === resultImages.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(resultImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeImage();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <>
      <div 
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
      >
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 py-2 sm:py-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            overflow: 'hidden',
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              onClick={() => openImage(src, index)}
              className="flex-shrink-0 w-56 sm:w-64 md:w-72 lg:w-80 rounded-xl overflow-hidden shadow-elev-1 border border-line-subtle bg-bg-2 group cursor-pointer transition-all duration-300 hover:shadow-elev-2"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={src}
                  alt={`Result ${(index % resultImages.length) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-2 sm:left-4 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 sm:right-4 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image */}
          <div 
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={`Result ${selectedIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-full">
              {selectedIndex + 1} / {resultImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultsCarousel;
