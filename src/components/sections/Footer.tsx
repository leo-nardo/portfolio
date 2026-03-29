"use client";

import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Logo size={24} className="text-gray-900" />
          <span className="text-xs text-gray-400">
            © {year} Leonardo Vinicius — Todos os direitos reservados.
          </span>
        </motion.div>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-xs text-gray-300">Palmas, TO · Brasil</span>
        </motion.div>
      </div>
    </footer>
  );
}
