"use client";
import React from "react";

const DealOfTheDay = () => {
  return (
    <div className="py-16 px-4 font-serif">
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
          <h2 className="text-4xl text-gray-800 font-light tracking-wide">
            Trhák dne
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-[#f9f9f9] border border-gray-100 shadow-sm flex flex-col lg:flex-row items-stretch min-h-[450px]">

          {/* Left Column */}
          <div className="flex-1 p-4 md:p-6 lg:border-r border-gray-200 flex flex-col justify-center lg:ml-10 sm:ml-0 sm:mt-6 sm:mb-6">
            <h3 className="text-4xl text-gray-800 mb-6 font-light">
              Sleva dne
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-sm">
              Zlatý investiční slitek od švýcarské firmy Argor-Heraeus SA o hmotnosti 1 Oz (31,1g)
              představuje nadstandardní jakost spojenou s elegancí a praktičností.
              Slitky do 100g mají ochranný obal.
            </p>

            <div className="space-y-6">
              <h4 className="text-2xl text-gray-800 font-light">
                Akce končí za:
              </h4>

              <div className="flex gap-6 items-baseline flex-wrap">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600">09</span>
                  <span className="text-sm text-gray-700">hodin</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600">55</span>
                  <span className="text-sm text-gray-700">minut</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600">55</span>
                  <span className="text-sm text-gray-700">sekund</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-[1.5] p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-center gap-12">

            {/* Product Image */}
            <div className="relative group shrink-0">

              {/* Discount Badge */}
              <div className="
    absolute 
    -top-3 -right-6 
    sm:-top-4 sm:-right-6 
    lg:-top-4 lg:-right-1 
    bg-red-600 text-white 
    w-12 h-12 sm:w-14 sm:h-14 
    rounded-full 
    flex items-center justify-center 
    text-xs sm:text-sm 
    font-bold z-20 shadow-lg
  ">
                <span className="text-sm sm:text-base font-sans">-20 %</span>
              </div>

              {/* Image */}
              <div className="relative w-40 h-56 sm:w-44 sm:h-60 md:w-52 md:h-64 lg:w-56 lg:h-72 flex items-center justify-center">
                <img
                  src="/3.png"
                  alt="Argor Heraeus Gold Bar"
                  className="max-w-full max-h-full object-contain"
                />

                {/* Stock Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-[10px] sm:text-xs py-2 text-center font-sans tracking-wider">
                  Poslední 2ks skladem
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex-1 space-y-6 w-full max-w-sm">
              <h3 className="text-3xl text-gray-800 leading-tight font-light">
                31,1g investiční zlatý slitek Argor Heraeus SA
              </h3>

              <div className="space-y-3 max-w-sm">
                {/* Row 1 */}
                <div className="grid grid-cols-[120px_1fr] items-baseline">
                  <span className="text-lg text-[#1A1A1A]">Běžná cena:</span>
                  <span className="text-lg text-[#1A1A1A] font-sans">
                    42 895 Kč
                  </span>
                </div>

                {/* Row 2 - Cena Dnes */}
                <div className="grid grid-cols-[120px_1fr] items-baseline">
                  <span className="text-lg text-[#1A1A1A]">Cena dnes:</span>
                  <span className="text-2xl md:text-3xl text-[#C7B15D] font-medium font-sans leading-none">
                    34 316 Kč
                  </span>
                </div>

                {/* Row 3 - Sleva */}
                <div className="grid grid-cols-[120px_1fr] items-baseline">
                  <span className="text-lg text-[#1A1A1A]">Sleva:</span>
                  <span className="text-xl text-[#FF0000] font-sans">
                    – 8 579 Kč
                  </span>
                </div>
              </div>
              <a href="./details">
                <button className="w-full md:w-auto bg-[rgb(199,177,93)] hover:bg-[#b39e55] text-white py-4 px-12 transition-all duration-300 text-sm font-medium rounded-sm">
                  Zobrazit detail
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;