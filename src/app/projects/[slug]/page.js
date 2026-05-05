"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projectsData } from "../../../data/projectsData";

export default function ProjectDetail() {
  const params = useParams();
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content/60 text-lg">
        Project not found. <Link href="/" className="ml-2 text-primary hover:underline">Return home.</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-100 pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Clean Back Button */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-base-content/50 hover:text-primary transition-colors font-medium mb-16">
          &larr; Back to projects
        </Link>

        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-base-200 rounded-full text-xs font-medium text-base-content/70">
              {new Date().getFullYear()}
            </span>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${project.status === 'DEPLOYED' || project.status === 'ACTIVE' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
              {project.status}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-base-content tracking-tight mb-8">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-base-content/60 max-w-3xl leading-relaxed font-light">
            {project.shortDescription}
          </p>
        </motion.div>

        {/* Massive Image / Architecture Visual Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full aspect-video bg-base-200/50 rounded-3xl border border-base-content/5 mb-20 flex items-center justify-center overflow-hidden"
        >
           <span className="text-base-content/30 font-medium tracking-widest text-sm uppercase">
             Insert High-Res Architecture / UI Screenshot Here
           </span>
        </motion.div>

        {/* Two-Column Deep Dive */}
        <div className="grid md:grid-cols-[1fr_300px] gap-16 items-start">
          
          {/* Left: Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg prose-base-content"
          >
            <h3 className="text-2xl font-bold tracking-tight mb-4">Overview</h3>
            <p className="text-base-content/70 leading-relaxed mb-12 font-light">
              {project.longDescription}
            </p>

            <h3 className="text-2xl font-bold tracking-tight mb-4">Key Features</h3>
            <ul className="space-y-3 text-base-content/70 font-light list-disc pl-5">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Sticky Tech Stack & Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:sticky md:top-32 space-y-12"
          >
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-base-content/40 mb-4">Technology</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-base-200/50 text-sm font-medium text-base-content/80 border border-base-content/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
               <Link href={project.liveLink} target="_blank" className="btn btn-primary w-full rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 text-lg">
                 Visit Live Site
               </Link>
               <Link href={project.githubLink} target="_blank" className="btn btn-outline w-full rounded-xl border-base-content/20 hover:bg-base-content/5 text-lg">
                 View Source Code
               </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}