"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "381a0fb1-c048-4171-904e-8f74ca3a6ca5", // <-- PASTE YOUR KEY HERE
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-[#050505] px-6 relative overflow-hidden border-t border-white/[0.02]">
      
      {/* Centered Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] md:w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
      
      {/* Fine Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Contact Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="w-16 h-16 mx-auto md:mx-0 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shadow-inner shadow-white/[0.02] mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-neutral-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 tracking-tight">
            Initiate Contact.
          </h2>
          
          <p className="text-lg text-neutral-400 leading-relaxed font-light">
            I am currently actively seeking new engineering opportunities. 
            Whether you have a role to fill, a project to discuss, or just want to connect, my inbox is always open.
          </p>

          <div className="pt-4">
            <Link 
              href="https://linkedin.com/in/musabbirrahman" 
              target="_blank" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/[0.02] border border-white/[0.1] text-white text-sm font-medium rounded-full hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300"
            >
              Connect on LinkedIn
            </Link>
          </div>
        </motion.div>

        {/* Right Side: The Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === "success" ? (
            <div className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Transmission Sent</h3>
              <p className="text-emerald-200/60 font-light">Thank you for reaching out. I will respond to your message shortly.</p>
              <button onClick={() => setStatus("idle")} className="text-sm text-emerald-500 hover:text-white transition-colors mt-4">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] shadow-2xl shadow-black/50 space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 ml-1">Name</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#0a0a0a] border border-white/[0.05] rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.04] transition-all duration-300" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 ml-1">Email</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#0a0a0a] border border-white/[0.05] rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.04] transition-all duration-300" placeholder="john@company.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 ml-1">Message</label>
                  <textarea required id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full bg-[#0a0a0a] border border-white/[0.05] rounded-xl px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-white/[0.2] focus:bg-white/[0.04] transition-all duration-300 resize-none" placeholder="Let's build something together..."></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#050505] text-base font-semibold rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Transmitting..." : "Send Message"}
                {status !== "submitting" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Connection failed. Please try again or use LinkedIn.</p>
              )}
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}