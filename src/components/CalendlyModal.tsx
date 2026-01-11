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
        // Initialize Calendly widget with custom styling
        if (window.Calendly) {
          const calendlyDiv = document.getElementById('calendly-modal-embed');
          if (calendlyDiv) {
            // Clear any existing content
            calendlyDiv.innerHTML = '';
            
            // Create a custom URL with light theme parameters
            const customUrl = 'https://calendly.com/kushagrarawat/linkedin-strategy-call?hide_event_type_details=1&hide_landing_page_details=1&primary_color=2d5f3f&text_color=151715&background_color=FAFAFA';
            
            window.Calendly.initInlineWidget({
              url: customUrl,
              parentElement: calendlyDiv,
              prefill: {},
              utm: {},
              // Add custom styling options
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: '#2d5f3f', // Deep Forest Green
              textColor: '#151715' // Dark text for light background
            });

            // Apply comprehensive styling overrides after widget loads
            const applyStyling = () => {
              const iframe = calendlyDiv.querySelector('iframe');
              if (iframe) {
                // Set iframe styles
                iframe.style.background = '#FAFAFA';
                iframe.style.backgroundColor = '#FAFAFA';
                iframe.style.borderRadius = '0';
                iframe.style.border = 'none';
                
                // Try to access iframe content (may be blocked by CORS)
                try {
                  const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                  if (iframeDoc) {
                    // Override iframe content styles
                    const style = iframeDoc.createElement('style');
                    style.textContent = `
                      body { 
                        background: #FAFAFA !important; 
                        background-color: #FAFAFA !important;
                        color: #151715 !important; 
                      }
                      .calendly-popup-content,
                      .calendly-popup-content * { 
                        background: #FAFAFA !important;
                        background-color: #FAFAFA !important;
                      }
                      [style*="background-color: black"],
                      [style*="background-color: #000"],
                      [style*="background-color: #000000"] {
                        background: #FAFAFA !important;
                        background-color: #FAFAFA !important;
                      }
                      [style*="color: white"],
                      [style*="color: #fff"],
                      [style*="color: #ffffff"] {
                        color: #151715 !important;
                      }
                    `;
                    iframeDoc.head.appendChild(style);
                  }
                } catch (e) {
                  // CORS blocked, continue with external styling
                }
              }
            };

            // Apply styling immediately and after delays
            applyStyling();
            setTimeout(applyStyling, 500);
            setTimeout(applyStyling, 1000);
            setTimeout(applyStyling, 2000);
            setTimeout(applyStyling, 3000);

            // Use MutationObserver to watch for iframe changes
            const observer = new MutationObserver(() => {
              applyStyling();
            });
            
            observer.observe(calendlyDiv, {
              childList: true,
              subtree: true,
              attributes: true
            });

            // Clean up observer after 10 seconds
            setTimeout(() => {
              observer.disconnect();
            }, 10000);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 safe-area-top safe-area-bottom" style={{ background: 'hsl(var(--bg-page))' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-scrim-80 backdrop-blur-sm"
        onClick={onClose}
        style={{ background: 'rgba(250, 250, 250, 0.85)' }}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-4xl h-[95vh] sm:h-[90vh] md:h-[85vh] glass border border-glass-stroke rounded-xl sm:rounded-2xl overflow-hidden shadow-elev-2"
        style={{ 
          background: 'hsl(var(--bg-page))',
          border: '1px solid rgb(var(--line-subtle))'
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between p-3 sm:p-4 border-b border-line-subtle"
          style={{ 
            background: 'hsl(var(--bg-elev-2))',
            borderBottom: '1px solid rgb(var(--line-subtle))'
          }}
        >
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-text-primary">
            Book Your Free LinkedIn Audit
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 -mr-1 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-bg-3"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Calendly Embed Container */}
        <div 
          id="calendly-modal-embed" 
          className="w-full h-[calc(100%-48px)] sm:h-[calc(100%-56px)]"
          style={{ 
            minHeight: '400px',
            background: 'hsl(var(--bg-page))',
            // Override Calendly's default styling
            '--calendly-bg': 'hsl(var(--bg-page))',
            '--calendly-text': 'hsl(var(--text-primary))',
            '--calendly-border': 'rgb(var(--line-subtle))'
          } as React.CSSProperties}
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