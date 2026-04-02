"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "Java", "Spring Boot", "REST APIs", "WebSockets"],
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "Redis"],
  },
  {
    title: "DevOps & Ferramentas",
    skills: ["Git / GitHub", "Docker", "CI/CD", "ArgoCD", "SonarQube"],
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

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-gray-400 text-xs tracking-[0.5em] uppercase mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          03 — Habilidades
        </motion.p>

        <div className="flex items-end justify-between mb-10 gap-8">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-gray-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Stack &{" "}
            <span className="font-semibold">Tecnologias</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              custom={ci + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-4 h-px bg-gray-900" />
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-900">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="text-sm text-gray-600 px-3 py-1.5 border border-gray-200 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.05 + si * 0.04, duration: 0.3 }}
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-12"
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { number: "5+", label: "Projetos entregues" },
            { number: "1+", label: "Ano de experiência" },
            { number: "∞", label: "Vontade de aprender" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-gray-900 mb-1">{stat.number}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
