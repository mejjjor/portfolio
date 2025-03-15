"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface FooterLinkGroupProps {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-cyan-500 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/erik-aouizerate-a9985257",
      label: "LinkedIn",
    },
  ];

  const projectLinks = [
    { href: "#projets", label: "Tous les projets" },
    { href: "#godofgames", label: "GodOfGames" },
    { href: "#linkeys", label: "Linkeys" },
  ];

  const navLinks = [
    { href: "#", label: "Accueil" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="pb-12 sm:pb-16 bg-black/20 relative">
      <div className="pt-8 border-t border-gray-800 text-stone-400 text-sm sm:text-base">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-stretch">
            {/* Left section - Name and social icons */}
            <div className="mb-8 md:mb-0 flex flex-col justify-between gap-4">
              <div className="text-xl sm:text-2xl font-bold text-white">
                Erik Aouizerate
              </div>
              <div className="flex gap-4 text-4xl">
                <a
                  href="https://github.com/mejjjor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors"
                  aria-label="Profil Github"
                >
                  <FaGithub aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/erik-aouizerate-a9985257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors"
                  aria-label="Profil LinkedIn"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
                <a
                  href="mailto:erik.aouizerate.pro@gmail.com"
                  className="hover:text-cyan-500 transition-colors"
                  aria-label="Envoyer un email"
                >
                  <FaEnvelope aria-hidden="true" />
                </a>
              </div>
              <div className="text-sm">
                © {new Date().getFullYear()} - Tous droits réservés
              </div>
            </div>

            {/* Right section - Navigation links */}
            <div className="flex gap-8">
              <FooterLinkGroup title="Social" links={socialLinks} />
              <FooterLinkGroup title="Projets" links={projectLinks} />
              <FooterLinkGroup title="Liens" links={navLinks} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
