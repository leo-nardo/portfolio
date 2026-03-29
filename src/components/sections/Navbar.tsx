"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/ui/Logo";

// Links exibidos no desktop (os menos críticos ficam só no mobile)
const desktopLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Comunidade", href: "#comunidade" },
];

// Todos os links ficam no menu mobile
const allLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e7eb" : "1px solid transparent",
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-gray-900 hover:text-gray-500 transition-colors duration-300">
          <Logo size={28} />
        </a>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {desktopLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-gray-500 hover:text-gray-900 tracking-wider uppercase transition-colors duration-300 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-xs font-semibold tracking-wider uppercase px-6 py-2.5 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 whitespace-nowrap"
          >
            Contate-me
          </a>
        </nav>

        {/* Hamburguer mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <motion.span
            className="block w-5 h-px bg-gray-900"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-px bg-gray-900"
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-px bg-gray-900"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-[#fafaf8] border-t border-gray-100 px-6 py-6 flex flex-col gap-5"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {allLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-600 hover:text-gray-900 tracking-wider uppercase transition-colors"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
