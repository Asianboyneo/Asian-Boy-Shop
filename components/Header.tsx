import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter">
        ASIAN BOY VISION
      </h1>
      <div className="hidden md:block">
        <span className="text-white text-sm font-mono tracking-widest">EST. 2025</span>
      </div>
      <button className="text-white md:hidden">
        <Menu />
      </button>
    </header>
  );
};

export default Header;