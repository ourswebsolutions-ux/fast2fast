import React from 'react';

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
    <section className="bg-white w-full overflow-hidden pb-20 md:pb-29">
      <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-4">
        
        {/* HEADER */}
        <div className="flex flex-col items-center mb-10 md:mb-14">
          <div className="flex gap-1.5 mb-4 md:mb-5">
            <span className="w-1.5 h-1.5 bg-zinc-200 rotate-45" />
            <span className="w-2 h-2 bg-zinc-200 rotate-45" />
            <span className="w-1.5 h-1.5 bg-zinc-200 rotate-45" />
          </div>

          <h2 className="text-[22px] sm:text-[28px] md:text-[42px] font-serif text-[#1a1a1a] mb-6 md:mb-8 text-center tracking-tight leading-tight">
            Hodnocení od zákazníků
          </h2>

          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgb(199,177,93)] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-base sm:text-lg md:text-xl">
              5,0
            </span>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="relative border border-zinc-100 px-5 sm:px-6 py-8 md:py-10 flex flex-col items-center text-center bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-500 group"
            >
              {/* STARS */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-white px-3 flex gap-0.5 z-10">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    className="fill-[#C5B367] group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* TEXT */}
              <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed text-[#1a1a1a] font-bold mb-6 md:mb-8 italic px-1">
                "{item.text}"
              </p>

              {/* AUTHOR */}
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-zinc-400 mt-auto group-hover:text-[#C9B067] transition-colors">
                {item.author}
              </span>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10 md:mt-14">
          <button className="bg-[rgb(199,177,93)] hover:bg-[#b39e55] text-white px-5 sm:px-6 py-3 sm:py-4 text-[10px] font-bold uppercase tracking-[2px] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto max-w-[260px]">
            Další 23 hodnocení
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;