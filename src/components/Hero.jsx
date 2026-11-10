"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import { useState, useEffect } from "react";


export default function Hero() {

  // --- TYPEWRITER CONFIGURATION ---

  const terminalWords = [

    "clean, responsive landing pages.",

    "layout fixes for phone and desktop.",

    "websites tested before delivery.",

    "AI-assisted builds, checked by hand."

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

    <section id="hero" className="bg-[#050505] text-white relative px-4 sm:px-6 overflow-hidden pt-28 pb-16">

      {/* Background Grid Pattern (Subtle) */}

      <div className="absolute inset-0 
bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] 
[mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_110%)] opacity-30"></div>


      {/* Split layout: text left, device frames right (stacked on phone) */}

      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-6xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center"
      >

        {/* Left: text, left-aligned on desktop */}
        <div className="text-center lg:text-left space-y-8">

          {/* Status Indicator with Micro-Avatar */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3 px-4 py-2 rounded-full border 
border-white/[0.08] bg-white/[0.03] text-xs sm:text-sm text-neutral-300 shadow-inner max-w-fit mx-auto lg:mx-0 mb-4">
            <div className="relative flex items-center justify-center shrink-0">
              <span className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse"></span>
              <Image 
                src="/profile.png" 
                alt="Musabbir Rahman" 
                width={32}
                height={32}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border border-white/20 z-10" 
              />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3 z-20">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-500 border-2 border-[#050505] 
shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              </span>
            </div>
            <span className="font-medium text-white tracking-wide">Available for opportunities</span> 
            <span className="text-neutral-600">•</span> 
            <span className="text-neutral-400">Jamalpur, BD</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tight pb-2">
            Clean websites, <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-neutral-500">
              that just work<span className="text-white">.</span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-base sm:text-lg md:text-xl font-light text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-2">
            I build <span className="font-medium text-neutral-200">clean landing pages</span> and fix <span 
className="font-medium text-white">layout problems</span>, using AI-assisted development and manual testing on phone, tablet, and desktop.
          </motion.p>
          
          {/* TERMINAL DISPLAY BLOCK (The Technical Flex) */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="pt-2">
            <div className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] inline-block shadow-2xl relative w-full max-w-[520px] text-left">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-xs md:text-sm tracking-wide text-center sm:text-left">
                <div className="flex gap-1 text-emerald-500 font-bold shrink-0">
                  <span>musabbir</span><span className="text-neutral-500">:</span><span>~</span><span className="text-neutral-500">$</span>
                </div>
                <p className="text-neutral-300 leading-relaxed font-normal min-h-[1.5em] flex-1">
                  {displayedText}
                  <span className="inline-block w-[2px] h-[1.1em] bg-white ml-0.5 -mb-0.5 animate-pulse"></span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4 pt-10 justify-center lg:justify-start items-center">
            <a href="#projects" className="group flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#050505] font-bold text-md hover:scale-105 
transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              See selected work
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" 
stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 font-medium text-md 
hover:bg-white/[0.06] transition-colors">
              Get in touch
            </a>
          </motion.div>

        </div>

        {/* Right: the same landing page on desktop and on phone.
            No GolpoNeer here — the hero is about the craft (responsive
            work), and GolpoNeer gets its own spot below the hero. */}
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative">
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 flex-1 max-w-[240px] mx-auto rounded-full bg-white/[0.05] px-3 py-1 text-[11px] text-neutral-400 text-center truncate">
                  musabbirrahman.vercel.app/demos/landing
                </span>
              </div>
              <Image
                src="/landing-demo.jpg"
                alt="Landing page demo on desktop"
                width={1280}
                height={720}
                className="w-full h-auto block"
              />
            </div>
            {/* Phone frame, overlapping the desktop frame */}
            <div className="absolute -bottom-6 right-2 sm:right-4 w-[110px] sm:w-[140px] lg:w-[150px] rounded-[1.5rem] border border-white/15 bg-[#050505] p-1.5 shadow-2xl">
              <div className="rounded-[1.1rem] overflow-hidden aspect-[9/16] bg-white">
                <Image
                  src="/landing-demo.jpg"
                  alt="Landing page demo on phone"
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
          <p className="mt-10 text-xs text-neutral-500 text-center">
            The same landing page — desktop and phone. No sideways scroll, no cut-off titles.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
