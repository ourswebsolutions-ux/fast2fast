import React from 'react';
import { ChevronRight } from 'lucide-react';

const PreciousMetalsGrid = () => {
  const categories = [
    {
      title: "Investiční zlato",
      price: "1249,9 USD/oz",
      symbol: "Au",
      trend: "down",
      links: ["Zlaté mince", "Zlaté slitky a cihly", "Zlaté novoražby", "Zlaté medaile"],
      image: "/zlata_cihlicka.svg", // Replace with your asset path
      borderColor: "border-transparent"
    },
    {
      title: "Investiční stříbro",
      price: "16,39 USD/oz",
      symbol: "Ag",
      trend: "up",
      links: ["Stříbrné mince", "Stříbrné slitky a cihly", "Stříbrné novoražby", "Stříbrné medaile"],
      image: "/zlata_cihlicka .svg",
      borderColor: "border-transparent"
    },
    {
      title: "Pro sběratele",
      links: ["Mince České národní banky", "Světové mince a euromince", "Historické mince a bankovky", "Zajímavosti", "Tipy na dárky"],
      image: "/coin.png",
      borderColor: "border-amber-600/50", // Highlighted border from the screenshot
      isHighlighted: true
    },
    {
      title: "Příslušenství",
      links: ["Sběratelské potřeby", "Péče o mince a cihly", "Trezory a zabezpečení", "Spektrometry a detektory", "Literatura a tisk"],
      image: "/zlata_cihlicka (4).svg",
      borderColor: "border-transparent"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-4 font-serif">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-2">
            <span className="text-gray-300 text-xs">◆ ◆ ◆</span>
          </div>
          <h2 className="text-3xl text-gray-800">Hlavní kategorie</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`relative bg-black p-8 min-h-[320px] flex border-2 ${cat.borderColor} transition-all hover:brightness-110`}
            >
              {/* Text Content */}
              <div className="flex-1 z-10">
                <div className="flex items-baseline gap-4 mb-6">
                  <h3 className="text-2xl text-amber-200/80 font-light">{cat.title}</h3>
                  {cat.price && (
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-amber-500 underline uppercase">{cat.symbol}</span>
                      <span className="text-white">{cat.price}</span>
                      <span className={cat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                        {cat.trend === 'up' ? '↑' : '↓'}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3">
                  {cat.links.map((link, lIdx) => (
                    <li key={lIdx} className="flex items-start group cursor-pointer">
                      <ChevronRight className="w-3 h-3 text-amber-500 mt-1 mr-2 opacity-80" />
                      <span className="text-white text-sm border-b border-transparent group-hover:border-white transition-all">
                        {link}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Image */}
              <div className="absolute right-4 bottom-4 w-1/3 h-4/5 flex items-center justify-center">
                <div className="relative w-full h-full">
                   {/* Reflection effect placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="object-contain w-full h-full drop-shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreciousMetalsGrid;