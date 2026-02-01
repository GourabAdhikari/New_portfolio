"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18 + 0.4,
      duration: 0.9,
      ease: ["easeOut"],
    },
  }),
};

const heroLines = [
  "Hi, I'm Gourab Adhikari.",
  "I build modern web experiences.",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-zinc-950 text-white relative select-none pb-24"
    >
      <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-6 mt-2"
        >
          <div className="relative flex items-center justify-center w-56 h-56 md:w-64 md:h-64">
            {/* Gradient ring */}
            <div className="absolute inset-0 rounded-full z-0 pointer-events-none">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/60 via-fuchsia-500/30 to-transparent blur-2xl opacity-90" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-400/30 via-fuchsia-400/10 to-transparent blur-xl opacity-60" />
            </div>
            {/* Image container */}
            <div className="relative rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900/80 shadow-lg shadow-indigo-900/40 w-56 h-56 md:w-64 md:h-64 flex items-center justify-center z-10">
              <Image
                src="/profile.jpg"
                alt="Gourab Adhikari profile"
                width={256}
                height={256}
                className="object-cover w-full h-full rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col items-center w-full">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-2xl md:text-3xl font-bold tracking-tight text-center bg-gradient-to-br from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent drop-shadow-lg mb-2"
            style={{ lineHeight: 1.18, letterSpacing: "-0.01em" }}
          >
            Hi, I&#39;m Gourab Adhikari.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={1}
            className="text-zinc-400 text-base md:text-lg text-center leading-relaxed tracking-tight mb-1"
            style={{ lineHeight: 1.6 }}
          >
            I build modern web experiences.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
            className="text-zinc-400 text-base md:text-lg text-center leading-relaxed tracking-tight mt-0.5"
            style={{ lineHeight: 1.6 }}
          >
            Passionate about crafting seamless, performant, and beautiful
            digital products.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
