"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-[#050505] px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.02]">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight leading-tight mb-6">
            The Engineer <br /> Behind the Architecture.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed font-light">
            I don't just write code; I build scalable systems. Here is a look at my engineering philosophy, my operational base, and what fuels my creativity off-screen.
          </p>
        </motion.div>

        {/* --- THE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          
          {/* Box 1: The Philosophy (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-colors group relative overflow-hidden flex flex-col justify-end"
          >
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>

            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Core Philosophy</span>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-4 group-hover:text-white transition-colors">
                Continuous Shipping Protocol
              </h3>
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light max-w-xl">
                My approach to software engineering is rooted in aggressive execution and constant iteration. I believe the best way to master modern web architecture—like Next.js and React—is to build production-grade applications, break them, and rebuild them stronger. 
              </p>
            </div>
          </motion.div>

          {/* Box 2: Location & Timezone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-colors relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex justify-between items-start relative z-10">
               <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/[0.1] flex items-center justify-center shadow-inner shadow-white/[0.05]">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
               </div>
               <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                 Remote Ready
               </span>
            </div>

            <div className="relative z-10 mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-1">Operational Base</span>
              <h3 className="text-xl font-bold text-neutral-200">Jamalpur, BD</h3>
              <p className="text-neutral-500 text-sm mt-1 font-mono">UTC / GMT +6</p>
            </div>
          </motion.div>

          {/* Box 3: Off-Screen Interests */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-colors relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-30 transition-all duration-700 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
            
            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2 block">Off-Screen Data</span>
              <h3 className="text-lg font-bold text-white mb-2">Tactics & Narratives</h3>
              <p className="text-neutral-400 text-xs leading-relaxed font-light">
                When I step away from the IDE, I reset my logic engines through strategic gaming (Minecraft, FC Mobile) and deep-dive narrative media like premier Anime series and international football.
              </p>
            </div>
          </motion.div>

          {/* Box 4: The Toolbelt (Spans 2 columns on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/[0.05] hover:border-white/[0.1] transition-colors relative flex flex-col justify-center items-center text-center overflow-hidden"
          >
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-50"></div>
            
            <div className="relative z-10 w-full max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 block">Current Architectural Focus</span>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['Next.js 14', 'React Architecture', 'Tailwind CSS', 'Framer Motion', 'API Integration', 'Responsive UI'].map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.05] text-sm font-medium text-neutral-300 hover:text-white hover:border-white/[0.15] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}