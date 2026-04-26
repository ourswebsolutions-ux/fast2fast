"use client";
import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // Autoplay import
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

const productsData = [
  { id: 1, title: "Zlatá cihla 250 gramů - argor heraeus Švýcarsko", price: "od 332 546 Kč", badges: ["Novinka", "Tip"], image: "/imgcoins232.svg", rating: 5 },
  { id: 2, title: "Velká Británie, 22 € 2018, Britannia, 1 oz.", price: "od 402 Kč", badges: ["Novinka"], image: "/imgcoin.svg", rating: 0 },
  { id: 3, title: "Investiční zlato - slitek 500 g - Pamp fortuna", price: "od 665 342 Kč", badges: ["Novinka"], image: "/imgcoin23.svg", rating: 5 },
  { id: 4, title: "American eagle silver", price: "od 867 Kč", badges: ["Tip"], image: "/imgcoin432.svg", rating: 5 },
];

const SimilarProductsSlider = () => {
  // Autoplay plugin configuration
  // delay: 4000 (4 seconds), stopOnInteraction: false (touch karne par band nahi hoga)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' }, 
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-20 px-4 font-serif bg-white">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Diamond Icons */}
        <div className="flex justify-center items-center gap-1.5 mb-6">
          <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
          <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
          <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-[34px] text-[#333333] font-light tracking-wide">Podobné produkty</h2>
        </div>

        <div className="relative group px-5 sm:px-4 md:px-5 lg:px-3">
          
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute -left-1 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-12 sm:w-10 sm:h-12 lg:w-10 lg:h-18 bg-[rgb(199,177,93)] flex items-center justify-center text-white hover:bg-[#b5a256] transition-all"
            style={{ clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 50%)' }}
          >
            <ChevronLeft size={18} className="sm:size-5 lg:size-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-1 sm:-right-5 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-12 sm:w-12 sm:h-10 lg:w-10 lg:h-18 bg-[rgb(199,177,93)] flex items-center justify-center text-white hover:bg-[#b5a256] transition-all"
            style={{ clipPath: 'polygon(0% 0%, 65% 0%, 100% 50%, 65% 100%, 0% 100%)' }}
          >
            <ChevronRight size={18} className="sm:size-5 lg:size-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {productsData.map((product) => (
                <div key={product.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-2">
                  <div className="bg-white p-6 border border-gray-100 h-full flex flex-col relative transition-all duration-300 hover:border-2 hover:border-[rgb(199,177,93)] hover:shadow-lg group/card">
                    
                    {/* Badge Container */}
                    <div className="flex flex-col gap-1.5 h-14">
                      {product.badges.map((badge) => {
                        const isNew = badge === "Novinka";
                        return isNew ? (
                          <div
                            key={badge}
                            className="inline-block w-fit p-[1px] bg-gray-300"
                            style={{
                              WebkitMask: `
                                radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0,
                                radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0,
                                radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%,
                                radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%
                              `,
                              WebkitMaskSize: "51% 51%",
                              WebkitMaskRepeat: "no-repeat",
                            }}
                          >
                            <span
                              className="block bg-white text-[11px] px-3 py-1 font-semibold text-gray-700"
                              style={{
                                WebkitMask: `
                                  radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0,
                                  radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0,
                                  radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%,
                                  radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%
                                `,
                                WebkitMaskSize: "51% 51%",
                                WebkitMaskRepeat: "no-repeat",
                              }}
                            >
                              {badge}
                            </span>
                          </div>
                        ) : (
                          <span
                            key={badge}
                            className="w-fit text-[10px] bg-gray-50 border border-gray-200 px-3 py-0.5 text-gray-400 font-sans rounded-full"
                          >
                            {badge}
                          </span>
                        );
                      })}
                    </div>

                    {/* Product Image & Favorite */}
                    <div className="h-44 flex flex-col items-center justify-center relative mb-6">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover/card:scale-105" 
                      />
                      <Heart
                        size={20}
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
                        className={`absolute bottom-0 right-0 md:-mb-14 cursor-pointer transition-all duration-300 ${favorites[product.id] ? "fill-[rgb(199,177,93)] text-[rgb(199,177,93)] scale-110" : "text-gray-200 hover:text-[rgb(199,177,93)]"}`}
                      />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center gap-0.5 md:mb-2 md:mt-12 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < product.rating ? "fill-[#FACC15] text-[#FACC15]" : "text-gray-100"} />
                      ))}
                    </div>

                    {/* Product Info */}
                    <div className="text-center mt-auto w-full overflow-hidden">
                      <h3 className="text-[11.2px] text-[#555555] underline underline-offset-4 decoration-gray-200 mb-3 block whitespace-nowrap overflow-visible w-full px-1">
                        {product.title}
                      </h3>
                      <p className="text-[20px] text-[rgb(199,177,93)] font-medium font-sans tracking-tight">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductsSlider;