"use client";
import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

const productsData = [
  { id: 1, title: "Zlatá cihla 250 gramů - argor heraeus Švýcarsko", price: "od 332 546 Kč", badges: ["Novinka", "Tip"], image: "/imgcoins232.svg", rating: 5 },
  { id: 2, title: "Velká Británie, 22 € 2018, Britannia, 1 oz.", price: "od 402 Kč", badges: ["Novinka"], image: "/imgcoin.svg", rating: 0 },
  { id: 3, title: "Investiční zlato - slitek 500 g - Pamp fortuna", price: "665 342 Kč", badges: ["Novinka"], image: "/imgcoin23.svg", rating: 5 },
  { id: 4, title: "American eagle silver", price: "od 867 Kč", badges: ["Tip"], image: "/imgcoin432.svg", rating: 5 },
];

const ProductSlider = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const handleQuantity = (id: number, type: 'inc' | 'dec') => {
    setQuantities(prev => ({
      ...prev,
      [id]: type === 'inc' ? (prev[id] ?? 1) + 1 : Math.max(1, (prev[id] ?? 1) - 1)
    }));
  };

  return (
    <div className="  px-4 font-serif">
      <div className="max-w-[1350px] mx-auto">

        {/* Diamond Icons Top Center */}
        <div className="flex justify-center items-center gap-1.5 mb-4">
          <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
          <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
          <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl text-gray-800 font-light mb-10">Vybrali jsme pro Vás</h2>

          {/* Top Buttons - Full Width (1350px) with Gap */}
          <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
            <button className="flex-1 bg-[rgb(199,177,93)] text-white py-3.5 text-sm tracking-wider hover:bg-[#b5a256] transition-all">Nejnovější výrobky</button>
            <button className="flex-1 bg-white text-gray-600 border border-gray-200 py-3.5 text-sm tracking-wider hover:bg-[#b5a256] hover:text-white transition-all"> Investiční příležitosti</button>            <button className="flex-1 bg-[rgb(199,177,93)] text-white py-3.5 text-sm  tracking-wider hover:bg-[#b5a256] transition-all">Oblíbené dárky</button>
          </div>
        </div>

        <div className="relative group mt-4 px-5 sm:px-4  md:px-5 lg:px-3">
          {/* Navigation Arrows - Adjusted for LG screens */}
          {/* LEFT ARROW */}
          <button
            onClick={scrollPrev}
            className="
    absolute 
    -left-1 sm:-left-3 
    top-1/2 -translate-y-1/2
    z-20
    w-8 h-12 sm:w-10 sm:h-12 lg:w-8 lg:h-12
    bg-[rgb(199,177,93)]
    flex items-center justify-center
    text-white
    hover:bg-[#b5a256]
    transition-all
  "
            style={{
              clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 50%)'
            }}
          >
            <ChevronLeft size={18} className="sm:size-5 lg:size-6" />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollNext}
            className="
    absolute 
    -right-1 sm:-right-5 lg:-right-3
    top-1/2 -translate-y-1/2
    z-20
    w-8 h-12 sm:w-12 sm:h-10 lg:w-8 lg:h-12
    bg-[rgb(199,177,93)]
    flex items-center justify-center
    text-white
    hover:bg-[#b5a256]
    transition-all
  "
            style={{
              clipPath: 'polygon(0% 0%, 65% 0%, 100% 50%, 65% 100%, 0% 100%)'
            }}
          >
            <ChevronRight size={18} className="sm:size-5 lg:size-6" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {productsData.map((product) => (
                <div key={product.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-2">
                  <div
                    className={`bg-white p-6 border h-full flex flex-col relative transition-all duration-300 ${product.id === 2 ? 'border-[#C5B367] ring-[0.5px] ring-[#C5B367]' : 'border-gray-100'
                      } ${selectedId === product.id ? 'shadow-lg' : ''}`}
                    onClick={() => setSelectedId(product.id)}
                  >
                    {/* Badge Container - Fixed height for alignment */}
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
                    {/* Image Wrapper - Center Aligned */}
                    <div className="h-52 flex flex-col items-center justify-center relative mb-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-[180px] object-contain transition-transform hover:scale-105"
                      />
                      <Heart
                        size={20}
                        className={`absolute bottom-0 right-0 cursor-pointer transition-colors ${product.id === 2 || product.id === 3 ? "fill-[#C5B367] text-[#C5B367]" : "text-gray-200 hover:text-[#C5B367]"
                          }`}
                      />
                    </div>

                    {/* Rating Section - Fixed height to prevent shift */}
                    <div className="flex justify-center gap-0.5 mb-4 h-4">
                      {product.rating > 0 && [...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#f8dc61] text-[#C5B367]" />
                      ))}
                    </div>

                    {/* Title & Price */}
                    <div className="text-center mb-6">
                      <h3 className="text-[13px] text-gray-500 underline underline-offset-4 mb-2 line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-xl text-[#C5A059] font-medium tracking-tight  font-sans">{product.price}</p>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-stretch gap-2 h-10 mt-auto" onClick={(e) => e.stopPropagation()}>
                      <div className="flex border border-gray-200 items-center bg-white">
                        <button onClick={() => handleQuantity(product.id, 'dec')} className="px-3 text-red-400 text-xl">−</button>
                        <input type="text" value={quantities[product.id] ?? 1} readOnly className="w-8 text-center text-sm outline-none" />
                        <button onClick={() => handleQuantity(product.id, 'inc')} className="px-3 text-green-500 text-xl">+</button>
                      </div>
                      <button className="flex-grow bg-[#00A651] hover:bg-[#008d44] text-white text-[11px] font-bd  tracking-wider transition-colors">
                        Přidat do košíku
                      </button>
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

export default ProductSlider;