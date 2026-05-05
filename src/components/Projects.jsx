"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40 bg-[#050505] px-6 relative z-10 border-t border-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight">
              Selected Work
            </h2>
            <p className="mt-4 text-neutral-400 text-lg max-w-xl font-light leading-relaxed">
              A collection of functional frontend architectures and user interfaces built with modern web technologies.
            </p>
          </div>
          <Link href="https://github.com/musabbirrahman" target="_blank" className="text-neutral-400 hover:text-white font-medium flex items-center gap-2 transition-colors">
            View full GitHub Archive 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </motion.div>

        {/* Premium Glass Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-white/[0.02] rounded-3xl overflow-hidden border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Abstract Visual Top Area (Replaces boring terminal headers) */}
              <div className="h-48 w-full bg-[#0a0a0a] border-b border-white/[0.05] relative overflow-hidden flex items-center justify-center">
                {/* Subtle gradient orb inside the image area that glows on hover */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-500 via-transparent to-transparent blur-xl"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center text-white text-xl font-bold border border-white/[0.1] z-10 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  {project.title.charAt(0)}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                {/* Status Indicator */}
                <div className="flex items-center justify-between mb-4">
                   <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                     {project.id}
                   </span>
                   <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                     <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'DEPLOYED' || project.status === 'ACTIVE' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500'}`}></span>
                     {project.status}
                   </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-200 mb-3 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-sm mb-8 leading-relaxed font-light flex-grow">
                  {project.shortDescription}
                </p>
                
                {/* Indented Pill Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-full bg-[#050505] text-xs font-medium text-neutral-300 border border-white/[0.05] shadow-inner shadow-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* High-Contrast Action Footer */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-white/[0.05]">
                  <Link href={project.githubLink} target="_blank" className="flex-1 py-3 text-center rounded-xl font-medium text-sm text-neutral-400 border border-white/[0.05] hover:bg-white/[0.05] hover:text-white transition-colors">
                    Source
                  </Link>
                  <Link href={`/projects/${project.slug}`} className="flex-[2] py-3 text-center rounded-xl font-semibold text-sm bg-white text-[#050505] hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}