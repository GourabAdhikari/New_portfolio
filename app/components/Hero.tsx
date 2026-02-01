"use client";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.7,
    },
  }),
};

const heroLines = [
  "Hi, I'm Gourab Adhikari.",
  "I build modern web experiences.",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-zinc-950 text-white relative select-none"
    >
      <div className="flex flex-col items-center gap-4">
        {heroLines.map((line, i) => (
          <motion.h1
            key={line}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-br from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            {line}
          </motion.h1>
        ))}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
          className="mt-6 text-zinc-400 text-lg md:text-xl max-w-xl text-center"
        >
          Passionate about crafting seamless, performant, and beautiful digital
          products.
        </motion.p>
      </div>
    </section>
  );
}
