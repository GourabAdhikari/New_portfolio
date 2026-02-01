"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const email = "gourab.adhikari@email.com";
const mainEmail = "gourabadhikari24@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 w-full flex flex-col items-center bg-black overflow-hidden"
    >
      {/* Section background noise/gradient overlays */}
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
        className="relative z-10 text-3xl md:text-4xl font-bold mb-7 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100 bg-clip-text text-transparent text-center tracking-tight drop-shadow-xl"
      >
        Let’s Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 text-lg md:text-xl text-zinc-300 text-center mb-5 font-medium max-w-xl mx-auto"
      >
        I’d love to hear from you—whether you want to talk code, design, or just
        say hi. My inbox is always open.
      </motion.p>
      <div className="relative z-10 flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="text-indigo-300 hover:text-fuchsia-400 font-semibold text-lg transition-colors underline underline-offset-2"
          >
            {email}
          </a>
          <button
            onClick={handleCopy}
            className="ml-1 px-2 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-indigo-300 hover:text-fuchsia-300 transition-colors text-base font-medium focus:outline-none border border-zinc-700"
            title="Copy email"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <a
          href={`mailto:${mainEmail}`}
          className="mt-2 px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 text-white font-semibold text-base shadow-lg shadow-indigo-900/30 transition-all focus:outline-none border border-zinc-700"
        >
          Clickkkk
        </a>
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/GourabAdhikari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-indigo-400 transition-colors text-2xl drop-shadow-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/gourabadhikari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-indigo-400 transition-colors text-2xl drop-shadow-lg"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      {/* Section divider for separation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60vw] h-1 bg-gradient-to-r from-transparent via-indigo-600/40 to-transparent blur-sm opacity-70 rounded-full" />
    </section>
  );
}
