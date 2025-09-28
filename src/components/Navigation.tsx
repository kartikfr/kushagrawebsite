import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onCalendlyOpen: () => void;
}

const Navigation = ({ onCalendlyOpen }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-bg/50 border-b border-line-subtle">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-text-primary font-bold text-xl tracking-tight">
          LinkedIn Growth
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-text-secondary text-sm font-medium">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-text-primary transition-colors duration-200"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('results')}
            className="hover:text-text-primary transition-colors duration-200"
          >
            Results
          </button>
          <button 
            onClick={() => scrollToSection('social-proof')}
            className="hover:text-text-primary transition-colors duration-200"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="hover:text-text-primary transition-colors duration-200"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="hover:text-text-primary transition-colors duration-200"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onCalendlyOpen}
            className="btn-gradient px-4 py-2 text-sm font-semibold focus-ring"
          >
            Book Free Audit
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-subtle border-t border-line-subtle">
          <nav className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('social-proof')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={onCalendlyOpen}
              className="btn-gradient w-full px-4 py-3 text-sm font-semibold mt-4"
            >
              Book Free Audit
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;