"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const details = [
  { label: "Localização", value: "Palmas, TO" },
  { label: "Disponibilidade", value: "Buscando oportunidades" },
  { label: "Foco atual", value: "Full Stack Web" },
  { label: "Idiomas", value: "PT-BR · EN básico" },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          01 — Sobre
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna esquerda — texto */}
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
              Olá, sou o{" "}
              <span className="font-semibold">Leonardo</span>.
            </motion.h2>

            <motion.p
              className="text-gray-500 leading-relaxed mb-5 text-base"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Sou desenvolvedor de software de Palmas, Tocantins. Vim de uma família simples e
              encontrei na tecnologia não uma carreira, mas o instrumento mais poderoso que conheço
              para transformar ideias em realidade. Acredito, genuinamente, que a tecnologia pode
              mudar o mundo — e é isso que me move todos os dias.
            </motion.p>

            <motion.p
              className="text-gray-500 leading-relaxed mb-5 text-base"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Trabalho como desenvolvedor full stack na CRP Tecnologia, onde atuo diretamente com
              arquitetos de software em produtos internos. Transito entre Java e Spring Boot no
              backend, NestJS e Node.js nas APIs, React no frontend e ferramentas de DevOps como
              CI/CD, SonarQube e ArgoCD — o que me dá uma visão ampla de todo o ciclo de
              desenvolvimento.
            </motion.p>

            <motion.p
              className="text-gray-500 leading-relaxed mb-10 text-base"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              Fundei a <span className="font-medium text-gray-700">Devs Tocantins</span> porque
              percebi cedo que as melhores ideias precisam de pessoas. Fora do código, me interessa
              tudo que ajuda a entender o ser humano — filosofia, psicologia, boas conversas. E, é
              claro, música e futebol.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-y-6 gap-x-8 pt-8 border-t border-gray-100"
              variants={fadeUp}
              custom={5}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {details.map((d) => (
                <div key={d.label}>
                  <p className="text-xs text-gray-400 tracking-wider uppercase mb-1">{d.label}</p>
                  <p className="text-sm font-medium text-gray-900">{d.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Coluna direita — foto */}
          <motion.div
            className="relative"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div
              className="absolute border border-gray-200"
              style={{ inset: 0, transform: "translate(16px, 16px)" }}
            />

            <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/foto-leonardo.jpeg"
                alt="Leonardo Vinicius"
                fill
                className="object-cover object-top transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4 w-6 h-px bg-white/60" />
              <div className="absolute top-4 left-4 w-px h-6 bg-white/60" />
              <div className="absolute bottom-4 right-4 w-6 h-px bg-white/60" />
              <div className="absolute bottom-4 right-4 w-px h-6 bg-white/60" />
            </div>

            <motion.div
              className="absolute -bottom-5 -left-5 bg-white border border-gray-200 px-5 py-3 shadow-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-gray-400 mb-0.5">Experiência</p>
              <p className="text-lg font-semibold text-gray-900">1+ ano</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
