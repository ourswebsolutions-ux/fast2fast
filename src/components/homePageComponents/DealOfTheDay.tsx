"use client";
import React from 'react';

const DealOfTheDay = () => {
  return (
    <div className=" py-16 px-4 font-serif">
      {/* 1350px Fixed Container */}
      <div className="max-w-[1350px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2">
            <div className="flex items-center gap-1.5 mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
              <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
              <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
            </div>
          </div>
          <h2 className="text-4xl text-gray-800 font-light tracking-wide">Trhák dne</h2>
        </div>

        {/* Main Card */}
        <div className="bg-[#f9f9f9] border border-gray-100 shadow-sm flex flex-col lg:flex-row items-stretch min-h-[450px]">

          {/* Left Column: Promotion Info */}
          <div className="flex-1 p-8 md:p-14 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center">
            <h3 className="text-4xl text-gray-800 mb-6 font-light">Sleva dne</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-sm">
              Zlatý investiční slitek od švýcarské firmy Argor-Heraeus SA o hmotnosti 1 Oz (31,1g)
              představuje nadstandardní jakost spojenou s elegancí a praktičností. Slitky do 100g mají ochranný obal.
            </p>

            <div className="space-y-6">
              <h4 className="text-2xl text-gray-800 font-light">Akce končí za:</h4>
              <div className="flex gap-6 items-baseline">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600  ">09</span>
                  <span className="text-sm text-gray-700">hodin</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600 ">55</span>
                  <span className="text-sm text-gray-700">minut</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600  ">55</span>
                  <span className="text-sm text-gray-700">sekund</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product and Price */}
          <div className="flex-[1.5] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-center gap-12 relative bg-[#f9f9f9]">

            {/* Product Image Area (Original Path & Width) */}
            <div className="relative group shrink-0">
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold z-20 shadow-lg">
                <span className="text-base font-sans">-20 %</span>
              </div>

              <div className="relative w-56 h-72 flex items-center justify-center bg-transparent">
                <img
                  src="/3.png"
                  alt="Argor Heraeus Gold Bar"
                  className="max-w-full max-h-full object-contain"
                />
                {/* Stock Tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#000] text-white text-[10px] py-2 text-center font-sans tracking-wider ">
                  Poslední 2ks skladem
                </div>
              </div>
            </div>

            {/* Price Details - Fixed Flex Layout */}
            <div className="flex-1 space-y-8 w-full max-w-sm">
              <h3 className="text-3xl text-gray-800 leading-tight font-light">
                31,1g investiční zlatý slitek Argor Heraeus SA
              </h3>

              <div className="space-y-4">

                <div className="grid grid-cols-2 items-center">
                  <span className="text-lg text-gray-800">Běžná cena:</span>
                  <span className="text-lg text-gray-400 text-right font-sans">
                    42 895 Kč
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center">
                  <span className="text-lg text-gray-800">Cena dnes:</span>
                  <span className="text-3xl text-[#C5A059] font-medium text-right leading-none font-sans">
                    34 316 Kč
                  </span>
                </div>

                <div className="grid grid-cols-2 items-center">
                  <span className="text-lg text-gray-800">Sleva:</span>
                  <span className="text-xl   text-red-600 font-medium text-right font-sans">
                    – 8 579 Kč
                  </span>
                </div>

              </div>

              <button className="w-full md:w-auto bg-[#C5B367] hover:bg-[#b39e55] text-white py-4 px-12 transition-all duration-300 text-sm font-medium rounded-sm">
                Zobrazit detail
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;