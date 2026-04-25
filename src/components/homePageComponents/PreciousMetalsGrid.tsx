"use client";
import React from "react";
import { ChevronRight, ArrowDown, ArrowUp } from "lucide-react";

const PreciousMetalsGrid = () => {
  const categories = [
    {
      title: "Investiční zlato",
      price: "1249,9 USD/oz",
      symbol: "Au",
      trend: "down",
      links: ["Zlaté mince", "Zlaté slitky a cihly", "Zlaté novoražby", "Zlaté medaile"],
      image: "/zlata_cihlicka.svg",
      borderColor: "border-gray-800",
    },
    {
      title: "Investiční stříbro",
      price: "16,39 USD/oz",
      symbol: "Ag",
      trend: "up",
      links: ["Stříbrné mince", "Stříbrné slitky a cihly", "Stříbrné novoražby", "Stříbrné medaile"],
      image: "/zlata_cihlicka .svg",
      borderColor: "border-gray-800",
    },
    {
      title: "Pro sběratele",
      links: [
        "Mince České národní banky",
        "Světové mince a euromince",
        "Historické mince a bankovky",
        "Zajímavosti",
        "Tipy na dárky",
      ],
      image: "/coin.png",
      borderColor: "border-[#C5B367]/40",
      isHighlighted: true,
    },
    {
      title: "Příslušenství",
      links: [
        "Sběratelské potřeby",
        "Péče o mince a cihly",
        "Trezory a zabezpečení",
        "Spektrometry a detektory",
        "Literatura a tisk",
      ],
      image: "/zlata_cihlicka (4).svg",
      borderColor: "border-gray-800",
    },
  ];

  return (
    <div className="bg-white py-1 px-4 font-serif">
      <div className="max-w-[1412px] mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-15">
          <div className="flex justify-center mb-2">
            <div className="flex items-center gap-1.5 mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
              <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
              <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-800 font-light font-['Libre_Caslon_Text'] tracking-wide">
            Hlavní kategorie
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`relative bg-[#0A0A0A] w-full md:w-[calc(100%-5px)] p-6 md:p-[73px] min-h-[350px] md:min-h-[400px] flex flex-col md:flex-row items-stretch border-3 overflow-hidden group transition-all duration-500 ${cat.borderColor} hover:border-[rgb(199,177,93)]`}
            >
              {/* LEFT */}
              <div className="flex-1 z-20 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-['Libre_Caslon_Text'] text-[#C5B367] font-light mb-6 md:mb-8 tracking-widest">
                    {cat.title}
                  </h3>

                  <ul className="space-y-4 md:space-y-6">
                    {cat.links.map((link, lIdx) => (
                      <li key={lIdx} className="font-sans flex items-center group/link cursor-pointer">
                        <ChevronRight
                          className="w-4 h-4 text-white mr-3 transition-transform group-hover/link:translate-x-1"
                          strokeWidth={3}
                        />
                        <span className="text-white/90 text-sm md:text-[15px] tracking-wider underline underline-offset-4 decoration-white transition-all duration-300 group-hover/link:decoration-[#C5B367] group-hover/link:text-[#C5B367]">
                          {link}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex-1 z-20 flex flex-col items-center mt-6 md:mt-0">

                {/* Price */}
                {cat.price ? (
                  <div className="flex items-center gap-3 text-sm md:text-[15px] font-sans mb-3 md:ml-15 md:mt-1">
                    <span className="text-[rgb(199,177,93)] underline pb-0.5 tracking-tighter">
                      {cat.symbol}
                    </span>
                    <span className="text-white font-medium">{cat.price}</span>
                    <span className={cat.trend === "up" ? "text-green-500" : "text-red-500"}>
                      {cat.trend === "up" ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    </span>
                  </div>
                ) : (
                  <div className="h-[20px]" />
                )}

                {/* Image */}
                <div className="relative flex-1 w-full flex items-center justify-center md:mt-4 md:ml-9">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="object-contain max-h-[180px] md:max-h-[220px] w-auto transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 drop-shadow-[0_20px_50px_rgba(197,179,103,0.15)]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-transparent to-[#0A0A0A] pointer-events-none" />
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[rgb(199,177,93)]/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreciousMetalsGrid;