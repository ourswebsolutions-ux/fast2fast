"use client";
import React, { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

const productsData = [
  { id: 1, title: "Zlatá cihla 250 gramů - argor heraeus Švýcarsko", price: "od 332 546 Kč", badges: ["Novinka", "Tip"], image: "/imgcoins232.svg", rating: 5 },
  { id: 2, title: "Velká Británie, 22 € 2018, Britannia, 1 oz.", price: "od 402 Kč", badges: ["Novinka"], image: "/imgcoin.svg", rating: 0 },
  { id: 3, title: "Investiční zlato - slitek 500 g - Pamp fortuna", price: "665 342 Kč", badges: ["Novinka"], image: "/imgcoin23.svg", rating: 5 },
  { id: 4, title: "American eagle silver", price: "od 867 Kč", badges: ["Tip"], image: "/imgcoin.svg", rating: 5 },
  { id: 5, title: "Zlatá cihla 250 gramů - argor heraeus Švýcarsko", price: "od 332 546 Kč", badges: ["Novinka", "Tip"], image: "/imgcoins232.svg", rating: 5 },
];

const ProductSlider = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: 'start',
      direction: 'ltr' 
    }, 
    [
      Autoplay({ 
        delay: 3000, 
        stopOnInteraction: false,
        playOnInit: true
      })
    ]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const handleQuantity = (id, type) => {
    setQuantities(prev => ({
      ...prev,
      [id]: type === 'inc' ? prev[id] + 1 : Math.max(1, prev[id] - 1)
    }));
  };

  return (
    <div className="bg-white py-16 px-4 font-serif">
      <div className="max-w-[1350px] mx-auto">
        
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2 text-gray-300 text-xs gap-1">
            <span>◆</span><span>◆</span><span>◆</span>
          </div>
          <h2 className="text-4xl text-gray-800 font-light">Vybrali jsme pro Vás</h2>
        </div>

        <div className="relative group">
          <button 
            onClick={scrollPrev} 
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#C5B367] p-2 text-white hover:bg-[#b5a256] transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={scrollNext} 
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#C5B367] p-2 text-white hover:bg-[#b5a256] transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {productsData.map((product ) => (
                <div 
                  key={product.id} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 px-3"
                  onClick={() => setSelectedId(product.id)}
                >
                  <div className={`bg-white p-6 border h-full flex flex-col cursor-pointer transition-all duration-300 ${
                    selectedId === product.id 
                      ? 'border-[#C5B367] ring-1 ring-[#C5B367] shadow-lg' 
                      : 'border-gray-100 hover:border-gray-300'
                  }`}>
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-1">
                        {product.badges.map(badge => (
                          <span key={badge} className="text-[10px] bg-gray-50 border border-gray-200 px-2 py-0.5 text-gray-500 font-sans uppercase tracking-tighter">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <Heart size={18} className="text-amber-600 hover:fill-amber-600 transition-colors" />
                    </div>

                    <div className="h-48 flex items-center justify-center mb-6 px-4">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full max-w-full object-contain pointer-events-none hover:scale-105 transition-transform duration-500" 
                      />
                    </div>

                    <div className="flex justify-center gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < product.rating ? "fill-amber-500 text-amber-500" : "text-gray-200"} />
                      ))}
                    </div>

                    <div className="text-center flex-grow mb-6">
                      <h3 className="text-[13px] text-gray-600  underline decoration-gray-200 underline-offset-4 mb-3 leading-relaxed min-h-[40px] line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-xl text-[#C5A059] font-medium">{product.price}</p>
                    </div>

                    <div className="flex items-stretch gap-2 h-11 font-sans mt-auto" onClick={(e) => e.stopPropagation()}>
                      <div className="flex border border-gray-200 rounded-sm overflow-hidden">
                        <button 
                          onClick={() => handleQuantity(product.id, 'dec')}
                          className="px-3 text-red-500 text-xl hover:bg-gray-50 transition-colors"
                        >
                          −
                        </button>
                        <input 
                          type="text" 
                          value={quantities[product.id]} 
                          readOnly
                          className="w-10 text-center text-sm outline-none border-x border-gray-100" 
                        />
                        <button 
                          onClick={() => handleQuantity(product.id, 'inc')}
                          className="px-3 text-green-600 text-xl hover:bg-gray-50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button className="flex-grow bg-[#00A651] hover:bg-[#008d44] text-white text-[11px] font-bold uppercase tracking-wider transition-all active:scale-95">
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