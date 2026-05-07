"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Replace with your actual Web3Forms Access Key
    formData.append("access_key", "381a0fb1-c048-4171-904e-8f74ca3a6ca5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Transmitted Successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-[#050505] px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.02]">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500 tracking-tight leading-tight">
            Initiate Contact.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed font-light">
            Whether it is a full-time opportunity, a technical consultation, or a collaborative project, my inbox is open.
          </p>
        </motion.div>

        {/* Dual-Pane Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Pane: Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8">Communications Data</h3>
              
              <div className="space-y-6">
                {/* Email Entry */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/[0.1] flex items-center justify-center shrink-0 group-hover:border-white/[0.3] group-hover:bg-white/[0.05] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-1">Direct Email</span>
                    <a href="mailto:your.email@example.com" className="text-sm md:text-base text-neutral-300 hover:text-white transition-colors">
                      musabbirrahman.dev@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Entry */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/[0.1] flex items-center justify-center shrink-0 group-hover:border-white/[0.3] group-hover:bg-white/[0.05] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-1">Secure Line</span>
                    <a href="tel:+8801700000000" className="text-sm md:text-base text-neutral-300 hover:text-white transition-colors">
                      +880 1330 792610
                    </a>
                  </div>
                </div>

                {/* Location Entry */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/[0.1] flex items-center justify-center shrink-0 group-hover:border-white/[0.3] group-hover:bg-white/[0.05] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block mb-1">Operational Base</span>
                    <span className="text-sm md:text-base text-neutral-300 block">Jamalpur, Bangladesh</span>
                    <span className="text-xs text-neutral-500 font-mono mt-1 block">GMT +6 (Remote Ready)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links (Optional, but looks great) */}
            <div className="flex items-center gap-4 pl-2">
              <a href="https://github.com/musabbirrahman" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-0.5">GitHub</a>
              <span className="w-1 h-1 rounded-full bg-neutral-800"></span>
              <a href="https://linkedin.com/in/musabbirrahman" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium border-b border-transparent hover:border-white pb-0.5">LinkedIn</a>
            </div>
          </motion.div>

          {/* Right Pane: Web3Forms Integrated Serverless Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={onSubmit} className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-2xl flex flex-col gap-6">
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Name</label>
                  <input type="text" name="name" required className="w-full bg-[#050505] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.3] focus:ring-1 focus:ring-white/[0.3] transition-all" placeholder="John Doe" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-[#050505] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.3] focus:ring-1 focus:ring-white/[0.3] transition-all" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Message</label>
                <textarea name="message" required rows="5" className="w-full bg-[#050505] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/[0.3] focus:ring-1 focus:ring-white/[0.3] transition-all resize-none" placeholder="Let's build something..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-white text-[#050505] font-bold text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Transmit Message
              </button>

              {/* Status Message Display */}
              {result && (
                <p className="text-center text-xs font-medium text-neutral-400 mt-2 animate-pulse">
                  {result}
                </p>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}