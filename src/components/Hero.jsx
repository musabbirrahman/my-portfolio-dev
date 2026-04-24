"use client"; // This tells Next.js to run this on the client side for animations
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-300 px-6 pt-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text & Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl text-primary font-semibold tracking-wide">
            Hi there, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-base-content leading-tight">
            Musabbir Rahman.
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-neutral-content">
            I build responsive frontends.
          </h3>
          <p className="text-lg text-base-content/70 max-w-lg leading-relaxed">
            I am a dedicated Frontend Developer specializing in React, Next.js, and Tailwind CSS. 
            Currently pushing my limits through a 100-day coding challenge to craft elegant, user-friendly web experiences.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Link href="#projects" className="btn btn-primary btn-lg rounded-full">
              View My Work
            </Link>
            <Link href="#contact" className="btn btn-outline btn-lg rounded-full">
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Visual/Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          {/* For now, this is a stylized decorative box. Later, we can swap this for a sleek profile photo or a 3D graphic! */}
          <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 absolute -z-10"></div>
          <div className="w-80 h-80 rounded-2xl bg-base-100 shadow-2xl border border-base-200 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
             <span className="text-6xl">💻</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}