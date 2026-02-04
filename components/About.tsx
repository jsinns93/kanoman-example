
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#001f42] relative overflow-hidden mega-mendung-overlay">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-white/10 group-hover:border-white/30 transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1200" 
              alt="Culinary Craft" 
              className="relative z-10 w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-10 -left-10 bg-white p-8 hidden lg:block z-20 shadow-2xl">
              <p className="text-[#002D62] font-heritage text-4xl font-bold">Anom</p>
              <p className="text-[#002D62] text-[10px] font-bold uppercase tracking-[0.3em]">Forever Young</p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="inline-block border-l-2 border-white pl-6">
              <h2 className="text-white/50 uppercase tracking-[0.4em] text-xs font-bold mb-2">Our Legacy</h2>
              <h3 className="text-4xl md:text-6xl font-heritage font-bold text-white leading-tight">
                Crafted by Heritage
              </h3>
            </div>
            
            <p className="text-white/70 leading-relaxed text-lg font-light">
              Rooted in the wisdom of <span className="text-white font-medium">Sultan Anom VIII</span>, 
              Kanoman Bistro is more than a culinary destination; it is a portal to the royal heritage 
              of Cirebon. Every dish is a dialogue between the past and the present.
            </p>

            <div className="space-y-6">
               <div className="flex gap-4 items-start">
                  <div className="h-px w-10 bg-white/30 mt-3"></div>
                  <p className="text-white/60 text-base italic leading-relaxed">
                    "Blending traditional spices like Empal Gentong with the sophistication of modern plating."
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/10">
              <div>
                <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-3">Culture</h4>
                <p className="text-xs text-white/50 leading-relaxed">Mega Mendung motifs and Peranakan porcelain heritage woven into every detail.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-3">Mission</h4>
                <p className="text-xs text-white/50 leading-relaxed">Serving an elegant fusion that honors the fifth-generation descendant's vision.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          <div className="p-12 bg-[#002D62] hover:bg-[#003875] transition-all group">
            <span className="text-white/20 text-5xl font-heritage block mb-4">01</span>
            <h4 className="text-white font-heritage text-2xl mb-4 group-hover:translate-x-2 transition-transform">Authenticity</h4>
            <p className="text-white/50 text-xs leading-relaxed tracking-wide">Original Cirebon flavor profiles, preserved through generations and refined for the modern palate.</p>
          </div>
          <div className="p-12 bg-[#002D62] hover:bg-[#003875] transition-all group">
            <span className="text-white/20 text-5xl font-heritage block mb-4">02</span>
            <h4 className="text-white font-heritage text-2xl mb-4 group-hover:translate-x-2 transition-transform">Elegance</h4>
            <p className="text-white/50 text-xs leading-relaxed tracking-wide">A dining experience defined by regal blue tones and a minimalist, culture-forward atmosphere.</p>
          </div>
          <div className="p-12 bg-[#002D62] hover:bg-[#003875] transition-all group">
            <span className="text-white/20 text-5xl font-heritage block mb-4">03</span>
            <h4 className="text-white font-heritage text-2xl mb-4 group-hover:translate-x-2 transition-transform">Innovation</h4>
            <p className="text-white/50 text-xs leading-relaxed tracking-wide">Pushing the boundaries of fusion cuisine while maintaining the soul of traditional comfort food.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
