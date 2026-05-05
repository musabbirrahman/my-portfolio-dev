"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden px-6 pt-24 pb-12 text-neutral-200">
      
      {/* 1. The Premium Spotlight Effect (Top Center) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_top_center,rgba(var(--p),0.15),transparent_70%)] pointer-events-none"></div>

      {/* 2. Ultra-fine Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        {/* Dynamic Availability Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <div className="group relative inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-full text-sm font-medium hover:bg-white/[0.05] transition-colors cursor-default overflow-hidden backdrop-blur-md">
            {/* Subtle moving shine effect on the pill border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
            
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-neutral-400">Available for opportunities</span>
            <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
            <span className="text-neutral-500">Jamalpur, BD</span>
          </div>
        </motion.div>

        {/* Master Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 leading-[1.1] pb-2">
            Engineering the <br className="hidden md:block" />
            Next Interface.
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            I build exceptional, high-performance web applications. Specializing in React, Next.js, and meticulous user experiences.
          </p>
        </motion.div>

        {/* High-Conversion Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link 
            href="/#projects" 
            className="group relative px-8 py-4 bg-primary text-primary-content text-base font-semibold rounded-full overflow-hidden shadow-[0_0_40px_rgba(var(--p),0.3)] hover:shadow-[0_0_60px_rgba(var(--p),0.5)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Case Studies
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </Link>

          <Link 
            href="/#contact" 
            className="px-8 py-4 bg-transparent border border-neutral-700 text-neutral-300 text-base font-semibold rounded-full hover:bg-neutral-900 hover:text-white hover:border-neutral-500 transition-all duration-300"
          >
            Get in touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
}