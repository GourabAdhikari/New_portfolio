"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    organization: "Tech Solutions Inc.",
    year: "2024 - Present",
    description:
      "Led UI rebuilds with React/Next.js. Mentored juniors and improved team delivery.",
  },
  {
    role: "Web Developer Intern",
    organization: "Creative Studio",
    year: "2023 - 2024",
    description:
      "Learned UX best practices. Built responsive features and shipped to production.",
  },
  {
    role: "Freelance Developer",
    organization: "Self-employed",
    year: "2022 - 2023",
    description:
      "Launched custom sites for clients. Learned to manage projects end-to-end.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full max-w-2xl mx-auto py-24 px-4 bg-zinc-950"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-8 text-center tracking-tight">
        My Experience
      </h2>
      <div className="relative border-l border-zinc-700/70 pl-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role + exp.organization + exp.year}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={itemVariants}
            className="mb-8 last:mb-0 relative"
          >
            <span className="absolute -left-3 top-2 w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-indigo-700 border-2 border-zinc-900 shadow-md" />
            <div className="flex flex-col gap-0.5">
              <span className="text-zinc-100 font-bold text-base md:text-lg">
                {exp.role}
              </span>
              <span className="text-zinc-400 text-xs mb-0.5">
                {exp.organization} &middot; {exp.year}
              </span>
              <span className="text-zinc-300 text-sm mt-0.5 leading-snug max-w-xl">
                {exp.description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
