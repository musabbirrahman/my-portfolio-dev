"use client";

export default function SkillsMarquee() {
  // Split skills into two distinct rows
  const rowOne = [
    "React", "Next.js", "JavaScript (ES6+)", "TypeScript", 
    "Tailwind CSS", "Framer Motion", "DaisyUI"
  ];
  
  const rowTwo = [
    "Node.js", "HTML5", "CSS3", "Git Workflow", 
    "GitHub", "Vercel Deployment", "Responsive Design"
  ];

  // Duplicating the arrays heavily ensures it never runs out of content on ultra-wide monitors
  const trackOne = [...rowOne, ...rowOne, ...rowOne, ...rowOne];
  const trackTwo = [...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo];

  return (
    <section className="py-16 bg-[#050505] border-y border-white/[0.02] relative overflow-hidden flex flex-col gap-6">
      
      {/* Left & Right Fade Gradients for depth */}
      <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      {/* TRACK 1: Scrolls Left */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-6">
        {trackOne.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/[0.05] rounded-full hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>
            <span className="text-sm md:text-base font-medium text-neutral-400 whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>

      {/* TRACK 2: Scrolls Right */}
      <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused] items-center gap-6 ml-[-200px]">
        {trackTwo.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/[0.05] rounded-full hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-300 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_10px_rgba(var(--p),0.5)]"></span>
            <span className="text-sm md:text-base font-medium text-neutral-300 whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
      
    </section>
  );
}