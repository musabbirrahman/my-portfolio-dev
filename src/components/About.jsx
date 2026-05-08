"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-[#050505] px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.02]">
      
      {/* Deep Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Expanded Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight leading-tight mb-6">
            The Architecture of <br /> the Engineer.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
            Software engineering is more than just writing syntax; it is about building scalable systems, continuous learning, and strategic problem-solving. Here is the data on who I am, how I operate, and where I am going.
          </p>
        </motion.div>

        {/* --- HIGH-DENSITY BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(200px,_auto)]">
          
          {/* Box 1: The Deep Bio (Spans 2 cols, 2 rows on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-700">
               <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6 block">Personal Architecture</span>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-6">
              Bridging complex logic with premium, scalable interfaces.
            </h3>
            <div className="space-y-4 text-neutral-400 text-sm leading-relaxed font-light">
              <p>
                I am a Frontend Software Engineer driven by a philosophy of continuous shipping. I don't just consume tutorials; I architect, build, and deploy production-grade applications to break them down and understand them at the atomic level.
              </p>
              <p>
                My expertise lies in the modern JavaScript ecosystem—specifically React and Next.js. I specialize in taking dense, complex data requirements and translating them into fluid, responsive, and highly performant user interfaces.
              </p>
              <p>
                Currently, I am undergoing an intensive web development bootcamp to finalize my full-stack capabilities, ensuring I can architect solutions from the database schema all the way to the client-side DOM.
              </p>
            </div>
          </motion.div>

          {/* Box 2: Academic Trajectory */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors relative overflow-hidden"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Academic Trajectory</span>
            <h3 className="text-xl font-bold text-neutral-200 mb-2">BSc Computer Science</h3>
            <p className="text-neutral-400 text-sm mb-6">Currently establishing a deep foundation in Data Structures, Algorithms, and System Design.</p>
            
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

          {/* Box 4: Strategic Off-Screen Data */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.03] transition-colors"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 block">Off-Screen Data</span>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">▹</span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">Analyzing premier Anime & Manga narratives for complex plot structures.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">▹</span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">Studying the technical engineering specs of global stealth bomber fleets (B-2, Tu-160).</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600 mt-0.5">▹</span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">Resetting logic loops via strategic gaming (FC Mobile) and football tactics.</p>
              </div>
            </div>
          </motion.div>

          {/* Box 5: The Structured Toolbelt (Spans all 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-4 p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/[0.05] relative overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-30"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white mb-4 block">Core Architecture</span>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript (ES6+)', 'React.js', 'Next.js 14 App Router', 'HTML5 & CSS3'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-neutral-300">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white mb-4 block">Styling & Motion</span>
                <div className="flex flex-wrap gap-2">
                  {['Tailwind CSS', 'Framer Motion', 'CSS Grid & Flexbox', 'Responsive UI'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-neutral-300">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white mb-4 block">Tools & Deployment</span>
                <div className="flex flex-wrap gap-2">
                  {['Git & GitHub', 'Vercel Edge', 'RESTful APIs', 'DOM Manipulation'].map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-neutral-300">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}