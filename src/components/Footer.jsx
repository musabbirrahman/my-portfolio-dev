export default function Footer() {
  return (
    <footer className="py-8 bg-[#050505] border-t border-white/[0.05] text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-neutral-500 font-medium">
          © {new Date().getFullYear()} Musabbir Rahman. Crafted in Jamalpur, BD.
        </p>
        
        <div className="flex gap-8 font-medium">
          <a 
            href="https://github.com/musabbirrahman" 
            target="_blank" 
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/musabbirrahman" 
            target="_blank" 
            className="text-neutral-500 hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
        
      </div>
    </footer>
  );
}