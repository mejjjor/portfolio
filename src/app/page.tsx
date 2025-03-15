import Hero from "./components/Hero/Hero";
import Navbar from "./components/Layout/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <a
        href="#competences"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-cyan-700 focus:text-white"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
