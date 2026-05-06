"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const rocketY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData = [
    {
      step: "01",
      phase: "Secondary Foundation",
      title: "Secondary School Certificate",
      institution: "Lighthouse Lab. School and College",
      year: "2023",
      gpa: "5.00",
      description: "Established a flawless quantitative and analytical baseline in the sciences, achieving top-tier academic results and forming the initial logical framework for my engineering journey.",
      tech: ["Science Core", "Analytical Logic"],
      align: "left"
    },
    {
      step: "02",
      phase: "Higher Secondary",
      title: "Higher Secondary Certificate",
      institution: "Ghatail Cantonment Public School and College",
      year: "2025",
      gpa: "3.67",
      description: "Advanced studies in mathematics and physical sciences. Developed the rigorous logical reasoning and computational thinking skills required for complex software architecture.",
      tech: ["Advanced Mathematics", "Physics"],
      align: "right"
    },
    {
      step: "03",
      phase: "Undergraduate Studies",
      title: "BSc in Computer Science & Engineering",
      institution: "Brahmaputra International University",
      year: "2026 - Present",
      gpa: "Active",
      description: "Formal academic immersion into software architecture, algorithmic complexity, and dynamic application design. Dedicating my studies to mastering fundamental principles to build scalable technical systems.",
      tech: ["Data Structures", "Algorithms", "System Design"],
      align: "left"
    },
    {
      step: "04",
      phase: "Engineering Specialization",
      title: "Modern Web Architecture",
      institution: "Programming Hero | IBM | Coursera",
      year: "Late 2025 - Present",
      gpa: "Next.js Focus",
      description: "Executing a rigorous continuous-shipping protocol to master the modern web ecosystem. Initiated with fundamental architecture, escalated into an intensive Full-Stack Bootcamp, and currently engineering server-side rendered, production-grade applications.",
      tech: ["Next.js", "React", "Full-Stack Systems"],
      links: [
        { name: "Verify React Architecture Credential", url: "https://coursera.org/share/f9ed374f6ba8ccea134879e0d94002dc" },
        { name: "Verify Web Fundamentals Credential", url: "https://www.credly.com/badges/de1ccc87-723e-4f38-a7f1-ba2e8d0331ed" }
      ],
      align: "right"
    }
  ];

  return (
    <section id="education" className="py-24 md:py-40 bg-[#050505] px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.02]">
      
      {/* Subtle Ambient Depth Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-40 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight leading-tight">
            Educational <br /> & Technical Path.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed font-light">
            A chronological mapping of my academic foundation and continuous evolution as a software engineer.
          </p>
        </motion.div>

        {/* --- TIMELINE CONTAINER --- */}
        <div ref={containerRef} className="relative w-full max-w-5xl mx-auto pb-10">
            
            {/* The Central Track (Background Line) */}
            <div className="absolute top-0 bottom-0 left-[24px] sm:left-[32px] md:left-1/2 md:-translate-x-px w-[2px] bg-white/[0.05]"></div>

            {/* The Traveling Rocket */}
            <motion.div 
              style={{ top: rocketY }} 
              className="absolute left-[24px] sm:left-[32px] md:left-1/2 -translate-x-1/2 -mt-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#050505] border border-white/[0.1] flex items-center justify-center z-30 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></div>
            </motion.div>

            {/* Timeline Nodes */}
            <div className="space-y-16 sm:space-y-24 md:space-y-32">
              {timelineData.map((item, index) => {
                const isLeft = item.align === 'left';
                
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                    
                    {/* Desktop Empty Space (Left side for right-aligned cards) */}
                    {!isLeft && <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>}

                    {/* Connecting Dash Line (Desktop Only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[2.5rem] border-t border-dashed border-white/[0.2] z-0 ${isLeft ? 'right-[50%]' : 'left-[50%]'}`}></div>

                    {/* The Bento Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full md:w-[calc(50%-2.5rem)] relative z-10 pl-[56px] sm:pl-[72px] md:pl-0`}
                    >
                      <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-500 shadow-lg shadow-black/50 group relative">
                        
                        {/* Mobile Node Dot */}
                        <div className="md:hidden absolute top-[44px] sm:top-[52px] left-[-32px] sm:left-[-40px] w-3 h-3 rounded-full bg-[#050505] border-2 border-white/[0.2] z-20 -translate-x-1/2"></div>

                        {/* Phase & Step Header */}
                        <div className="flex flex-row items-center justify-between gap-3 mb-6">
                          <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400 transition-colors truncate">
                            {item.phase}
                          </span>
                          <span className="shrink-0 whitespace-nowrap px-2 sm:px-3 py-1 rounded-full bg-[#050505] border border-white/[0.05] text-[10px] sm:text-xs font-medium text-neutral-400 shadow-inner shadow-white/[0.02]">
                             Step {item.step}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-200 mb-4 group-hover:text-white transition-colors duration-300">
                          {item.title}
                        </h3>
                        
                        <p className="text-neutral-400 text-xs sm:text-sm mb-6 leading-relaxed font-light">
                           {item.description}
                        </p>
                        
                        {/* Tech Pills */}
                        <div className={`flex flex-wrap gap-2 ${item.links ? 'mb-4' : 'mb-8'}`}>
                          {item.tech.map((tag, idx) => (
                            <span key={idx} className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#050505] text-[10px] sm:text-xs font-medium text-neutral-300 border border-white/[0.05]">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Verified Credential Links (If they exist) */}
                        {item.links && (
                          <div className="flex flex-col gap-3 mb-8">
                            {item.links.map((link, idx) => (
                              <a 
                                key={idx} 
                                href={link.url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="group/link inline-flex items-center gap-2 text-[10px] sm:text-xs font-medium text-neutral-500 hover:text-white transition-colors w-fit"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                <span className="border-b border-transparent group-hover/link:border-white transition-colors">{link.name}</span>
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Institution & Stats Footer */}
                        <div className="pt-5 sm:pt-6 border-t border-white/[0.05] flex flex-col xl:flex-row xl:items-center justify-between gap-3 sm:gap-4">
                          <span className="text-xs sm:text-sm font-medium text-neutral-300 leading-snug">
                            {item.institution}
                          </span>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-500">
                            <span className="whitespace-nowrap">{item.year}</span>
                            <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></span>
                            <span className={`whitespace-nowrap ${item.gpa === "5.00" || item.gpa === "Next.js Focus" ? "text-emerald-500" : ""}`}>
                              {item.gpa.includes("Focus") || item.gpa === "Active" ? item.gpa : `GPA: ${item.gpa}`}
                            </span>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                    
                    {/* Desktop Empty Space (Right side for left-aligned cards) */}
                    {isLeft && <div className="hidden md:block w-[calc(50%-2.5rem)]"></div>}

                  </div>
                );
              })}
            </div>

        </div>
      </div>
    </section>
  );
}