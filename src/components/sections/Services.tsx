"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease },
  }),
};

const services = [
  {
    number: "01",
    title: "Landing Pages",
    description:
      "Páginas de apresentação rápidas, responsivas e focadas em conversão. Design limpo, animações suaves e código otimizado para performance e SEO.",
    items: ["Design responsivo", "Animações personalizadas", "SEO básico", "Alta performance"],
  },
  {
    number: "02",
    title: "Sistemas Web",
    description:
      "Desenvolvimento de sistemas simples do início ao fim: desde o planejamento até a entrega. Painéis administrativos, formulários, integrações com APIs e banco de dados.",
    items: ["Frontend com React / Next.js", "Backend com Node.js ou NestJS", "Banco de dados PostgreSQL", "Deploy e manutenção"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          07 — Serviços
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            O que posso{" "}
            <span className="font-semibold">fazer por você</span>
          </motion.h2>

          <motion.a
            href="#contato"
            className="text-sm font-medium text-gray-500 border-b border-gray-300 pb-0.5 hover:text-gray-900 hover:border-gray-900 transition-all duration-300 tracking-wider uppercase whitespace-nowrap self-end"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Solicitar orçamento →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              className="border border-gray-100 p-10 hover:border-gray-300 transition-colors duration-300 group"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="text-xs text-gray-300 font-mono block mb-6">{s.number}</span>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {s.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {s.description}
              </p>

              <ul className="flex flex-col gap-3">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-3 h-px bg-gray-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Nota de transparência */}
        <motion.p
          className="text-xs text-gray-400 mt-10 leading-relaxed max-w-lg"
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trabalho de forma independente, então os projetos são desenvolvidos com cuidado e atenção
          a cada detalhe. Atendo uma quantidade limitada de clientes por vez para garantir qualidade.
        </motion.p>
      </div>
    </section>
  );
}
