import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-2xl font-bold text-primary tracking-wide">
          Musabbir<span className="text-base-content">.dev</span>
        </Link>
      </div>
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
      <div className="flex-none md:hidden">
         {/* We will add a mobile hamburger menu here later! */}
         <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
         </button>
      </div>
    </div>
  );
}