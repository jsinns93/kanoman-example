
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import KanomanLogo from './components/KanomanLogo';
import { ShoppingBag, Calendar } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#002D62]">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <MenuSection />
        
        {/* Reservation Block */}
        <section id="order" className="py-32 bg-white text-[#002D62]">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-10 flex justify-center">
               <div className="p-4 border border-[#002D62]/10 rounded-sm">
                  <KanomanLogo size={64} color="#002D62" />
               </div>
            </div>
            <h3 className="text-4xl md:text-6xl font-heritage font-bold mb-8">Dine with Royalty.</h3>
            <p className="max-w-2xl mx-auto mb-16 text-lg md:text-xl font-light leading-relaxed">
              Experience the seamless blend of Cirebon's heritage and modern bistro lifestyle. 
              Whether it's a quiet morning or a festive evening, your table awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="https://wa.me/6281818175417"
                target="_blank"
                className="px-12 py-5 bg-[#002D62] text-white font-bold uppercase tracking-widest hover:bg-[#001f42] transition-all flex items-center justify-center gap-3 shadow-2xl"
              >
                <Calendar size={20} /> Table Reservation
              </a>
              <a 
                href="https://gofood.link/kanomanbistro"
                target="_blank"
                className="px-12 py-5 border-2 border-[#002D62] text-[#002D62] font-bold uppercase tracking-widest hover:bg-[#002D62] hover:text-white transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <ShoppingBag size={20} /> Order Delivery
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Sticky Mobile CTAs - Updated with Brand Colors */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40 w-[90%]">
        <a 
          href="https://wa.me/6281818175417"
          className="flex-1 bg-white text-[#002D62] py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2 border border-[#002D62]/10"
        >
          <Calendar size={14} /> Reserve
        </a>
        <a 
          href="https://gofood.link/kanomanbistro"
          className="flex-1 bg-[#001f42] text-white py-4 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2"
        >
          <ShoppingBag size={14} /> GoFood
        </a>
      </div>
    </div>
  );
};

export default App;
