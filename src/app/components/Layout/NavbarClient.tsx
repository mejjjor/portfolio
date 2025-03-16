"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

interface NavLink {
  id: string;
  label: string;
}

interface NavbarClientProps {
  navLinks: NavLink[];
}

export default function NavbarClient({ navLinks }: NavbarClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-sm py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link href="/">
              <h1
                className={`font-bold transition-all duration-300 ${
                  isScrolled ? "text-3xl" : "text-4xl"
                }`}
              >
                <span>Erik Aouizerate</span>
              </h1>
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="hidden md:flex gap-8 text-lg"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
              >
                <a
                  href={`#${link.id}`}
                  className={`transition-colors duration-300 ${
                    hoveredLink && hoveredLink !== link.id
                      ? "text-gray-500"
                      : "hover:text-cyan-500"
                  }`}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="md:hidden text-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md p-1"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Completely separate overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={handleOverlayClick}
          aria-hidden="false"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-64 bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button
              className="text-2xl focus:outline-none"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          <ul className="flex flex-col gap-6 mt-12 text-xl">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block py-2 hover:text-cyan-500 transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
