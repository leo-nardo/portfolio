"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const EMAIL = "leonardovinicius9987@gmail.com";
const GMAIL_URL = `https://mail.google.com/mail/?view=cm&to=${EMAIL}&su=Contato%20via%20Portfolio`;
const WHATSAPP_URL = "https://wa.me/5563992874889";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/leo-nardo",
    handle: "@leo-nardo",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leonardo-vinicius-batista-santos-396745209",
    handle: "leonardo-vinicius-batista",
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    handle: "+55 (63) 99287-4889",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-32 px-6 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          08 — Contato
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Esquerda — texto */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8"
              style={{ letterSpacing: "-0.02em" }}
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Vamos{" "}
              <span className="font-semibold">trabalhar</span>
              <br />
              juntos?
            </motion.h2>

            <motion.p
              className="text-gray-500 text-base leading-relaxed mb-12"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Estou buscando novas oportunidades e aberto a projetos freelance e colaborações.
              Se tiver uma ideia ou proposta, escolha como prefere me chamar.
            </motion.p>

            {/* Redes sociais */}
            <motion.div
              className="flex flex-col gap-5"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-4 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-px bg-gray-200 group-hover:bg-gray-900 transition-all duration-300 group-hover:w-12" />
                  <span className="text-xs text-gray-400 tracking-widest uppercase group-hover:text-gray-900 transition-colors duration-300 w-20">
                    {s.label}
                  </span>
                  <span className="text-xs text-gray-400 font-mono group-hover:text-gray-600 transition-colors duration-300">{s.handle}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Direita — email em destaque */}
          <motion.div
            className="flex flex-col justify-center"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-5">Email</p>

            <p className="text-lg font-medium text-gray-900 mb-6 break-all">{EMAIL}</p>

            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-600 border border-gray-200 px-6 py-3.5 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.124 1.528 5.855L.057 23.5l5.83-1.527A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.195-1.367l-.371-.22-3.862 1.013 1.027-3.772-.242-.388A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>

              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-600 border border-gray-200 px-6 py-3.5 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Contate-me no email</span>
              </a>

              <a
                href="/Curriculo_Leonardo_Vinicius.pdf"
                download
                className="flex items-center gap-3 text-sm text-gray-600 border border-gray-200 px-6 py-3.5 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v8M4 6l3 3 3-3M2 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Baixar currículo</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
