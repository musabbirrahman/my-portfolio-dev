"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  // --- TYPEWRITER CONFIGURATION ---
  const terminalWords = [
    "exceptional, high-performance web applications.",
    "robust, scalable architectures using Next.js 14.",
    "meticulous, user-centric experiences.",
    "Lighthouse 100 optimized systems."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // --- TYPEWRITER ENGINE ---
  useEffect(() => {
    const handleType = () => {
      const fullText = terminalWords[currentIndex];
      const nextText = isDeleting
        ? fullText.substring(0, displayedText.length - 1)
        : fullText.substring(0, displayedText.length + 1);

      setDisplayedText(nextText);

      // Determine typing speed
      if (isDeleting) {
        setTypingSpeed(50); // Faster deletion
      } else {
        setTypingSpeed(100); // Standard typing
      }

      // Check if word is fully typed
      if (!isDeleting && nextText === fullText) {
        setTypingSpeed(2500); // Wait long before deleting
        setIsDeleting(true);
      } 
      // Check if word is fully deleted
      else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % terminalWords.length);
        setTypingSpeed(500); // Short pause before next word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer); // Cleanup
  }, [displayedText, isDeleting, currentIndex, typingSpeed]);


  // --- ANIMATION CONFIGURATION ---
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="hero" className="min-h-screen bg-[#050505] text-white flex flex-col justify-center items-center relative px-4 sm:px-6 overflow-hidden pt-32 pb-16">
      
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_110%)] opacity-30"></div>

      {/* Main Content Container */}
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-6xl w-full text-center space-y-8 relative z-10"
      >
        
        {/* FIXED: Status Indicator with Micro-Avatar (Visible on all breakpoints) */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs sm:text-sm text-neutral-300 shadow-inner max-w-fit mx-auto mb-4">
          <div className="relative flex items-center justify-center shrink-0">
            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse"></span>
            {/* Micro-Avatar */}
            <Image 
              src="/profile.png" 
              alt="Musabbir Rahman" 
              width={32} // Required: 8 units * 4px = 32px
              height={32} // Required: 8 units * 4px = 32px
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border border-white/20 z-10" 
            />
            {/* Online Status Dot */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500 border-2 border-[#050505] shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
          </div>
          <span className="font-medium text-white tracking-wide">Available for opportunities</span> 
          <span className="text-neutral-600">•</span> 
          <span className="text-neutral-400">Jamalpur, BD</span>
        </motion.div>

        {/* Main Title - Engineering the Next Interface. */}
        <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight pb-2 max-w-5xl mx-auto">
          Engineering the <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-neutral-500">
            Next Interface<span className="text-white">.</span>
          </span>
        </motion.h1>

        {/* DYNAMIC TERMINAL PARAGRAPH */}
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-base sm:text-lg md:text-xl font-light text-neutral-400 max-w-2xl mx-auto leading-relaxed pt-2">
          I build <span className="font-medium text-neutral-200">exceptional, high-performance</span> web applications. Specialized in <span className="font-medium text-white">React, Next.js</span>, and meticulous user experiences.
        </motion.p>
        
        {/* TERMINAL DISPLAY BLOCK (The Technical Flex) */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="pt-2">
          <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] inline-block shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-xs md:text-sm tracking-wide text-center sm:text-left">
              <div className="flex gap-1 text-emerald-500 font-bold shrink-0">
                <span>musabbir</span><span className="text-neutral-500">:</span><span>~</span><span className="text-neutral-500">$</span>
              </div>
              <p className="text-neutral-300 leading-relaxed font-normal min-h-[1.5em] w-[260px] sm:w-[460px] md:w-[560px]">
                {displayedText}
                <span className="inline-block w-[2px] h-[1.1em] bg-white ml-0.5 -mb-0.5 animate-pulse"></span> {/* Cursor */}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4 pt-10 justify-center items-center">
          <a href="#projects" className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#050505] font-bold text-md hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Explore Architecture
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 font-medium text-md hover:bg-white/[0.06] transition-colors">
            Init Contact
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}