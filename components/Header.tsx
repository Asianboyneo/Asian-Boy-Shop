import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference pointer-events-none">
      <div className="flex flex-col pointer-events-auto cursor-default">
        <h1 className="text-white font-black text-xl md:text-2xl tracking-tighter leading-none uppercase">
          ASIAN BOY
        </h1>
        <span className="text-white font-light text-xs md:text-sm tracking-[0.4em] uppercase opacity-90 pl-1">
          Vision
        </span>
      </div>
      <nav className="pointer-events-auto">
        <span className="text-white/80 text-[10px] font-mono border border-white/20 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-widest">
          Est. 2025
        </span>
      </nav>
    </header>
  );
};

export default Header;