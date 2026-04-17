import React from 'react';

const BenefitsSection = () => {
  const features = [
    { icon: <img src="/3d.svg" className="w-8 h-8" />, title: "Doprava zdarma", sub: "nad 5 000 Kč" },
    { icon: <img src="/star.svg" className="w-8 h-8" />, title: "Nejlepší výkupní", sub: "ceny" },
    { icon: <img src="/phone.svg" className="w-8 h-8" />, title: "Jsme tu pro vás,", sub: "rádi poradíme" },
    { icon: <img src="/arrow.svg" className="w-8 h-8 text-yellow-500" />, title: "Odeslání zboží", sub: "do 24h" },
  ];

  return (
    <section className="relative w-full ">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col pointer-events-none">
        <div className="flex-1 bg-gray-100" />
        <div className="flex-1 bg-white" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-4 pt-12 md:pt-16  flex flex-col items-center">
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

        {/* Diamonds Grid */}
        <div className="
          grid grid-cols-2 md:flex 
          justify-center items-center
          gap-x-12 gap-y-12 md:gap-24 lg:gap-32
          w-full max-w-[400px] md:max-w-none
          translate-y-[25%] md:translate-y-[50%]
          -mt-[50px] md:-mt-[112px]
        ">
          {features.map((feature, i) => (
            <div
              key={i}
              className="
                relative
                w-full aspect-square
                md:w-56 md:h-56
                flex items-center justify-center
                /* Niche walay cards ko upar lane ke liye negative margin */
                [&:nth-child(n+3)]:-mt-6 md:[&:nth-child(n+3)]:mt-0
              "
            >
              {/* Diamond Shape (Siddy diamonds) */}
              <div className="absolute inset-0 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.04)] rotate-45 border border-gray-50" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center px-2">
                <div className="mb-2 md:mb-3 text-[#C5A059]">
                  {feature.icon}
                </div>

                <h3 className="text-[12px] md:text-[20px] text-[#1A1A1A] font-sm font- leading-tight">
                  {feature.title}
                </h3>

                <p className="text-[12px] md:text-[20px] text-[#1A1A1A] font-sm  leading-tight">
                  {feature.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-32 md:h-40"></div>
    </section>
  );
};

export default BenefitsSection;