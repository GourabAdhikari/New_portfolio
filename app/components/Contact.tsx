"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const email = "gourab.adhikari@email.com";

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
      className="relative py-40 w-full flex flex-col items-center bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 overflow-hidden"
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
        className="relative z-10 text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-100 bg-clip-text text-transparent text-center tracking-tight drop-shadow-xl"
      >
        Contact
      </motion.h2>
      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="relative z-10 w-full max-w-xl mx-auto bg-zinc-900/90 border border-zinc-800 rounded-3xl p-12 flex flex-col gap-8 shadow-2xl mb-16 backdrop-blur-xl before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-indigo-800/10 before:to-fuchsia-800/10 before:blur-xl before:-z-10"
      >
        <motion.input
          type="text"
          placeholder="Name"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="bg-zinc-800/80 text-zinc-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600/70 border border-zinc-700/60 shadow-inner"
        />
        <motion.input
          type="email"
          placeholder="Email"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="bg-zinc-800/80 text-zinc-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600/70 border border-zinc-700/60 shadow-inner"
        />
        <motion.textarea
          placeholder="Message"
          rows={4}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="bg-zinc-800/80 text-zinc-200 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600/70 border border-zinc-700/60 shadow-inner"
        />
        <motion.button
          type="submit"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-indigo-900/30"
        >
          Send Message
        </motion.button>
      </motion.form>
      <motion.div
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
        className="relative z-10 flex gap-8 mb-8"
      >
        <motion.a
          href="https://github.com/GourabAdhikari"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="text-zinc-300 hover:text-indigo-400 transition-colors text-3xl drop-shadow-lg"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/gourabadhikari"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="text-zinc-300 hover:text-indigo-400 transition-colors text-3xl drop-shadow-lg"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://twitter.com/gourab_codes"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="text-zinc-300 hover:text-indigo-400 transition-colors text-3xl drop-shadow-lg"
        >
          <FaTwitter />
        </motion.a>
        <motion.button
          onClick={handleCopy}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="text-zinc-300 hover:text-indigo-400 transition-colors text-3xl focus:outline-none drop-shadow-lg"
          title="Copy email"
        >
          <FaEnvelope />
        </motion.button>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={copied ? { opacity: 1, y: -8 } : { opacity: 0, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 text-sm text-indigo-300 h-5 font-medium"
      >
        {copied ? "Email copied!" : ""}
      </motion.span>
      {/* Section divider for separation */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60vw] h-1 bg-gradient-to-r from-transparent via-indigo-600/40 to-transparent blur-sm opacity-70 rounded-full" />
    </section>
  );
}
