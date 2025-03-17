import NavbarClient from "./NavbarClient";

export default function Navbar() {
  const navLinks = [
    { id: "competences", label: "Compétences" },
    { id: "projets", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  return <NavbarClient navLinks={navLinks} />;
}
