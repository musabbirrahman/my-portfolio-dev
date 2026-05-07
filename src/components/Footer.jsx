"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [time, setTime] = useState("");

  // Live Edge Clock (Locked to GMT+6)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTime(formatter.format(now));
    };
    
    updateClock(); // Initial set
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.05]">
      
      {/* Ambient Depth Indicator */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Top Grid: Status & Navigation */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-16">
          
          {/* Column 1: Live Status & Location */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Operational Status</span>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              <span className="text-sm font-medium text-neutral-300">All Systems Nominal</span>
            </div>
            <div className="text-xs text-neutral-500 font-mono mt-1">
              Jamalpur, BD (GMT+6)
            </div>
          </div>

          {/* Column 2: The Edge Clock */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Local Time</span>
            <div className="text-xl md:text-2xl font-mono font-medium text-white tracking-widest bg-white/[0.03] px-6 py-2 rounded-xl border border-white/[0.05] shadow-inner w-[160px] md:w-[180px] text-center">
              {time || "00:00:00"}
            </div>
          </div>

          {/* Column 3: Fast Navigation */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Network</span>
            <div className="flex items-center gap-6">
              <a href="https://github.com/musabbirrahman" target="_blank" rel="noreferrer" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/musabbirrahman" target="_blank" rel="noreferrer" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">LinkedIn</a>
              {/* Upgraded Back to Top Trigger */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm font-medium text-white flex items-center gap-1 hover:text-neutral-300 transition-colors group outline-none"
              >
                Top
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.05] text-[10px] sm:text-xs font-medium text-neutral-500">
          <p>© {currentYear} Musabbir Rahman. Continuous Shipping Protocol.</p>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <span>Next.js Architecture</span>
            <span className="w-1 h-1 rounded-full bg-neutral-800"></span>
            <span>Tailwind CSS</span>
            <span className="w-1 h-1 rounded-full bg-neutral-800"></span>
            <span>Framer Motion</span>
          </div>
        </div>

        {/* Massive Watermark - Hidden on small mobile to prevent overflow */}
        <div className="hidden sm:block absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[10vw] font-black text-white/[0.015] pointer-events-none whitespace-nowrap select-none">
          MUSABBIR.DEV
        </div>

      </div>
    </footer>
  );
}