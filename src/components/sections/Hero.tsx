"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#fafaf8]">
      {/* Formas geométricas decorativas */}

      {/* Quadrado grande — canto superior direito */}
      <motion.div
        className="absolute border border-gray-200"
        style={{ width: 340, height: 340, right: "6%", top: "4%" }}
        initial={{ opacity: 0, rotate: -8, scale: 0.85 }}
        animate={{ opacity: 1, rotate: 14, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="absolute border border-gray-100"
          style={{ inset: 28 }}
          animate={{ rotate: [0, 4, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Triângulo — canto inferior esquerdo */}
      <motion.div
        className="absolute"
        style={{ left: "3%", bottom: "6%" }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="150" height="150" viewBox="0 0 100 100">
            <polygon points="50,5 95,90 5,90" fill="none" stroke="#d1d5db" strokeWidth="1.5" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Linha horizontal — topo esquerdo */}
      <motion.div
        className="absolute bg-gray-900"
        style={{ width: 50, height: 3, left: "8%", top: "14%" }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />

      {/* Linha vertical — direita */}
      <motion.div
        className="absolute bg-gray-200"
        style={{ width: 1.5, height: 100, right: "18%", top: "38%" }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
      />

      {/* Retângulo pequeno — direita baixo */}
      <motion.div
        className="absolute bg-gray-100"
        style={{ width: 80, height: 14, right: "10%", bottom: "22%" }}
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />

      {/* Pontos */}
      {[
        { left: "32%", bottom: "18%", size: 7 },
        { right: "34%", top: "24%", size: 4 },
        { left: "55%", top: "18%", size: 5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gray-300"
          style={{ width: p.size, height: p.size, left: p.left, right: (p as any).right, top: p.top, bottom: p.bottom }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3 + i * 0.1, duration: 0.3, type: "spring" }}
        />
      ))}

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl leading-tight mb-8"
          style={{ letterSpacing: "-0.03em" }}
        >
          {["Leonardo", "Vinicius"].map((word, i) => (
            <motion.span
              key={word}
              className="block"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {i === 0 ? (
                <span className="font-light text-gray-900">{word}</span>
              ) : (
                <span className="font-semibold text-gray-900">{word}</span>
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Divisor */}
        <motion.div
          className="w-px h-14 bg-gray-300 mx-auto mb-8"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        />

        <motion.p
          className="text-gray-500 text-base leading-relaxed mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Construo produtos digitais com atenção ao detalhe,
          foco em performance e obsessão por qualidade.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-8 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <a
            href="#projetos"
            className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:border-gray-300 hover:text-gray-400 transition-all duration-300 tracking-wider"
          >
            VER PROJETOS
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-gray-400 border-b border-gray-300 pb-0.5 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 tracking-wider"
          >
            CONTATO
          </a>
          <a
            href="/Curriculo_Leonardo_Vinicius.pdf"
            download
            className="text-sm font-medium text-gray-400 border-b border-gray-300 pb-0.5 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 tracking-wider flex items-center gap-1.5"
          >
            CURRÍCULO
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v7M3 5l3 3 3-3M2 11h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-gray-300 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gray-300"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
