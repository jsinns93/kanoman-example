
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#001f42] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="text-left flex items-center gap-4">
            <div className="w-10 h-10 border border-white flex items-center justify-center font-heritage font-bold text-white text-xl flex-shrink-0">K</div>
            <div>
              <h5 className="text-sm font-heritage font-bold text-white tracking-widest uppercase mb-1 leading-none">KANOMAN BISTRO</h5>
              <p className="text-white/30 text-[9px] tracking-[0.3em] uppercase">© 2024 Heritage Restored.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h6 className="text-[10px] uppercase tracking-widest text-white font-bold mb-1">Our Location</h6>
            <p className="text-white/40 text-[11px] font-light leading-relaxed max-w-[200px]">
              Jl. Cilandak Dalam No.3a, <br />
              Jakarta, Indonesia 12430
            </p>
          </div>

          <div className="flex gap-10">
            <a href="#about" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">History</a>
            <a href="#menu" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Menu</a>
            <a href="#contact" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Location</a>
          </div>

          <div className="text-left md:text-right">
             <p className="text-white/20 text-[9px] tracking-widest uppercase leading-relaxed font-medium">Inspired by Keraton Kanoman Cirebon <br /> Modernizing Cultural Wisdom</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
