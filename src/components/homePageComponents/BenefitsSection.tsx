import React from 'react';
import { Package, Star, PhoneCall, Clock } from 'lucide-react';

const BenefitsSection = () => {

const features = [
  { icon: <img src="/3d.svg" className="w-7 h-7" />, title: "Doprava zdarma", sub: "nad 5 000 Kč" },
  { icon: <img src="/star.svg" className="w-7 h-7" />, title: "Nejlepší výkupní", sub: "ceny" },
  { icon: <img src="/phone.svg" className="w-7 h-7" />, title: "Jsme tu pro vás,", sub: "rádi poradíme" },
  { icon: <img src="/arrow.svg" className="w-7 h-7 text-yellow-500" />, title: "Odeslání zboží", sub: "do 24h" },
];

  return (
    <section className="relative w-full">

      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="flex-1 bg-gray-100" />
        <div className="flex-1 bg-white" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-4 pt-12 md:pt-16 pb-32 md:pb-46 flex flex-col items-center">

        {/* Title */}
        <div className="flex flex-col items-center mb-16 md:mb-24">

          <div className="flex items-center gap-1.5 mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
            <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
            <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1A1A1A] font-light text-center">
            V čem jsme dobří
          </h2>
        </div>

        {/* Diamonds */}
        <div className="
          flex flex-wrap justify-center
          gap-10 sm:gap-14 md:gap-24 lg:gap-32
          w-full
          translate-y-[30%] md:translate-y-[50%]
          -mt-[60px] sm:-mt-[70px] md:-mt-[112px]
        ">
          {features.map((feature, i) => (
            <div
              key={i}
              className="
                relative
                w-32 h-36
                sm:w-36 sm:h-40
                md:w-56 md:h-56
                flex items-center justify-center
              "
            >

              {/* Diamond */}
              <div className="absolute inset-0 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.04)] rotate-45 border border-gray-50" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center px-3 sm:px-4">

                <div className="mb-2 sm:mb-3 text-[#C5A059]">
                  {feature.icon}
                </div>

                <h3 className="text-[13px] sm:text-[14px] md:text-[15px] text-[#1A1A1A] font-medium leading-snug">
                  {feature.title}
                </h3>

                <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#777777]">
                  {feature.sub}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom spacing */}
      <div className="h-24 sm:h-28 md:h-40"></div>

    </section>
  );
};

export default BenefitsSection;