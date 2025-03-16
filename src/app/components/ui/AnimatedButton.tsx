"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  continuous?: boolean;
}

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  external = false,
  continuous = false,
}: AnimatedButtonProps) {
  const baseClasses =
    "relative px-6 py-3 font-medium text-center overflow-hidden group h-[60px] flex items-center justify-center";

  const variantClasses = {
    primary: "bg-cyan-700 text-white hover:bg-cyan-800",
    outline: "border-2 border-amber-600 text-amber-600 hover:bg-amber-600/10",
  };

  const polylineRef = useRef<SVGPolylineElement>(null);

  // Use useEffect to animate the SVG directly with JavaScript
  useEffect(() => {
    if (continuous && polylineRef.current) {
      // Add animation class instead of using JavaScript animation
      polylineRef.current.classList.add("animate-border-flow");
    }
  }, [continuous]);

  const LinkComponent = (
    <div className={`${baseClasses} ${variantClasses[variant]}`}>
      {/* SVG Border Animation */}
      <svg
        className="absolute left-0 top-0 w-full h-full"
        viewBox="0 0 180 60"
        preserveAspectRatio="none"
      >
        <polyline
          ref={polylineRef}
          points="179,1 179,59 1,59 1,1 179,1"
          className={`fill-none stroke-current stroke-[1] ${
            !continuous
              ? "[stroke-dasharray:150_480] [stroke-dashoffset:150] group-hover:[stroke-dashoffset:-480] transition-all duration-1000 ease-in-out"
              : "[stroke-dasharray:150_480]" // Just set the dash array for continuous animation
          }`}
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full sm:w-auto"
      >
        {LinkComponent}
      </a>
    );
  }

  return (
    <a href={href} className="block w-full sm:w-auto">
      {LinkComponent}
    </a>
  );
}
