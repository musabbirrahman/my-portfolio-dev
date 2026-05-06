"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { projectsData } from "../../../data/projectsData";

export default function ProjectDetail() {
  const params = useParams();
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505] text-neutral-500 text-lg font-light">
        Project not found. 
        <Link href="/#projects" className="ml-2 text-white hover:underline transition-all">
          Return home.
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 relative overflow-hidden selection:bg-white/10 selection:text-white">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Stealth Back Button */}
        <Link 
          href="/#projects" 
          className="group inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors font-medium mb-16"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Architecture
        </Link>

        {/* Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs font-semibold tracking-widest text-neutral-400">
              {project.id || new Date().getFullYear()}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-full text-xs font-medium text-neutral-300 shadow-inner shadow-white/[0.01]">
              <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'DEPLOYED' || project.status === 'ACTIVE' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]'}`}></span>
              {project.status}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 tracking-tight leading-tight mb-8">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl leading-relaxed font-light">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Massive Image / Architecture Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-video rounded-3xl border border-white/[0.05] mb-20 overflow-hidden relative shadow-2xl shadow-black/80 group"
        >
          {project.image ? (
             <Image 
               src={project.image} 
               alt={`${project.title} Interface`}
               fill
               className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.02]"
               priority
             />
           ) : (
             <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center text-neutral-600 font-medium tracking-widest text-sm uppercase relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent"></div>
                Architecture Placeholder
             </div>
           )}
        </motion.div>

        {/* Two-Column Deep Dive */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 md:gap-24 items-start">
          
          {/* Left: Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl font-bold text-neutral-200 tracking-tight mb-6">System Overview</h3>
            <p className="text-lg text-neutral-400 leading-relaxed font-light mb-16">
              {project.longDescription}
            </p>

            <h3 className="text-2xl font-bold text-neutral-200 tracking-tight mb-6">Key Engineering Features</h3>
            <ul className="space-y-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-neutral-400 font-light text-lg">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Sticky Tech Stack & Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-32 space-y-12"
          >
            {/* Tech Stack Bento Box */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-lg shadow-black/50">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-6">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full bg-[#050505] text-xs font-medium text-neutral-300 border border-white/[0.05] shadow-inner shadow-white/[0.02]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Terminals */}
            <div className="space-y-4">
               {project.liveLink && (
                 <Link 
                   href={project.liveLink} 
                   target="_blank" 
                   className="group flex items-center justify-between w-full p-4 rounded-2xl bg-white text-[#050505] font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                 >
                   Launch Live Application
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                 </Link>
               )}
               
               {project.githubLink && (
                 <Link 
                   href={project.githubLink} 
                   target="_blank" 
                   className="group flex items-center justify-between w-full p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-white font-medium text-sm hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
                 >
                   Review Source Code
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                 </Link>
               )}
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}