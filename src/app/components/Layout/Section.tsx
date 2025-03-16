"use client";
import React from "react";
import { motion } from "framer-motion";

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
        {title && (
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
