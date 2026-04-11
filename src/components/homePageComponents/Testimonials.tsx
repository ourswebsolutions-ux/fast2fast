import React from 'react';
import GridLayout from '@/components/layouts/GridLayout';

const Testimonials = () => {
  const reviews = [
    {
      text: "Co jsem viděla a přečetla, to jsem dostala. Jsem spokojená :-)",
      author: "Jiřina A. R. Božková"
    },
    {
      text: "Rychlé dodání, kvalitní zboží.",
      author: "Anna"
    },
    {
      text: "Spokojenost",
      author: "Monika Kudrnáčová"
    },
    {
      text: "Spokojenost",
      author: "Monika Kudrnáčová"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full overflow-hidden">
      {/* 1350px width container with minimal side padding for maximum spread */}
      <div className="w-full max-w-[1350px] mx-auto px-2 md:px-4">
        
        <GridLayout>
          {/* Header Section */}
          <div className="col-span-12 flex flex-col items-center mb-12 md:mb-16">
            <div className="flex gap-1.5 mb-5">
              <span className="w-1.5 h-1.5 bg-zinc-200 rotate-45" />
              <span className="w-2 h-2 bg-zinc-300 rotate-45" />
              <span className="w-1.5 h-1.5 bg-zinc-200 rotate-45" />
            </div>
            
            <h2 className="text-[28px] md:text-[38px] font-serif text-[#1a1a1a] mb-6 text-center tracking-tight">
              Hodnocení od zákazníků
            </h2>

            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C9B067] flex items-center justify-center shadow-md border-4 border-white">
              <span className="text-white font-bold text-lg md:text-xl">5,0</span>
            </div>
          </div>

          {/* Cards Grid - Minimal gaps for ultra-wide cards */}
          <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-2.5">
            {reviews.map((item, index) => (
              <div 
                key={index} 
                className="relative border border-zinc-100 px-2 width-[400px] md:px-3 py-8 flex flex-col items-center text-center bg-white shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300"
              >
                {/* Stars on Border */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 flex gap-0.5 z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FACC15">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Bold Review Text - Maximized horizontal stretch */}
                <p className="text-[13px] md:text-[14.5px] leading-relaxed text-[#1a1a1a] font-bold mb-6 w-full italic px-1">
                  "{item.text}"
                </p>

                {/* Author Name */}
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mt-auto">
                  {item.author}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="col-span-12 flex justify-center mt-12 md:mt-16">
            <button className="bg-[#C9B067] hover:bg-[#b39a56] text-white px-10 py-4 text-[12px] font-bold uppercase tracking-[0.2em] transition-all rounded-sm">
              Další 23 hodnocení
            </button>
          </div>
        </GridLayout>
      </div>
    </section>
  );
};

export default Testimonials;