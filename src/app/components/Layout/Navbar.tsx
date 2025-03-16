"use client";
import NavbarClient from "./NavbarClient";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { id: "competences", label: "Compétences" },
    { id: "projets", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavbarClient navLinks={navLinks} />
    </motion.div>
  );
}
