import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Initialize Calendly widget
        if (window.Calendly) {
          const calendlyDiv = document.getElementById('calendly-modal-embed');
          if (calendlyDiv) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/kushagrarawat/linkedin-strategy-call',
              parentElement: calendlyDiv,
              prefill: {},
              utm: {}
            });
          }
        }
      };

      return () => {
        document.head.removeChild(script);
      };
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-scrim-80"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 h-[80vh] glass border border-glass-stroke rounded-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-line-subtle">
          <h2 className="text-lg font-semibold text-text-primary">
            Book Your Free LinkedIn Audit
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Calendly Embed Container */}
        <div 
          id="calendly-modal-embed" 
          className="w-full h-full"
          style={{ minHeight: '600px' }}
        />
      </div>
    </div>
  );
};

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly: any;
  }
}

export default CalendlyModal;