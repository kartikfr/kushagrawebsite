import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ children, className = "", id }, ref) => {
    return (
      <section 
        ref={ref}
        id={id}
        className={`w-full py-10 sm:py-12 md:py-16 lg:py-24 ${className}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;