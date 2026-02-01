"use client";
import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Framer Motion",
  "GraphQL",
  "PostgreSQL",
  "AWS",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-40 w-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden"
    >
      {/* Section background overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-indigo-900/30 via-fuchsia-900/10 to-transparent blur-2xl opacity-70" />
        <div className="w-full h-full bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light absolute inset-0" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.9,
              ease: "easeOut",
              staggerChildren: 0.08,
            },
          },
        }}
        className="relative z-10 w-full max-w-3xl mx-auto text-center px-6"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100 bg-clip-text text-transparent tracking-tight drop-shadow-xl"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="text-zinc-300 text-lg md:text-xl mb-12 leading-relaxed"
        >
          I’m Gourab Adhikari, a passionate developer crafting modern web
          experiences with a focus on performance, accessibility, and design. I
          love building products that delight users and solve real problems.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="px-4 py-1.5 rounded-full bg-zinc-800/80 text-zinc-200 text-sm font-medium border border-zinc-700 shadow-md hover:bg-zinc-700/80 hover:shadow-indigo-700/30 transition-all backdrop-blur-md cursor-pointer select-none"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      {/* Section divider for separation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60vw] h-1 bg-gradient-to-r from-transparent via-indigo-600/40 to-transparent blur-sm opacity-70 rounded-full" />
    </section>
  );
}
