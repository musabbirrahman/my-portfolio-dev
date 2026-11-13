"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#0a0a0a] px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.06]">
      
      {/* Deep Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Expanded Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight leading-tight mb-6">
            How I work.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
            No calls, no meetings — the whole job runs in writing, in three steps.
          </p>
        </motion.div>

        {/* Async Shipping Protocol (Step 4, 2026-11-13): the three
            "message only" notices used to sit in three places on this
            page. They are now this one card — the boundary stated once,
            as a process, not a warning. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            {
              id: "01",
              title: "Written Brief & Scope Lock",
              text: "You send the brief in writing. We agree what gets built before anything starts.",
            },
            {
              id: "02",
              title: "Staging Link on Real Viewports",
              text: "You get a staging link to open on your own phone, tablet, and desktop.",
            },
            {
              id: "03",
              title: "Zero-Meeting Iteration Until Verified",
              text: "Revisions in writing until the layout works on your device.",
            },
          ].map((step) => (
            <div
              key={step.id}
              className="rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors p-6 md:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                {step.id}
              </span>
              <h3 className="mt-3 text-lg font-bold text-neutral-200 leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed font-light">
                {step.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* --- HIGH-DENSITY BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,_auto)]">
          
          {/* Box 1: The Deep Bio (Spans 2 cols, 2 rows on desktop) */}
          {/* Box 1: The Deep Bio & Portrait (Spans 2 cols, 2 rows on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl bg-[#0a0a0a] border border-white/[0.05] relative overflow-hidden group flex flex-col sm:flex-row"
          >
            {/* Left Column: Portrait Section */}
            {/* Left Column: Portrait Section */}
            <div className="w-full sm:w-[45%] h-[320px] sm:h-full relative overflow-hidden shrink-0">
              {/* Fade Gradient Overlay for seamless blending into the text */}
              <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent via-[#0a0a0a]/50 to-[#0a0a0a] z-10 pointer-events-none"></div>
              <Image 
                src="/profile.png" 
                alt="Musabbir Rahman" 
                width={320}
                height={320}
                /* ADDED: object-top and increased mobile height */
                className="absolute inset-0 w-full h-full object-cover object-top grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>

            {/* Right Column: Bio Text Section */}
            <div className="w-full sm:w-[55%] p-6 sm:p-8 md:p-10 relative z-20 flex flex-col justify-center bg-gradient-to-br from-transparent to-white/[0.02]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-700 hidden sm:block">
                 <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">How I work</span>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-200 mb-4 leading-snug">
                Clean websites, tested before delivery.
              </h3>
              <div className="space-y-3 text-neutral-400 text-xs md:text-sm leading-relaxed font-light">
                <p>
                  I build landing pages and fix layout problems using AI-assisted development, and I manually test every delivery on phone, tablet, and desktop.
                </p>
                <p>
                  For GolpoNeer, I directed the build, tested every release, and operate the live site. That is how I work for clients too: I direct, I test, I deliver, and I revise.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Academic Trajectory */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors relative overflow-hidden"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Academic Trajectory</span>
            <h3 className="text-xl font-bold text-neutral-200 mb-2">BSc Computer Science</h3>
            <p className="text-neutral-400 text-sm mb-6">Brahmaputra International University — Data Structures, Algorithms, System Design.</p>
            
            <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 border-t border-white/[0.05] pt-4">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                HSC '25 (Science)
              </span>
              <span className="w-px h-3 bg-white/[0.1]"></span>
              <span className="flex items-center gap-2 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Target: Master's Degree (2029 Intake)
              </span>
            </div>
          </motion.div>

          {/* Box 3: Operational Base */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/[0.1] flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-1">Base</span>
              <h3 className="text-lg font-bold text-neutral-200">Jamalpur, BD</h3>
              <p className="text-neutral-500 text-xs mt-1 font-mono">GMT +6 (Remote Ready)</p>
            </div>
          </motion.div>

          {/* Box 4: Working with me */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Off-Screen Data</span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">▹</span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">Build, then test on phone, tablet, and desktop.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">▹</span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">Revisions until the layout works on your device.</p>
              </div>
            </div>
          </motion.div>

          {/* Box 5: The Structured Toolbelt (Spans all 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-4 p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/[0.05] relative overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-30"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white mb-4 block">Core Architecture</span>
                <div className="flex flex-wrap gap-2">
                  {['HTML5 & CSS3', 'JavaScript (ES6+)', 'Responsive Design', 'AI-Assisted Development'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-neutral-300">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white mb-4 block">Styling & Motion</span>
                <div className="flex flex-wrap gap-2">
                  {['Tailwind CSS', 'CSS Grid & Flexbox', 'Responsive UI', 'Manual Testing'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-neutral-300">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white mb-4 block">Tools & Deployment</span>
                <div className="flex flex-wrap gap-2">
                  {['Git & GitHub', 'Vercel Deployment', 'Contact & Forms', 'Mobile Testing'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-neutral-300">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Box 6: Tested on 12 screen sizes (Spans all 4 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-4 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">Tested on 12 screen sizes</span>
            <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 max-w-2xl">
              Every site I deliver is checked on all twelve widths — phone, tablet, and desktop — before it ships. No sideways scroll, no cut-off text, no buttons too small to tap.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Phone", widths: ["320", "360", "390", "430"] },
                { label: "Tablet", widths: ["600", "768", "820", "834"] },
                { label: "Desktop", widths: ["1024", "1280", "1440", "1920"] },
              ].map((group) => (
                <div key={group.label}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white mb-3 block">{group.label}</span>
                  <div className="flex flex-wrap gap-2">
                    {group.widths.map((w) => (
                      <span key={w} className="px-3 py-1.5 rounded-lg bg-[#050505] border border-white/[0.05] text-xs font-mono font-medium text-neutral-300">{w}px</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}