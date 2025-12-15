import React from 'react';
import { SOCIAL_LINKS, CONTACT_EMAIL } from '../constants';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 tracking-tight">聯絡我們</h2>
          <a 
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-lg"
          >
            <Mail size={20} />
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-sm text-gray-500 max-w-md">
            有關商品詳情、合作邀約或訂單查詢，請直接透過電子郵件與我們聯繫。
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-bold mb-6 tracking-tight">關注 ASIAN BOY</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:border-white/50 hover:bg-white/5 transition-all group"
              >
                <link.icon size={20} className="text-gray-400 group-hover:text-white" />
                <span className="text-gray-300 group-hover:text-white font-medium">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} ASIAN BOY VISION. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 md:mt-0">DESIGNED FOR MANNY LOVERS</p>
      </div>
    </footer>
  );
};

export default Footer;