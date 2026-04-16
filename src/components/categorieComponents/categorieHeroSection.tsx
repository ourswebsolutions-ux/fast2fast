"use client";
import React, { useState } from 'react';
import FilterModal from './filterModal';
import { ChevronRight, ChevronDown, Home } from 'lucide-react';
import Link from 'next/link';

const CategorieHero = () => {
  // State for Modal
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="max-w-[1350px] mx-auto p-4 font-sans bg-white">
      
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-7 items-stretch">

        {/* 2. Sidebar */}
        <aside className="w-full lg:w-[280px] flex-shrink-0 bg-black text-white flex flex-col">
          <div className="bg-[#C5A059] p-4 py-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center text-[10px] font-bold">Au</div>
              <span className="text-[14px] font-bold tracking-tight">Investiční zlato</span>
            </div>
            <ChevronDown size={18} />
          </div>

          <div className="flex flex-col flex-1">
            {[
              { title: 'Zlaté mince', icon: 'Au' },
              { title: 'Zlaté slitky a cihly', icon: '■' },
              { title: 'Zlaté novoražby', icon: '○', active: true, triggerPopup: true },
              { title: 'Zlaté medaile', icon: '★' },
              { title: 'Investiční stříbro', icon: 'Ag', sub: true },
              { title: 'Pro sběratele', icon: '👤', sub: true },
              { title: 'Příslušenství', icon: '📖', sub: true },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.triggerPopup && setIsFilterOpen(true)}
                className={`group relative p-4 py-[18.2px] flex justify-between items-center border-b border-gray-800 cursor-pointer transition-all duration-300
                  ${item.active
                    ? 'bg-black text-white hover:bg-white hover:text-black font-semibold'
                    : 'hover:bg-[#111]'}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-[15px] w-5 text-center transition-colors
                    ${item.active
                      ? 'text-gray-400 group-hover:text-black'
                      : 'text-gray-400 font-bold'}`}>
                    {item.icon}
                  </span>
                  <span className="text-[14px]">{item.title}</span>
                </div>

                {item.sub && (
                  <ChevronRight
                    size={14}
                    className={`${item.active ? 'text-gray-500 group-hover:text-black' : 'text-gray-500'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* 3. Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* 1. Breadcrumb Bar */}
          <div className="flex items-center mb-6 h-9 overflow-hidden">
            <Link href="/" className="bg-[#F3F3F3] h-full px-4 flex items-center justify-center border-r border-white hover:bg-gray-200 transition-colors">
              <Home size={16} className="text-gray-600" />
            </Link>
            <div className="relative bg-[#F3F3F3] h-full px-8 flex items-center">
              <span className="text-gray-400 italic text-[13px] whitespace-nowrap uppercase tracking-wider">
                Investiční zlato
              </span>
              <div className="absolute right-[-14px] top-0 border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent border-l-[14px] border-l-[#F3F3F3] z-10"></div>
            </div>
          </div>

          {/* Banner */}
          <div className="relative bg-[#111111] h-[300px] flex items-center overflow-hidden">
            <div className="relative z-20 pl-12 md:pl-16 w-full lg:w-[60%]">
              <h1 className="text-white text-4xl lg:text-5xl font-serif italic mb-4 leading-tight tracking-wide">
                Investiční zlato
              </h1>
              <p className="text-[#C5A059] text-[14px] underline underline-offset-8 cursor-pointer hover:text-[#d4b57a] transition-colors decoration-[#C5A059] font-medium">
                Více informací o investičním zlatě &gt;
              </p>
            </div>
            
            <div className="absolute inset-y-0 right-0 w-[70%] lg:w-[50%] flex items-center justify-center pointer-events-none">
              <img
                src="/produkty.png"
                alt="Gold bars"
                className="h-full w-auto object-contain"
                style={{ transform: 'scale(1.2) translateX(-15%)' }}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent z-[15] pointer-events-none"></div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { name: 'Zlaté mince' },
              { name: 'Zlaté slitky a cihly' },
              { name: 'Zlaté novoražby' },
              { name: 'Zlaté medaile' }
            ].map((card, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 h-20 transition-all duration-300 cursor-pointer bg-white group border-2 border-gray-200 hover:border-[#C5A059]"
              >
                <div className="w-10 h-10 flex-shrink-0">
                  <img
                    src="/imgcoin432.svg"
                    alt="icon"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-[14px] font-serif text-[#333] leading-tight font-medium">
                  {card.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Filter Modal Integration */}
      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
      />

    </div>
  );
};

export default CategorieHero;