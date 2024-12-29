import React from 'react';
import { Crown } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-black text-white fixed w-full z-50">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-[#FFD700]" />
            <span className="text-2xl font-bold">
              <span className="text-[#FFD700]">B</span>illionaire Academy
            </span>
          </a>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#executives">Executives</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a 
              href="#donate"
              className="px-6 py-2 bg-[#FFD700] text-black rounded-full font-semibold hover:bg-[#E5C100] transition-colors"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white hover:text-[#FFD700] transition-colors duration-200"
    >
      {children}
    </a>
  );
}
export default Header;