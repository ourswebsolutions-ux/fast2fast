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
    <section className="py-10  bg-white w-full overflow-hidden">
      <div className="w-full max-w-[1350px] mx-auto px-3 md:px-6">

        <GridLayout>

          {/* HEADER */}
          <div className="col-span-12 flex flex-col items-center m ">

            <div className="flex  ">
              <span className="w-1.5 h-1.5 bg-zinc-200 rotate-45" />
              <span className="w-2 h-2 bg-zinc-300 rotate-45" />
              <span className="w-1.5 h-1.5 bg-zinc-200 rotate-45" />
            </div>

            <h2 className="text-[30px] md:text-[40px] font-serif text-[#1a1a1a] mb-6 text-center tracking-tight">
              Hodnocení od zákazníků
            </h2>

            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C9B067] flex items-center justify-center shadow-md border-4 border-white">
              <span className="text-white font-bold text-lg md:text-xl">
                5,0
              </span>
            </div>
          </div>

          {/* CARDS */}
          <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

            {reviews.map((item, index) => (
              <div
                key={index}
                className="relative border border-zinc-100 px-4 py-7 flex flex-col items-center text-center bg-white shadow-[0_2px_12px_-3px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300"
              >

                {/* STARS */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 flex gap-0.5 z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FACC15">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-[14px] md:text-[15px] leading-snug justify-center text-[#1a1a1a]  font-bold mb-6 italic px-1">
                  {item.text}
                </p>

                {/* AUTHOR */}
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] justify-center text-zinc-400 mt-auto">
                  {item.author}
                </span>

              </div>
            ))}

          </div>

          {/* BUTTON */}
          <div className="col-span-12 justify-center  flex  h-12  mt-10 md:mt-6">

           <button className="bg-[#C9B067] hover:bg-[#b39a56] text-white px-8 py-3 text-sm rounded-sm shadow-sm">
  Další 23 hodnocení
</button>

          </div>

        </GridLayout>
      </div>
    </section>
  );
};

export default Testimonials;