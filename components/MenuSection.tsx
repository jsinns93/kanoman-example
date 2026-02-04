
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory } from '../types';

const categories: MenuCategory[] = ['Breakfast', 'Salad', 'Appetizer', 'Main Course', 'Dessert', 'Drinks'];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Main Course');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#002D62]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">A Taste of Royalty</h2>
          <h3 className="text-4xl md:text-6xl font-heritage font-bold text-white">The Collection</h3>
          <div className="w-20 h-px bg-white/20 mx-auto mt-6"></div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 transition-all duration-300 uppercase text-[10px] tracking-widest font-bold ${
                activeCategory === cat 
                  ? 'bg-white text-[#002D62]' 
                  : 'bg-transparent text-white/40 border-b border-white/5 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-white/5 transition-all duration-500 hover:border-white/20"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-lg md:text-xl font-heritage text-white group-hover:text-white/80 transition-colors">
                    {item.name}
                  </h4>
                  {item.isSpecial && (
                    <span className="text-[9px] border border-white/30 text-white/60 px-2 py-0.5 font-bold uppercase tracking-widest rounded-full">
                      Signature
                    </span>
                  )}
                </div>
                <p className="text-white/40 text-xs font-light max-w-sm">
                  {item.description || "Expertly prepared using heritage recipes passed through royal generations."}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-white/10 group-hover:w-12 transition-all"></div>
                <p className="text-white font-medium text-sm tracking-widest uppercase">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-bold italic">Prices include taxes and heritage services</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
