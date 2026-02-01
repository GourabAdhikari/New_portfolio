"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Personal Portfolio",
    problem:
      "How can I showcase my work and story in a way that feels truly me?",
    solution:
      "Designed and built this site from scratch to reflect my personality and skills.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/GourabAdhikari/new-portfolio",
    live: "#",
  },
  {
    title: "Realtime Chat App",
    problem: "How to make chatting with friends instant and fun?",
    solution: "Built a real-time chat app with websockets and notifications.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/GourabAdhikari/realtime-chat",
    live: "#",
  },
  {
    title: "E-commerce Platform",
    problem: "How can a local business sell online with ease?",
    solution:
      "Developed a custom e-commerce platform focused on usability and speed.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com/GourabAdhikari/ecommerce-platform",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 w-full flex flex-col items-center bg-black overflow-hidden"
    >
      {/* Section background overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-indigo-900/30 via-fuchsia-900/10 to-transparent blur-2xl opacity-70" />
        <div className="w-full h-full bg-[url('/noise.svg')] opacity-10 mix-blend-soft-light absolute inset-0" />
      </div>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: "easeOut" },
          },
        }}
        className="relative z-10 text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100 bg-clip-text text-transparent text-center tracking-tight drop-shadow-xl"
      >
        Projects
      </motion.h2>
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: "easeOut" },
              },
            }}
            whileHover={{
              scale: 1.045,
              boxShadow: "0 8px 48px 0 #a78bfa66, 0 1.5px 0 0 #fff2",
            }}
            className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-9 flex flex-col gap-5 shadow-2xl relative overflow-hidden group backdrop-blur-xl before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-indigo-800/10 before:to-fuchsia-800/10 before:blur-xl before:-z-10 cursor-pointer focus-within:ring-2 focus-within:ring-indigo-500 transition-all duration-200"
            tabIndex={0}
          >
            <h3 className="text-xl font-semibold text-zinc-100 mb-1 tracking-tight drop-shadow">
              {project.title}
            </h3>
            <div className="mb-2">
              <p className="text-zinc-400 text-sm mb-1">
                <span className="font-medium text-zinc-300">Problem:</span>{" "}
                {project.problem}
              </p>
              <p className="text-zinc-400 text-sm">
                <span className="font-medium text-zinc-300">What I built:</span>{" "}
                {project.solution}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-medium border border-zinc-700 shadow hover:bg-zinc-700/80 hover:shadow-indigo-700/30 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-800 text-zinc-200 hover:bg-zinc-700 focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-200 text-sm font-medium border border-zinc-700 shadow group/button"
                tabIndex={0}
              >
                <span className="transition-transform duration-200 group-hover/button:-translate-y-0.5 group-focus/button:scale-110">
                  <FaGithub className="w-4 h-4" />
                </span>
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all duration-200 text-sm font-medium shadow-md group/button"
                tabIndex={0}
              >
                <span className="transition-transform duration-200 group-hover/button:-translate-y-0.5 group-focus/button:scale-110">
                  <FaExternalLinkAlt className="w-3 h-3" />
                </span>
                Live
              </a>
            </div>
            <motion.div
              layoutId="glow"
              className="absolute inset-0 pointer-events-none rounded-3xl group-hover:opacity-100 opacity-0 transition-opacity duration-300"
              style={{ boxShadow: "0 0 64px 0 #a78bfa33" }}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Section divider for separation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60vw] h-1 bg-gradient-to-r from-transparent via-indigo-600/40 to-transparent blur-sm opacity-70 rounded-full" />
    </section>
  );
}
