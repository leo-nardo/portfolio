"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease },
  }),
};

const links = [
  {
    label: "Instagram",
    handle: "@devs_tocantins",
    href: "https://instagram.com/devs_tocantins",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "devs-tocantins",
    href: "https://linkedin.com/company/devs-tocantins",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Discord",
    handle: "Entrar no servidor",
    href: "https://discord.gg/UEjkAr4xM",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.003.02.014.04.028.055a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "Grupo da comunidade",
    href: "https://chat.whatsapp.com/Ki7TMCNyu3d1Vj3TKeNEwj",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.124 1.528 5.855L.057 23.5l5.83-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.195-1.367l-.371-.22-3.862 1.013 1.027-3.772-.242-.388A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "devs-tocantins",
    href: "https://github.com/devs-tocantins",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Linktree",
    handle: "Todos os links",
    href: "https://linktree-devs-to.vercel.app/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

export default function Community() {
  return (
    <section id="comunidade" className="py-20 px-6 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          06 — Comunidade
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Esquerda — texto */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
              style={{ letterSpacing: "-0.02em" }}
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Devs{" "}
              <span className="font-semibold">Tocantins</span>
            </motion.h2>

            <motion.p
              className="text-gray-500 text-base leading-relaxed mb-5"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              A <strong className="font-medium text-gray-700">Devs Tocantins</strong> é uma comunidade
              que eu fundei para conectar, apoiar e impulsionar desenvolvedores e entusiastas de
              tecnologia do estado do Tocantins.
            </motion.p>

            <motion.p
              className="text-gray-500 text-base leading-relaxed mb-10"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Promovemos eventos, compartilhamos conhecimento e construímos projetos open source
              juntos — com o objetivo de fortalecer o ecossistema de tecnologia no Tocantins e
              conectar devs locais a oportunidades.
            </motion.p>

            {/* CTA principal */}
            <motion.a
              href="https://linktree-devs-to.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium text-gray-900 border border-gray-900 px-7 py-3 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ x: 3 }}
            >
              Conheça a comunidade
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </div>

          {/* Direita — links */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Card com borda decorativa */}
            <div className="relative">
              <div
                className="absolute border border-gray-100"
                style={{ inset: 0, transform: "translate(12px, 12px)" }}
              />
              <div className="relative bg-white border border-gray-200 p-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-6 flex items-center gap-3">
                  <span className="w-4 h-px bg-gray-300" />
                  Nos encontre em
                </p>

                <div className="flex flex-col divide-y divide-gray-50">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 py-4 group hover:pl-2 transition-all duration-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                    >
                      <span className="text-gray-300 group-hover:text-gray-900 transition-colors duration-300 flex-shrink-0">
                        {link.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {link.label}
                        </span>
                        <span className="text-xs text-gray-400 ml-2 font-mono truncate">
                          {link.handle}
                        </span>
                      </div>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-gray-300 group-hover:text-gray-900 transition-colors duration-300 flex-shrink-0"
                      >
                        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
