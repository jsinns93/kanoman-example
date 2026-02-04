
import React from 'react';
import { ShoppingCart, MessageCircle, UtensilsCrossed } from 'lucide-react';
import KanomanLogo from './KanomanLogo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#002D62]/75 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          alt="Elegant Bistro Ambience" 
          className="w-full h-full object-cover scale-110 animate-pulse"
          style={{ animationDuration: '12s' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="mb-8 inline-flex flex-col items-center">
          <div className="mb-6 transform transition-transform hover:scale-105 duration-700">
            <KanomanLogo size={120} color="white" className="md:w-[140px] md:h-[140px]" />
          </div>
          <h2 className="text-white text-[10px] md:text-xs font-semibold tracking-[0.5em] uppercase mb-2 opacity-90">
            Cirebon Heritage × Modern Bistro
          </h2>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heritage font-bold mb-6 text-white tracking-tight leading-tight">
          Kanoman Bistro
        </h1>
        
        <p className="max-w-xl mx-auto text-white/80 text-sm md:text-base mb-10 leading-relaxed font-light px-4">
          Inspired by the regal legacy of <span className="font-semibold italic">Keraton Kanoman</span>. 
          Discover a curated symphony of tradition and modernity, meticulously crafted for 
          an enduring sense of <span className="text-white font-medium border-b border-white/30 italic">"awet muda"</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#menu" 
            className="w-full sm:w-auto px-10 py-3.5 bg-white text-[#002D62] font-bold uppercase text-xs tracking-widest hover:bg-[#E2E8F0] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
          >
            <UtensilsCrossed size={16} /> View Menu
          </a>
          <a 
            href="https://gofood.link/kanomanbistro" 
            target="_blank" 
            className="w-full sm:w-auto px-10 py-3.5 border border-white text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[#002D62] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} /> Order Online
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
