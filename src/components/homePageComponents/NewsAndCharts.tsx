"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';

const PriceChart = dynamic(() => import('./HomeChart'), {
  ssr: false,
});

const NewsAndCharts = () => {
  const [activeTab, setActiveTab] = useState('plan');
  const [metalToggle, setMetalToggle] = useState('zlato');

  const tabs = [
    { id: 'plan', label: 'Emisní plán ČNB' },
    { id: 'news', label: 'Aktuální zprávy' },
    { id: 'chart', label: 'Vývoj cen drahých kovů' },
  ];

  const newsData = [
    {
      id: 1,
      img: "/dollar.png",
      date: "12. 1. 2023",
      title: "Zlato vykročilo do nového roku růstem a obnovené nákupy zlata...",
      desc: "Cena zlata se hned z kraje nového roku posunula na 7měsíční maximum. Cena stříbra se vyšplhala také na nejvyšší cenu od loňského dubna, poté ale..."
    },
    {
      id: 2,
      img: "/2023.png",
      date: "11. 1. 2023",
      title: "Cena zlata v českých korunách vzrostla v roce 2022 o 2,6 %",
      desc: "Zlato zakončilo rok 2022 růstem. Jeho cena v USD se vyšplhala předposlední den loňského roku na 6měsíční maximum."
    },
    {
      id: 3,
      img: "/white-house.png",
      date: "10. 1. 2023",
      title: "Inflace a globální nejistota vyvolala zlatou horečku v Rakouské...",
      desc: "Rakouská mincovna, jedna z nejstarších a největších světových mincoven, není schopna držet krok s poptávkou, jelikož lidé hledají bezpečné útočiště pro své..."
    },
    {
      id: 4,
      img: "/graph.png",
      date: "9. 1. 2023",
      title: "Zlato drží býčí směr i po zasedání FEDu",
      desc: "Po několika růstových týdnech si daly ceny vzácných kovů oddech – zlato zamířilo v minulém týdnu o 0,3 % níže, cena stříbra klesla o 1 %. Také cena..."
    }
  ];

  return (
    <div className="bg-white py-12 px-4 font-serif">
      {/* Container aligned to 1350px */}
      <div className="max-w-[1412px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-1.5 mb-4 md:mb-6">
            <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
            <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
            <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
          </div>
          <h2 className="text-4xl text-gray-800 font-light mb-8 font-['Libre_Caslon_Text']">Sledujte aktuální dění</h2>

          {/* Main Tabs Navigation */}
          <div className="flex flex-col md:flex-row gap-4 w-full mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 text-sm tracking-wider transition-all duration-300 border border-[#C7B15D] font-serif ${activeTab === tab.id
                    ? "bg-[#C7B15D] text-white"
                    : "bg-white text-gray-600 hover:bg-[#C7B15D] hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="min-h-[500px]">

          {/* TAB 1: EMISSION PLAN TABLE */}
          {activeTab === 'plan' && (
            <div className="overflow-x-auto border border-gray-100 shadow-sm">
              <table className="w-full text-left border-collapse ">
                <thead>
                  <tr className="bg-black text-white text-xs ">
                    {['Rok', 'Nominál', 'Název', 'Provedení', 'Materiál', 'Cena', 'Emisní den', 'Dostupnost', 'Objednat / rezervovat'].map((head) => (
                      <th key={head} className="p-4 font-normal border-r border-gray-800 last:border-0">
                        <div className="flex items-center justify-between">
                          {head} {head !== 'Objednat / rezervovat' && <ChevronDown className="ml-2 text-white/600 w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { nominal: "200 Kč", name: "name_111", quality: "Špičková kvalita - Proof", material: "Zlato" },
                    { nominal: "1 Kč", name: "name_111", quality: "Standard kvalita - b. k.", material: "Zlato" },
                    { nominal: "10 000 Kč", name: "name_111", quality: "Špičková kvalita - Proof", material: "Stříbro" },
                    { nominal: "200 Kč", name: "name_111", quality: "Špičková kvalita - Proof", material: "Stříbro" },
                    { nominal: "1 000 Kč", name: "name_111", quality: "Standard kvalita - b. k.", material: "Zlato" },
                    { nominal: "200 Kč", name: "name_111", quality: "Standard kvalita - b. k.", material: "Zlato" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 border-r border-gray-100 font-sans">2016</td>
                      <td className="p-4 border-r border-gray-100 font-sans">{row.nominal}</td>
                      <td className="p-4 border-r border-gray-100  decoration-gray-300">{row.name}</td>
                      <td className="p-4 border-r border-gray-100">{row.quality}</td>
                      <td className="p-4 border-r border-gray-100">{row.material}</td>
                      <td className="p-4 border-r border-gray-100 font-sans">299.99 Kč</td>
                      <td className="p-4 border-r border-gray-100 text-gray-500 font-sans">08/01/2016</td>
                      <td className="p-4 border-r border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${i === 4 ? 'bg-orange-400' : i === 5 ? 'bg-red-500' : 'bg-green-500'}`}></span>
                          {i === 4 ? 'Objednáno' : i === 5 ? 'Vyprodáno' : 'Skladem'}
                        </div>
                      </td>
                      <td className="p-4 bg-gray-100 text-center">
                        <div className="flex justify-center items-center h-full">
                          <button className="w-[120px] bg-[rgb(199,177,93)] text-white text-xs py-2 hover:bg-[#b5a256] transition-colors">
                            {i === 1 || i === 3 ? 'Objednat' : 'Koupit'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 2: NEWS GRID */}
          {activeTab === 'news' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1350px] mx-auto">
              {newsData.map((item) => (
                <div key={item.id} className="bg-white p-4 border border-gray-100 shadow-sm group cursor-pointer flex flex-col items-center text-center">

                  {/* Image Area */}
                  <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-gray-50 border border-gray-50">
                    <img
                      src={item.img}
                      alt="news"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Date */}
                  <p className="text-[11px] text-gray-400 font-sans mb-3">{item.date}</p>

                  {/* Title */}
                  <h4 className="text-[15px] text-[#C5B367] underline underline-offset-4 decoration-[#e5d9a5] leading-snug mb-4 font-light min-h-[40px]">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-4 font-light">
                    {item.desc}
                  </p>

                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PRICE CHARTS */}
          {activeTab === 'chart' && (
            <PriceChart />
          )}

          {/* Load More Button */}
          {(activeTab === 'plan' || activeTab === 'news') && (
            <div className="mt-12 text-center">
              <button className="bg-[rgb(199,177,93)] text-white py-3 px-10 text-sm hover:bg-[#b5a256] transition-colors">
                Zobrazit další
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAndCharts;
