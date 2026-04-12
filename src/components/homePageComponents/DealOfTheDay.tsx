"use client";
import React from 'react';

const DealOfTheDay = () => {
  return (
    <div className="bg-[#f9f9f9] py-16 px-4 font-serif ">
      {/* 1350px Fixed Container */}
      <div className="max-w-[1350px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <span className="text-gray-300 text-xs gap-1 flex">
              <span>◆</span><span>◆</span><span>◆</span>
            </span>
          </div>
          <h2 className="text-4xl text-gray-800 font-light tracking-wide">Trhák dne</h2>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-100 shadow-sm flex flex-col lg:flex-row items-stretch min-h-[450px]">
          
          {/* Left Column: Promotion Info */}
          <div className="flex-1 p-8 md:p-14 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
            <h3 className="text-4xl text-gray-800 mb-6 font-light">Sleva dne</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-sm">
              Zlatý investiční slitek od švýcarské firmy Argor-Heraeus SA o hmotnosti 1 Oz (31,1g) 
              představuje nadstandardní jakost spojenou s elegancí a praktičností. Slitky do 100g mají ochranný obal.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg text-gray-800 font-light uppercase tracking-widest text-xs">Akce končí za:</h4>
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl text-red-600 font-medium">09</span>
                  <span className="text-[10px] text-gray-400 font-sans uppercase tracking-tighter">hodin</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl text-red-600 font-medium">55</span>
                  <span className="text-[10px] text-gray-400 font-sans uppercase tracking-tighter">minut</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl text-red-600 font-medium">55</span>
                  <span className="text-[10px] text-gray-400 font-sans uppercase tracking-tighter">sekund</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product and Price */}
          <div className="flex-[1.5] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-center gap-12 relative bg-white">
            
            {/* Product Image Area */}
            <div className="relative group shrink-0">
              {/* Discount Badge */}
              <div className="absolute -top-6 -right-6 bg-red-600 text-white w-16 h-16 rounded-full flex flex-col items-center justify-center text-sm font-bold z-20 shadow-xl border-4 border-white">
                <span className="text-[10px] font-light leading-none">SLEVA</span>
                <span className="text-lg">-20%</span>
              </div>
              
              <div className="relative w-56 h-72 flex items-center justify-center bg-transparent">
                <img 
                  src="/3.png" 
                  alt="Argor Heraeus Gold Bar"
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
                {/* Stock Tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#1A1A1A] text-white text-[9px] py-2 text-center font-sans tracking-[0.2em] uppercase">
                  Poslední 2ks skladem
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="flex-1 space-y-6 w-full max-w-sm">
              <h3 className="text-2xl lg:text-3xl text-gray-800 leading-tight font-light">
                31,1g investiční zlatý slitek Argor Heraeus SA
              </h3>
              
              <div className="space-y-4 border-y border-gray-100 py-6">
                <div className="flex justify-between items-center text-xs uppercase tracking-widest text-gray-400">
                  <span>Běžná cena:</span>
                  <span className="text-gray-800 line-through decoration-red-400">42 895 Kč</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs uppercase tracking-widest text-gray-400 pb-1">Cena dnes:</span>
                  <span className="text-5xl text-[#C5A059] font-light leading-none">34 316 Kč</span>
                </div>
                <div className="flex justify-between items-center text-xs uppercase tracking-widest text-gray-400">
                  <span>Vaše úspora:</span>
                  <span className="text-red-600 font-bold font-sans">8 579 Kč</span>
                </div>
              </div>

              <button className="w-full bg-[#C5B367] hover:bg-[#b38f4d] text-white py-5 px-8 transition-all duration-500 text-[11px] font-bold uppercase tracking-[0.3em] shadow-md active:scale-95">
                Zobrazit detail produktu
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;