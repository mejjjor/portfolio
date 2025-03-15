import React from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title = "",
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 md:py-24 relative ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
