"use client";
import React from "react";

const DealOfTheDay = () => {
  return (
    <div className="py-18  px-4 font-serif">
      {/* 1350px Fixed Container */}
      <div className="max-w-[1412px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-4">
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
        <div className="bg-[#f9f9f border border-gray-200 shadow-sm flex flex-col lg:flex-row items-stretch min-h-[450px]">

          {/* Left Column */}
          <div className="flex p-4 md:p-6 md:pr-16  lg:border-r border-gray-200 flex flex-col justify-center lg:ml-8  sm:ml-0 sm:mt-6 sm:mb-6">
            <h3 className="text-4xl text-gray-800 mb-3 font-['Libre_Caslon_Text']">
              Sleva dne
            </h3>

            {/* Description Text */}
           <p className="max-w-[430px]  font-sans text-black-800 text-[13px] sm:text-[14px] lg:text-[16px]  leading-relaxed mb-8 sm:mb-7">
              Zlatý investiční slitek od švýcarské firmy <br className="hidden lg:inline" />
              Argor-Heraeus SA o hmotnosti 1 Oz (31,1g) <br className="hidden lg:inline" />
              představuje nadstandardní jakost spojenou s elegancí <br className="hidden lg:inline" />
              a praktičností. Slitky do 100g mají ochranný obal.
            </p>

            <div className="space-y-3">
              <h4 className="text-2xl md:text-[38px] text-gray-800 font-light">
                Akce končí za:
              </h4>

              <div className="flex md:gap-11 gap-3 items-baseline flex-wrap font-['Libre_Caslon_Text']">
                <div className="flex items-baseline md:gap-2 gap-1">
                  <span className="md:text-4xl text-2xl text-red-600">09</span>
                  <span className="text-sm text-black font-sans">hodin</span>
                </div>

                <div className="flex items-baseline md:gap-2 gap-1">
                  <span className="md:text-4xl text-2xl text-red-600">55</span>
                  <span className="text-sm text-black font-sans">minut</span>
                </div>

                <div className="flex items-baseline md:gap-2 gap-1">
                  <span className="md:text-4xl text-2xl text-red-600">55</span>
                  <span className="text-sm text-black font-sans">sekund</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-[1.5] p-8 md:p-12 lg:p-16 md:ml-5 flex flex-col md:flex-row items-center justify-cente  gap-9">

            {/* Product Image */}
            <div className="relative group shrink-0">

              {/* Discount Badge */}
              <div className="
    absolute 
    -top-3 -right-6 
    sm:-top-4 sm:-right-8 
    lg:-top-4 lg:-right- 
    bg-red-600 text-white 
    w-12 h-12 lg:w-20 lg:h-20 sm:w-14 sm:h-14 
    rounded-full 
    flex items-center justify-center 
    text-xs sm:text-sm 
    font-bold z-20 shadow-lg
  ">
                <span className="text-sm sm:text-base font-sans ">-20 %</span>
              </div>

              {/* Image */}
              <div className="relative w-40 h-56 sm:w-44 sm:h-60 md:w-52 md:h-64 lg:w-56 lg:h-72 flex items-center justify-center">
                <img
                  src="/3.png"
                  alt="Argor Heraeus Gold Bar"
                  className="max-w-full max-h-full object-contain"
                />

                {/* Stock Label */}
                <div className="absolute -bottom-1 pl-6 pr-6 bg-black text-white text-[10px] sm:text-xs py-2.5 text-cen font-sans tracking-wider">
                  Poslední 2ks skladem
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex-1  space-y-6 w-full max-w-full">
              <div className="font-['Libre_Caslon_Text'] serif font-bold md:text-4xl text-xl ml-1  text-gray-800 leading-tight font-light">
                31,1g investiční zlatý slitek Argor Heraeus SA
              </div>

              <div className="space-y-2 font-['Libre_Caslon_Text'] ">

                <span className="text-lg text-gray-800 block">
                  Běžná cena:
                  <span className="text-sm lg:text-xl md:text-xl text-black  md:ml-5 ml-2">
                    42 895 Kč
                  </span>
                </span>

                <span className="text-lg md:ml-2 ml-2 text-gray-800 block">
                  Cena dnes:
                  <span className="text-meduim  text-[rgb(199,177,93)] lg:text-3xl md:text-lg  md:ml-6 ml-2">
                    34 316 Kč
                  </span>
                </span>

                <span className="text-lg text-gray-800 md:ml-12 ml-13 block">
                  Sleva:
                  <span className="text-sm  text-[#FF0000] lg:text-xl  md:text-lg  md:ml-5 ml-2">
                    – 8 579 Kč
                  </span>
                </span>


              </div>
              <a href="./details">
                <button className="font-['Libre_Caslon_Text'] w-full md:w-auto bg-[rgb(199,177,93)] hover:bg-[#b39e55] text-white lg:ml-29 lg:md-24  py-4 md:px-12 transition-all duration-300 text-sm font-medium ">
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