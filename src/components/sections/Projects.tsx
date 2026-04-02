"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Plataforma de Engajamento",
    description:
      "Sistema de gamificação para a comunidade Devs Tocantins: ranking mensal, pontuação por contribuições e gestão de membros. Backend robusto com NestJS, autenticação JWT, controle de acesso por roles e CI/CD configurado.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    links: { github: "https://github.com/devs-tocantins/api-engajamento", live: null },
    highlight: true,
    status: null,
  },
  {
    number: "02",
    title: "Front de Engajamento",
    description:
      "Interface da plataforma de engajamento da Devs Tocantins. Desenvolvido com Next.js, autenticação via Google OAuth, internacionalização, Storybook para componentes e testes E2E com Playwright.",
    tags: ["Next.js", "TypeScript", "Storybook", "Playwright", "OAuth"],
    links: { github: "https://github.com/devs-tocantins/front-engajamento", live: "https://front-engajamento.vercel.app" },
    highlight: false,
    status: null,
  },
  {
    number: "03",
    title: "Jogo da Velha Sem Velha",
    description:
      "Variação criativa do jogo da velha onde as peças mais antigas desaparecem, implementando a estrutura de dados Fila (FIFO) com JavaScript puro. Um projeto simples que demonstra domínio de lógica e estruturas de dados.",
    tags: ["JavaScript", "HTML", "CSS", "Estrutura de Dados"],
    links: { github: "https://github.com/leo-nardo/jogo-da-velha-sem-velha", live: "https://leo-nardo.github.io/jogo-da-velha-sem-velha/" },
    highlight: false,
    status: null,
  },
  {
    number: "04",
    title: "DevCards",
    description:
      "Plataforma colaborativa onde desenvolvedores criam cards visuais usando apenas HTML e CSS puro. Um experimento sobre criatividade dentro de restrições e colaboração em cadeia entre devs.",
    tags: ["HTML", "CSS", "Colaborativo"],
    links: { github: "https://github.com/leo-nardo/devcards", live: "https://devcards-three.vercel.app" },
    highlight: false,
    status: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projetos" className="py-20 px-6 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          04 — Projetos
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-10"
          style={{ letterSpacing: "-0.02em" }}
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trabalhos{" "}
          <span className="font-semibold">Selecionados</span>
        </motion.h2>

        <div className="flex flex-col divide-y divide-gray-100">
          {projects.map((p, i) => (
            <motion.div
              key={p.number}
              className="group py-10 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 items-start hover:bg-white/60 -mx-4 px-4 transition-colors duration-300"
              variants={fadeUp}
              custom={i + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="text-xs text-gray-300 font-mono pt-1">{p.number}</span>

              <div>
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {p.title}
                  </h3>
                  {p.highlight && (
                    <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 tracking-wide">
                      Destaque
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 max-w-xl">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 md:pt-1">
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1.5 text-xs"
                >
                  <GithubIcon />
                  <span>Código</span>
                </a>
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300 flex items-center gap-1.5 text-xs"
                  >
                    <ArrowIcon />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-100"
          variants={fadeUp}
          custom={7}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/leo-nardo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300 group"
          >
            <span className="border-b border-gray-300 group-hover:border-gray-900 pb-0.5 tracking-wider uppercase text-xs">
              Ver todos no GitHub
            </span>
            <ArrowIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
