import { ReactNode } from "react";

interface SurfaceProps {
  children: ReactNode;
  className?: string;
}

export default function Surface({ children, className = "" }: SurfaceProps) {
  return (
    <div className={`rounded-xl bg-neutral-800 p-6 ${className}`}>
      {children}
    </div>
  );
}
