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
            
            // Create a custom URL with dark theme parameters
            const customUrl = 'https://calendly.com/kushagrarawat/linkedin-strategy-call?hide_event_type_details=1&hide_landing_page_details=1&primary_color=4DA3FF&text_color=F2F3F5&background_color=0A0A0A';
            
            window.Calendly.initInlineWidget({
              url: customUrl,
              parentElement: calendlyDiv,
              prefill: {},
              utm: {},
              // Add custom styling options
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: '#4DA3FF', // Your accent color
              textColor: '#F2F3F5' // Your text primary color
            });

            // Apply comprehensive styling overrides after widget loads
            const applyStyling = () => {
              const iframe = calendlyDiv.querySelector('iframe');
              if (iframe) {
                // Set iframe styles
                iframe.style.background = '#0A0A0A';
                iframe.style.backgroundColor = '#0A0A0A';
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
                        background: #0A0A0A !important; 
                        background-color: #0A0A0A !important;
                        color: #F2F3F5 !important; 
                      }
                      .calendly-popup-content,
                      .calendly-popup-content * { 
                        background: #0A0A0A !important;
                        background-color: #0A0A0A !important;
                      }
                      [style*="background-color: white"],
                      [style*="background-color: #fff"],
                      [style*="background-color: #ffffff"],
                      [style*="background-color: #f"],
                      [style*="background-color: #fe"] {
                        background: #0A0A0A !important;
                        background-color: #0A0A0A !important;
                      }
                      [style*="color: black"],
                      [style*="color: #000"] {
                        color: #F2F3F5 !important;
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'hsl(var(--bg-page))' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-scrim-80 backdrop-blur-sm"
        onClick={onClose}
        style={{ background: 'rgba(10, 10, 10, 0.8)' }}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-4xl h-[90vh] sm:h-[85vh] glass border border-glass-stroke rounded-lg overflow-hidden shadow-elev-2"
        style={{ 
          background: 'hsl(var(--bg-page))',
          border: '1px solid rgb(var(--line-subtle))'
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 border-b border-line-subtle"
          style={{ 
            background: 'hsl(var(--bg-elev-2))',
            borderBottom: '1px solid rgb(var(--line-subtle))'
          }}
        >
          <h2 className="text-base sm:text-lg font-semibold text-text-primary">
            Book Your Free LinkedIn Audit
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-bg-3"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Calendly Embed Container */}
        <div 
          id="calendly-modal-embed" 
          className="w-full h-full"
          style={{ 
            minHeight: '500px',
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