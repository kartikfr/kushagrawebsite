import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onCalendlyOpen: () => void;
}

const Navigation = ({ onCalendlyOpen }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/95 border-b border-line-subtle">
        <div className="mx-auto max-w-6xl px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="text-text-primary font-bold text-base sm:text-xl tracking-tight flex-shrink-0">
            Scale with LinkedIn
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-text-secondary text-sm font-medium">
            <button 
              onClick={() => scrollToSection('why-us')}
              className="hover:text-text-primary transition-colors duration-200 py-2"
            >
              Why Us
            </button>
            <button 
              onClick={() => scrollToSection('value-stack')}
              className="hover:text-text-primary transition-colors duration-200 py-2"
            >
              What You Get
            </button>
            <button 
              onClick={() => scrollToSection('social-proof')}
              className="hover:text-text-primary transition-colors duration-200 py-2"
            >
              Reviews
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-4">
            <button
              onClick={onCalendlyOpen}
              className="hidden sm:block btn-gradient px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold focus-ring whitespace-nowrap"
            >
              Book Free Audit
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-text-primary rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-[280px] max-w-[85vw] bg-bg shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-14 border-b border-line-subtle">
              <span className="font-semibold text-text-primary">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 text-text-primary rounded-lg hover:bg-bg-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Nav Links */}
            <nav className="px-3 py-4 space-y-1">
              <button 
                onClick={() => scrollToSection('why-us')}
                className="flex items-center w-full text-left text-text-primary font-medium py-3.5 px-4 rounded-xl hover:bg-bg-2 active:bg-bg-3 text-base"
              >
                Why Us
              </button>
              <button 
                onClick={() => scrollToSection('value-stack')}
                className="flex items-center w-full text-left text-text-primary font-medium py-3.5 px-4 rounded-xl hover:bg-bg-2 active:bg-bg-3 text-base"
              >
                What You Get
              </button>
              <button 
                onClick={() => scrollToSection('social-proof')}
                className="flex items-center w-full text-left text-text-primary font-medium py-3.5 px-4 rounded-xl hover:bg-bg-2 active:bg-bg-3 text-base"
              >
                Reviews
              </button>
              
              <div className="pt-4 mt-2 border-t border-line-subtle">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onCalendlyOpen();
                  }}
                  className="btn-gradient w-full px-6 py-3.5 text-base font-semibold"
                >
                  Book Your Free Audit
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;