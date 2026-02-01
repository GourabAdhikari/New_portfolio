"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="w-8 h-8" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-8 h-8" /> },
  { name: "Framer Motion", icon: <SiFramer className="w-8 h-8" /> },
  { name: "GraphQL", icon: <SiGraphql className="w-8 h-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
  { name: "AWS", icon: <FaAws className="w-8 h-8" /> },
  { name: "Database", icon: <FaDatabase className="w-8 h-8" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 w-full flex flex-col items-center bg-black overflow-hidden"
    >
      {/* Section background overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-indigo-900/30 via-fuchsia-900/10 to-transparent blur-2xl opacity-70" />
        <div className="w-full h-full bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light absolute inset-0" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold mb-14 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100 bg-clip-text text-transparent text-center tracking-tight drop-shadow-xl"
        style={{ letterSpacing: "-0.01em", lineHeight: 1.1 }}
      >
        My Toolbox
      </motion.h2>
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-12 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 32 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            whileHover={{
              scale: 1.18,
              rotate: 6,
              boxShadow: "0 8px 32px 0 #a78bfa44, 0 1.5px 0 0 #fff2",
            }}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl hover:shadow-indigo-700/40 cursor-pointer group backdrop-blur-xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-indigo-800/10 before:to-fuchsia-800/10 before:blur-xl before:-z-10"
          >
            <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
              {skill.icon}
            </span>
            <span
              className="text-zinc-200 text-base font-semibold mt-1 group-hover:text-indigo-200 transition-colors tracking-tight"
              style={{ letterSpacing: "-0.01em", lineHeight: 1.2 }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <a
        href="/resume.pdf"
        download
        className="relative z-10 mt-12 inline-block px-7 py-2.5 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-900/30 transition-all border border-blue-700 focus:outline-none hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/40"
        style={{ letterSpacing: "0.01em" }}
      >
        Download Resume
      </a>
      {/* Section divider for separation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60vw] h-1 bg-gradient-to-r from-transparent via-indigo-600/40 to-transparent blur-sm opacity-70 rounded-full" />
    </section>
  );
}
