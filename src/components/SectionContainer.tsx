interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer = ({ children, className = "", id }: SectionContainerProps) => {
  return (
    <section 
      id={id}
      className={`w-full py-16 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;