"use client";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-black border-t border-zinc-800 flex flex-col items-center justify-center text-zinc-400 text-sm mt-0">
      <div className="flex flex-col items-center gap-2">
        <span className="font-semibold text-zinc-300">Gourab Adhikari</span>
        <span className="">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
      <div className="flex gap-4 mt-3">
        <a
          href="https://github.com/GourabAdhikari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/gourabadhikari"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:gourabadhikari24@gmail.com"
          className="hover:text-indigo-400 transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
