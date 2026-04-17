"use client";
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const FilterModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  const sidebarItems = [
    "Cena", "Hmotnost", "Motiv", "Stát", "Kvalita", "Mincovna", "Série", "Dostupnost"
  ];

  const weights = [
    { label: "1000 g", count: 6 }, { label: "10 g", count: 6 },
    { label: "500 g", count: 10 }, { label: "5 g", count: 52 },
    { label: "250 g", count: 25 }, { label: "2,5 g", count: 15 },
    { label: "100 g", count: 88 }, { label: "2 g", count: 10 },
    { label: "50 g", count: 5 },  { label: "1 g", count: 34 },
    { label: "31,11 g", count: 126 },
    { label: "31,1 g", count: 13 },
    { label: "25 g", count: 13 },
    { label: "20 g", count: 5 },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background Blur Overlay */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-[850px] shadow-2xl rounded-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-3xl font-serif text-gray-800">Rozšířený filtr</h2>
          <button 
            onClick={onClose}
            className="bg-[#C5B367] p-1 rounded-full text-white hover:bg-[#b5a256] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex h-[450px]">
          {/* Sidebar */}
          <div className="w-1/4 bg-[#F8F8F8] border-r border-gray-200">
            {sidebarItems.map((item, index) => (
              <div 
                key={item}
                className={`p-4 text-sm font-medium border-b border-gray-200 cursor-pointer transition-colors
                  ${item === "Hmotnost" ? " bg-white text-black border-r-4 border-r-[#C5B367]" : "text-gray-600 hover:bg-white"}`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main Content (Checkboxes) */}
          <div className="w-3/4 p-6 overflow-y-auto">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 hover-border-gray-300">
              {weights.map((item, idx) => (
                <label 
                  key={idx} 
                  className="flex items-center gap-3 p-3 bg-white border border-gray-100 hover-border-200 cursor-pointer transition-all group"
                >
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 accent-[#00A651] cursor-pointer" 
                  />
                  <div className="flex items-center gap-1 text-sm">
                    <span className="font-bold text-gray-700">{item.label.split(' ')[0]}</span>
                    <span className="text-gray-500 font-bold">{item.label.split(' ')[1]}</span>
                    <span className="text-gray-400 text-xs ml-1">({item.count})</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center p-6 border-t border-gray-100 gap-4">
          <button className="text-sm font-medium text-gray-600 underline hover:text-black transition-colors">
            Zrušit vybrané parametry
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={onClose}
              className="bg-[#C5B367] text-white px-10 py-3 text-sm font-medium hover:bg-[#b5a256] transition-all min-w-[150px]"
            >
              Zavřít
            </button>
            <button className="bg-[#00A651] text-white px-10 py-3 text-sm font-bold hover:bg-[#008d44] transition-all flex items-center gap-2">
              Zobrazit 318 položek
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;