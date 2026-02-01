"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-zinc-900/70 backdrop-blur-md shadow-lg border border-zinc-800 px-8 py-3 flex items-center gap-8 max-w-xl w-full justify-center"
    >
      <span className="font-bold tracking-widest text-lg text-white/90 select-none">
        Gourab.dev
      </span>
      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-zinc-300 hover:text-white transition-colors font-medium text-sm tracking-wide"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
