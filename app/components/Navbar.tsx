"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-2 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-zinc-900/70 backdrop-blur-md shadow-lg border border-zinc-800 px-4 sm:px-8 py-2 sm:py-3 flex flex-col sm:flex-row items-center gap-3 sm:gap-8 max-w-xs sm:max-w-xl w-[95vw] sm:w-full justify-center overflow-x-auto"
    >
      <span className="font-bold tracking-widest text-base sm:text-lg text-white/90 select-none mb-1 sm:mb-0">
        Gourab.dev
      </span>
      <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-6 w-full sm:w-auto justify-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-zinc-300 hover:text-white transition-colors font-medium text-xs sm:text-sm tracking-wide px-2 py-1 sm:px-0 sm:py-0"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
