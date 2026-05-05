"use client";
import { motion } from "framer-motion";

export default function About() {
  const skills = {
    "Frontend Engineering": ["React", "Next.js", "TypeScript", "State Management"],
    "Architecture & UI": ["Tailwind CSS", "Framer Motion", "Design Systems"],
    "Development Tooling": ["Git Workflow", "Vercel", "Performance Profiling"]
  };

  return (
    <section id="about" className="py-24 md:py-40 bg-[#050505] px-6 relative overflow-hidden border-t border-white/[0.02]">
      
      {/* Subtle Ambient Depth Glow */}
      <div className="absolute top-1/2 -left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        
        {/* Left Column: Premium Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight leading-tight">
            System Architecture <br /> & Background.
          </h2>
          
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed font-light">
            <p>
              I am a software engineer focused on building robust, scalable frontend architectures. 
              My approach bridges the gap between complex technical requirements and seamless, 
              accessible user experiences.
            </p>
            <p>
              Currently, I am deep-diving into the modern React ecosystem. To maintain velocity 
              and discipline, I execute a strict continuous-shipping protocol—writing and deploying 
              code daily to master modern web standards.
            </p>
          </div>

          {/* Clean Status Indicator */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm cursor-default hover:bg-white/[0.04] transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-neutral-300 font-medium">System Status: Continuous Deployment</span>
          </div>
        </motion.div>

        {/* Right Column: Glass Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-4"
        >
          {Object.entries(skills).map(([category, items], idx) => (
            <div 
              key={idx} 
              className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-500 group shadow-lg shadow-black/50"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-6 group-hover:text-neutral-300 transition-colors">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 text-sm font-medium rounded-full bg-[#050505] border border-white/[0.05] text-neutral-300 shadow-inner shadow-white/[0.02] hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}