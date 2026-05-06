"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock background scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Premium Glass Header */}
      <header className="fixed top-0 left-0 w-full bg-[#050505]/70 backdrop-blur-xl z-50 border-b border-white/[0.05] shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
          
          {/* High-Contrast Logo */}
          <Link href="/" onClick={closeMenu} className="group text-xl md:text-2xl font-extrabold tracking-tight flex items-center gap-2 relative z-[60]">
            <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 group-hover:bg-primary transition-all duration-300"></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              Musabbir<span className="text-neutral-600 hidden sm:inline">.dev</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/#about" className="text-neutral-400 hover:text-white transition-colors duration-300">
              Background
            </Link>
            <Link href="/#projects" className="text-neutral-400 hover:text-white transition-colors duration-300">
              Case Studies
            </Link>
            <Link 
              href="/#contact" 
              className="px-5 py-2.5 bg-white/[0.03] border border-white/[0.1] text-white rounded-full hover:bg-white/[0.08] transition-all duration-300"
            >
              Contact
            </Link>
            <Link 
            href="/Musabbir_Rahman_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
          >
            <span>CV</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden text-neutral-300 p-2 relative z-[60] focus:outline-none hover:text-white transition-colors">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 h-7 stroke-current transition-transform duration-300 rotate-90"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-7 h-7 stroke-current transition-transform duration-300"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </header>

      {/* Pitch-Black Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-[100dvh] bg-[#050505]/98 backdrop-blur-3xl flex flex-col items-center justify-center md:hidden z-40 border-b border-white/[0.05]"
          >
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <ul className="flex flex-col items-center gap-10 font-bold text-3xl w-full px-6 relative z-10 tracking-tight">
              <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <Link href="/#about" onClick={closeMenu} className="text-neutral-400 hover:text-white active:text-white transition-colors">
                  Background
                </Link>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <Link href="/#projects" onClick={closeMenu} className="text-neutral-400 hover:text-white active:text-white transition-colors">
                  Case Studies
                </Link>
              </motion.li>
              <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <Link href="/#contact" onClick={closeMenu} className="text-white hover:text-neutral-300 transition-colors">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}