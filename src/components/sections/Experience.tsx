"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "Fev 2025 — Atual",
    role: "Desenvolvedor de Software",
    company: "CRP Tecnologia",
    description:
      "Atuo em produtos internos de uma fábrica de software, trabalhando diretamente ao lado de arquitetos de software — o que acelera muito o aprendizado. Desenvolvo com Java e Spring Boot no backend, NestJS no lado das APIs e ReactJS no frontend. Na parte de DevOps, configurei pipelines de CI/CD, ajustei análises no SonarQube e trabalhei com repositórios de infraestrutura para ArgoCD.",
    note: "Promovido de Estagiário para Júnior em jan/2026",
    tags: ["Java", "Spring Boot", "NestJS", "React", "CI/CD", "SonarQube", "ArgoCD"],
  },
  {
    period: "Ago 2023 — Jan 2025",
    role: "Assistente de Processos",
    company: "Centro Universitário Católica do Tocantins",
    description:
      "Responsável pelo mapeamento e documentação de processos de negócio com BPMN. Colaborei com equipes multidisciplinares na identificação de oportunidades de melhoria e contribuí para a padronização de procedimentos e alinhamento entre departamentos.",
    note: null,
    tags: ["BPMN", "Processos", "Documentação"],
  },
];

const education = [
  {
    period: "Fev 2022 — Dez 2025",
    course: "Engenharia de Software",
    institution: "Centro Universitário Católica do Tocantins",
    description:
      "Formação com foco em desenvolvimento de sistemas, gerenciamento de projetos e análise de requisitos. Participação em projetos práticos e extracurriculares.",
    extras: [
      {
        title: "Diretor de Relacionamentos — Lovelace Empresa Júnior",
        period: "Mai 2023 — Presente",
        detail:
          "Participei da criação da Empresa Júnior de Engenharia de Software, atuando no planejamento estratégico e sendo o principal intermediador entre a Universidade e a EJ no processo de regulamentação.",
      },
      {
        title: "Iniciação Científica",
        period: "Set 2023 — Set 2024",
        detail:
          "Pesquisa sobre aplicação de software para otimização de simulação de fluxos de processos, com análise comparativa do FlexSim e criação de modelos de simulação para diferentes processos industriais.",
      },
    ],
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

export default function Experience() {
  return (
    <section id="experiencia" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          04 — Experiência
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-20"
          style={{ letterSpacing: "-0.02em" }}
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Trajetória{" "}
          <span className="font-semibold">Profissional</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 lg:gap-16">
          {/* Experiência */}
          <div>
            <motion.p
              className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-10 flex items-center gap-3"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="w-4 h-px bg-gray-300" />
              Experiência
            </motion.p>

            <div className="relative">
              <motion.div
                className="absolute left-0 top-2 bottom-0 w-px bg-gray-100"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              <div className="flex flex-col gap-10 pl-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    variants={fadeUp}
                    custom={i + 3}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full border-2 border-gray-400 bg-white" />
                    <p className="text-xs text-gray-400 font-mono mb-1.5">{exp.period}</p>
                    <h3 className="text-base font-semibold text-gray-900 mb-0.5">{exp.role}</h3>
                    <p className="text-sm text-gray-500 mb-3">{exp.company}</p>
                    {exp.note && (
                      <p className="text-xs text-gray-400 italic mb-3 border-l-2 border-gray-200 pl-3">
                        {exp.note}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="hidden lg:block bg-gray-100" />

          {/* Educação */}
          <div>
            <motion.p
              className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-10 flex items-center gap-3"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="w-4 h-px bg-gray-300" />
              Educação & Extras
            </motion.p>

            <div className="relative">
              <motion.div
                className="absolute left-0 top-2 bottom-0 w-px bg-gray-100"
                initial={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <div className="flex flex-col gap-10 pl-6">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    variants={fadeUp}
                    custom={i + 4}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    <div className="absolute -left-7 top-1.5 w-2 h-2 rounded-full border-2 border-gray-400 bg-white" />
                    <p className="text-xs text-gray-400 font-mono mb-1.5">{edu.period}</p>
                    <h3 className="text-base font-semibold text-gray-900 mb-0.5">{edu.course}</h3>
                    <p className="text-sm text-gray-500 mb-3">{edu.institution}</p>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{edu.description}</p>

                    {edu.extras.map((extra, ei) => (
                      <div key={ei} className="relative pl-4 border-l border-gray-100 mb-5">
                        <p className="text-xs font-medium text-gray-700 mb-0.5">{extra.title}</p>
                        <p className="text-xs text-gray-400 font-mono mb-1.5">{extra.period}</p>
                        <p className="text-xs text-gray-500 leading-relaxed">{extra.detail}</p>
                      </div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
