
import React from 'react';
import { Instagram, Phone, Clock, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#001f42]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Location & Hours</h2>
              <h3 className="text-4xl md:text-5xl font-heritage font-bold text-white">Get in Touch</h3>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="p-4 border border-white/10 text-white group-hover:bg-white group-hover:text-[#002D62] transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-2">Our Bistro</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    Jl. Cilandak Dalam No.3a, <br />
                    Jakarta, Indonesia 12430
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 border border-white/10 text-white group-hover:bg-white group-hover:text-[#002D62] transition-all duration-300">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-2">Service Hours</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-light">Monday — Sunday <br /> 08:00 – 20:00 Daily</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 border border-white/10 text-white group-hover:bg-white group-hover:text-[#002D62] transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs uppercase tracking-widest mb-2">Reservation</h4>
                  <a href="https://wa.me/6281818175417" className="text-white text-lg font-heritage hover:underline">+62 818-1817-5417</a>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Available on WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex gap-6">
               <a href="https://instagram.com/kanomanbistro" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all"><Instagram size={20} /></a>
               <a href="https://instagram.com/kanoman.bistro" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Map Placeholder updated for Jakarta location */}
          <div className="lg:col-span-7 relative min-h-[500px] h-full overflow-hidden bg-white/5 group">
            <div className="absolute inset-0 bg-[#002D62]/20 group-hover:bg-transparent transition-all z-10 pointer-events-none"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.914565746358!2d106.7972016!3d-6.2750059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1950e895555%3A0x6a00f89831555555!2sJl.%20Cilandak%20Dalam%20No.3a%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) invert(0.9) brightness(0.8)' }}
              allowFullScreen
              loading="lazy"
              title="Kanoman Bistro Jakarta Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
