"use client";
import React, { useState, useEffect } from 'react';
import FilterModal from './filterModal';
import { ChevronRight, ChevronDown, Home } from 'lucide-react';
import Link from 'next/link';

const CategorieHero = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydration error se bachne ke liye mounted check zaroori hai
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="max-w-[1350px] lg:max-w-[1411px] mx-auto lg:mt-6 font-sans bg-white">

      {/* 1. Mobile Breadcrumb (Visible only on Mobile, at the very top) */}
      <div className="flex lg:hidden items-center mb-4 overflow-x-auto no-scrollbar gap-0.5 pb-2">
        <Link
          href="/"
          className="h-9 pr-6 pl-4 bg-[#f2f2f2] flex-shrink-0 flex items-center justify-center text-[#777] hover:bg-gray-200 transition-colors"
          style={{
            clipPath: "polygon(0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%)"
          }}
        >
          <Home size={16} />
        </Link>
        <div
          className="h-9 flex items-center bg-[#f2f2f2] -ml-[3px] flex-shrink-0"
          style={{
            clipPath: "polygon(0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%, 12px 50%)"
          }}
        >
          <span className="pl-7 pr-8 text-[13px] text-[#999] whitespace-nowrap">
            Investiční zlato
          </span>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="flex flex-col lg:flex-row gap-7 items-stretch">

        {/* 2. Sidebar (Mobile pe ye breadcrumb ke baad aayega) */}
        <aside className="w-full lg:w-[305.5px] h-full border lg:-ml-0.5  flex-shrink bg-black text-white flex flex-col order-2 lg:order-1">
          <div className="bg-[rgb(199,177,93)] p-4 py-4 flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
                <img src="/side-bar-icon-8.svg" alt="icon" className="w-4 h-4" />
              </div>
              <span className="text-[14px] font-bold tracking-tight text-white">Investiční zlato</span>
            </div>
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white"></div>
          </div>

          <div className="flex flex-col ">
            {[{ title: 'Zlaté mince', icon: <img src="/au.svg" alt="" className="w-4 h-4 object-contain transition-all duration-200 group-hover:invert" /> },
            {
              title: 'Zlaté slitky a cihly', icon: <img src="/side-bar-icon-2.svg" alt="" className="w-4 h-4 object-contain transition-all duration-200 
      group-hover:invert"/>
            },
            {
              title: 'Zlaté novoražby', icon: <img src="/side-bar-icon-3.svg" alt="" className="w-4 h-4 object-contain transition-all duration-200 
      group-hover:invert"/>, active: true, triggerPopup: true
            },
            {
              title: 'Zlaté medaile', icon: <img src="/side-bar-icon-4.svg" alt="" className="w-4 h-4 object-contain transition-all duration-200 
      group-hover:invert" />
            },
            {
              title: 'Investiční stříbro', icon: <img src="/side-bar-icon-5.svg" alt="" className="w-4 h-4 object-contain transition-all duration-200 
      group-hover:invert" />, sub: true
            },
            {
              title: 'Pro sběratele', icon: <img src="/sberatele.svg" alt="" className="w-4 h-4 object-contain transition-all duration-200 
      group-hover:invert"/>, sub: true
            },
            { title: 'Příslušenství', icon: <img src="/side-bar-icon-7.svg" alt="" className="w-4 h-4 object-contain transition-all duration-200   group-hover:invert" />, sub: true }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.triggerPopup && setIsFilterOpen(true)}
                className={`group relative px-4 border py-4 flex justify-between items-center border-b border-gray-800 cursor-pointer transition-colors duration-200
                ${item.active ? 'bg-white text-black font-semibold' : 'bg-black text-white hover:bg-white hover:text-black'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 flex justify-center grayscale 
  hover:bg-black hover:border-2 hover:border-white 
  hover:rounded-full hover:scale-110 
  group-hover:brightness-100 transition-all duration-200">
                    {item.icon}
                  </span>
                  <span className="text-[14px]">{item.title}</span>
                </div>
                {item.sub && (
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-white group-hover:border-l-black"></div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* 3. Main Content Area */}
        <div className="flex-1 lg:ml-2 flex flex-col order-3 lg:pb-5 lg:order-2">

          {/* Desktop Only Breadcrumb (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center mb-5 overflow-x-auto no-scrollbar gap-0.5 pb-2">
            <Link
              href="/"
              className="h-10 pr-6 pl-4 bg-[#f2f2f2] flex-shrink-0 flex items-center justify-center text-[#777] hover:bg-gray-200 transition-colors"
              style={{
                clipPath: "polygon(0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%)"
              }}
            >
              <Home size={16} />
            </Link>
            <div
              className="h-10 flex items-center bg-[#f2f2f2] -ml-[3px] flex-shrink-0"
              style={{
                clipPath: "polygon(0% 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 0% 100%, 12px 50%)"
              }}
            >
              <span className="pl-9 pr-10 text-[14px] text-[#999] whitespace-nowrap">
                Investiční zlato
              </span>
            </div>
          </div>

          {/* Banner Section */}
          <div className="relative bg-[#111111] h-[250px] md:h-[265px] flex items-center overflow-hidden"
            style={{
              backgroundImage: "url('/cat-hero.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-20 pl-8 md:pl-16 w-full lg:w-[60%]">
              <h1 className="text-white text-3xl md:text-4xl font-serif mb-4 leading-tight tracking-wide">
                Investiční zlato
              </h1>
              <p className="text-[rgb(199,177,93)] text-[14px] underline underline-offset-8 cursor-pointer hover:text-[#d4b57a] transition-colors decoration-[rgb(199,177,93)] font-medium">
                Více informací o investičním zlatě &gt;
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/20 to-transparent z-[15] pointer-events-none"></div>
          </div>

          {/* Categories Grid / Mobile Scroller */}
          <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-4 gap-4 mt-8 pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide">
            {[
              { name: 'Zlaté mince', img: "/Zlaté mince.svg" },
              { name: 'Zlaté slitky a cihly', img: "/Zlaté slitky a cihly.svg" },
              { name: 'Zlaté novoražby', img: "/Zlaté novoražby.svg" },
              { name: 'Zlaté medaile', img: "/Zlaté medaile.svg" }
            ].map((card, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 h-20 min-w-[85%] md:min-w-0 snap-center transition-all duration-300 cursor-pointer bg-white group border-[#C5B367] border-1 hover:border-[rgb(199,177,93)] hover:border-2 flex-shrink-0"
              >
                <div className="w-10 h-10 flex-shrink-0">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-[14px] font-serif text-[#333] leading-tight font-medium whitespace-normal">
                  {card.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

    </div>
  );
};

export default CategorieHero;