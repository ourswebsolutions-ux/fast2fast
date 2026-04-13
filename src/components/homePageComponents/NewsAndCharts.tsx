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
      title: "Zlato vykročilo do nového roku růstem a obnovené nákupy...",
      desc: "Cena zlata se hned z kraje nového roku posunula na 7měsíční maximum. Cena stříbra se vyšplhala také na nejvyšší cenu..."
    },
    {
      id: 2,
      img: "/2023.png",
      date: "12. 1. 2023",
      title: "Zlato vykročilo do nového roku růstem a obnovené nákupy...",
      desc: "Cena zlata se hned z kraje nového roku posunula na 7měsíční maximum. Cena stříbra se vyšplhala také na nejvyšší cenu..."
    },
    {
      id: 3,
      img: "/white-house.png",
      date: "12. 1. 2023",
      title: "Zlato vykročilo do nového roku růstem a obnovené nákupy...",
      desc: "Cena zlata se hned z kraje nového roku posunula na 7měsíční maximum. Cena stříbra se vyšplhala také na nejvyšší cenu..."
    },
    {
      id: 4,
      img: "/graph.png",
      date: "12. 1. 2023",
      title: "Zlato vykročilo do nového roku růstem a obnovené nákupy...",
      desc: "Cena zlata se hned z kraje nového roku posunula na 7měsíční maximum. Cena stříbra se vyšplhala také na nejvyšší cenu..."
    }
  ];

  return (
    <div className="bg-white py-16 px-4 font-serif">
      {/* Container aligned to 1350px */}
      <div className="max-w-[1350px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-2 text-gray-300 text-xs">◆ ◆ ◆</div>
          <h2 className="text-4xl text-gray-800 font-light mb-8">Sledujte aktuální dění</h2>
          
          {/* Main Tabs Navigation */}
          <div className="flex flex-col md:flex-row gap-10 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 max-w-xl py-3 px-6 text-sm uppercase tracking-wider border transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#C5B367] text-white border-[#C5B367]' 
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
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
                  <tr className="bg-black text-white text-xs uppercase">
                    {['Rok', 'Nominál', 'Název', 'Provedení', 'Materiál', 'Cena', 'Emisní den', 'Dostupnost', 'Objednat / rezervovat'].map((head) => (
                      <th key={head} className="p-4 font-normal border-r border-gray-800 last:border-0">
                        <div className="flex items-center justify-between">
                          {head} {head !== 'Objednat / rezervovat' && <ChevronDown size={14} className="ml-2 opacity-50" />}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[...Array(6)].map((_, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-4 border-r border-gray-100">2016</td>
                      <td className="p-4 border-r border-gray-100">200 Kč</td>
                      <td className="p-4 border-r border-gray-100 underline decoration-gray-300">name_111</td>
                      <td className="p-4 border-r border-gray-100">Špičková kvalita - Proof</td>
                      <td className="p-4 border-r border-gray-100">Zlato</td>
                      <td className="p-4 border-r border-gray-100">299.99 Kč</td>
                      <td className="p-4 border-r border-gray-100 text-gray-500 font-sans">08/01/2016</td>
                      <td className="p-4 border-r border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${i === 4 ? 'bg-orange-400' : i === 5 ? 'bg-red-500' : 'bg-green-500'}`}></span>
                          {i === 4 ? 'Objednáno' : i === 5 ? 'Vyprodáno' : 'Skladem'}
                        </div>
                      </td>
                      <td className="p-4 bg-gray-100 text-center">
                        <button className="bg-[#C5B367] text-white text-xs py-2 px-6 hover:bg-[#b5a256]">
                          {i % 2 === 0 ? 'Koupit' : 'Objednat'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 2: NEWS GRID */}
          {activeTab === 'news' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {newsData.map((item) => (
                <div key={item.id} className="bg-white p-4 border border-gray-100 shadow-sm group cursor-pointer">
                  <div className="aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                    <img
                      src={item.img}
                      alt="news"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-[10px] text-gray-400 font-sans mb-2">{item.date}</p>
                  <h4 className="text-sm text-[#C5B367] underline leading-tight mb-3">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-4">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PRICE CHARTS */}
          {activeTab === 'chart' && (
           <PriceChart/>
          )}

          {/* Load More Button */}
          {(activeTab === 'plan' || activeTab === 'news') && (
            <div className="mt-12 text-center">
              <button className="bg-[#C5B367] text-white py-3 px-10 text-sm hover:bg-[#b5a256] transition-colors">
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
