import React from 'react';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '../constants';
import { Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black pt-24 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        {/* Brand & Contact */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
              ASIAN BOY<br/>VISION
            </h2>
            <p className="text-gray-500 max-w-sm font-light">
              專注於獨特視角與生活美學的亞洲男孩宇宙。
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-mono text-gray-500 mb-2 uppercase tracking-widest">Contact</h3>
            <a 
              href={`mailto:${CONTACT_EMAIL}`} 
              className="text-xl text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2 border-b border-white/20 pb-1"
            >
              {CONTACT_EMAIL}
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex-1 md:max-w-sm">
          <h3 className="text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest">Connect</h3>
          <ul className="space-y-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 border-b border-white/10 hover:border-white/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <link.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-lg text-gray-300 group-hover:text-white font-medium transition-colors">
                      {link.platform}
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-700 uppercase tracking-widest font-mono">
        <p>© 2025 ASIAN BOY VISION. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed for Visionaries</p>
      </div>
    </footer>
  );
};

export default Footer;
