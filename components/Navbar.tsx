"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["About", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg shadow-blue-100/50 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-lg">
            D
          </div>
          <span className={`font-black text-lg tracking-tight ${scrolled ? "text-gray-800" : "text-white"}`}>
            Teach<span className={scrolled ? "text-blue-600" : "text-yellow-300"}>WithDian</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`relative px-4 py-2 text-sm font-bold transition-colors rounded-xl group ${
                scrolled ? "text-gray-600 hover:text-blue-600 hover:bg-blue-50" : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              {l}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-0.5 bg-current rounded-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold px-5 py-2 rounded-2xl shadow-md hover:shadow-blue-300 hover:scale-105 transition-all"
          >
            Say Hi 👋
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="sm:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5">
          <span className={`block w-6 h-0.5 rounded transition-all ${scrolled ? "bg-gray-700" : "bg-white"} ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 rounded transition-all ${scrolled ? "bg-gray-700" : "bg-white"} ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 rounded transition-all ${scrolled ? "bg-gray-700" : "bg-white"} ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white border-t border-gray-100 px-4 pb-4"
          >
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                className="block py-3 font-bold text-gray-700 hover:text-blue-600 border-b border-gray-50">
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
