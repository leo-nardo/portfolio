"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const testimonials = [
  {
    name: "Andrea C. A. Borim",
    role: "Reitora",
    company: "Católica do Tocantins",
    relationship: "Supervisora direta",
    text: "Tenho grande satisfação em recomendar o Leonardo Vinícius. Seu desejo de melhoria e desenvolvimento contínuo é uma de suas maiores qualidades, refletindo-se diretamente em seu desempenho. Leonardo demonstra esforço e dedicação admiráveis, sempre indo além para garantir que as entregas superem as expectativas. É um profissional que se preocupa genuinamente com o impacto do seu trabalho.",
  },
  {
    name: "Darley Lopes Coelho",
    role: "Supervisor de TI",
    company: "Católica do Tocantins",
    relationship: "Supervisor direto",
    text: "Tive o privilégio de liderar o Leo em um período muito importante, e posso afirmar que ele se destacou desde o início. Sempre pontual, comprometido e com uma escuta ativa admirável, Leo tem a habilidade de absorver rapidamente orientações e colocá-las em prática com excelência. É um profissional em quem se pode confiar e que, com certeza, fará a diferença por onde passar.",
  },
  {
    name: "Esther Kohtz Frank",
    role: "Engenheira de Software",
    company: "MSB Tec",
    relationship: "Colega de faculdade",
    text: "O Leonardo tem uma curiosidade genuína e constante interesse em aprender e aplicar novas tecnologias. Com pensamento criativo e olhar inovador, está sempre planejando e executando novos projetos de forma estruturada. Criou a comunidade Devs Tocantins, evidenciando sua capacidade de mobilização e compromisso em fortalecer o ecossistema local de tecnologia.",
  },
  {
    name: "Stéphany Martins",
    role: "Coordenadora de Curso",
    company: "Católica do Tocantins",
    relationship: "Professora",
    text: "O Leonardo é um profissional simpático, inteligente, proativo e tem ótimo relacionamento interpessoal, estando sempre disposto a ajudar quem o procura. É uma pessoa que busca otimizar suas tarefas diárias, verificando alternativas eficientes para realizá-las e avaliando melhorias para o cliente.",
  },
  {
    name: "André Alves",
    role: "QA Engineer",
    company: "CapLink",
    relationship: "Colega de faculdade",
    text: "Estudei com Leonardo e sempre admirei o foco e a determinação dele. É aquele tipo de pessoa que não mede esforços para correr atrás dos seus objetivos, está sempre buscando aprender e se desenvolver. Com essa mentalidade e dedicação, tenho certeza de que ele vai construir uma carreira excelente.",
  },
];

const CARD_WIDTH = 380;
const CARD_GAP = 20;
const STEP = CARD_WIDTH + CARD_GAP;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(0);
  const total = testimonials.length;

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setCurrent(clamped);
    animate(x, -clamped * STEP, { type: "spring", stiffness: 300, damping: 35 });
  };

  const handleDragEnd = (_: never, info: { offset: { x: number } }) => {
    const threshold = STEP / 4;
    if (info.offset.x < -threshold) goTo(current + 1);
    else if (info.offset.x > threshold) goTo(current - 1);
    else goTo(current);
    setDragging(false);
  };

  return (
    <section id="depoimentos" className="py-20 bg-[#fafaf8] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          05 — Depoimentos
        </motion.p>

        <div className="flex items-end justify-between mb-10">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            O que dizem{" "}
            <span className="font-semibold">sobre mim</span>
          </motion.h2>

          {/* Setas */}
          <motion.div
            className="hidden md:flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Anterior"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => goTo(current + 1)}
              disabled={current === total - 1}
              className="w-10 h-10 border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-900 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Próximo"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Trilho do carrossel */}
      <div className="pl-6 md:pl-[max(24px,calc((100vw-1024px)/2+24px))]">
        <motion.div
          className="flex gap-5 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -(total - 1) * STEP, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => setDragging(true)}
          onDragEnd={handleDragEnd}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex-shrink-0 bg-white border border-gray-100 p-8 flex flex-col gap-5 select-none"
              style={{ width: CARD_WIDTH }}
              animate={{ opacity: i === current ? 1 : 0.45, scale: i === current ? 1 : 0.97 }}
              transition={{ duration: 0.4 }}
              onClick={() => !dragging && goTo(i)}
            >
              {/* Aspas */}
              <svg width="22" height="16" viewBox="0 0 24 18" fill="none" className="text-gray-200 flex-shrink-0">
                <path d="M0 18V10.8C0 4.68 3.36 1.2 10.08 0l1.44 2.16C8.16 3 6.36 5.04 6 8.4h4.08V18H0zm13.92 0V10.8C13.92 4.68 17.28 1.2 24 0l1.44 2.16C22.08 3 20.28 5.04 19.92 8.4H24V18H13.92z" fill="currentColor" />
              </svg>

              <p className="text-gray-500 text-sm leading-relaxed flex-1">{t.text}</p>

              <div className="pt-5 border-t border-gray-100 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role} · {t.company}</p>
                </div>
                <span className="text-xs text-gray-300 border border-gray-100 px-2 py-1 whitespace-nowrap flex-shrink-0">
                  {t.relationship}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indicadores de ponto */}
      <div className="max-w-5xl mx-auto px-6 mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              aria-label={`Depoimento ${i + 1}`}
            >
              <div
                className={`h-px transition-all duration-300 ${
                  i === current ? "w-8 bg-gray-900" : "w-3 bg-gray-300"
                }`}
              />
            </button>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/leonardo-vinicius-batista-santos-396745209/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-gray-900 transition-colors duration-300 group tracking-wider uppercase"
        >
          <span className="border-b border-gray-200 group-hover:border-gray-900 pb-0.5">Ver no LinkedIn</span>
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
