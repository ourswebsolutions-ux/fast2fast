"use client";
import React from 'react';
import { X } from 'lucide-react';

const FilterModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  const sidebarItems = [
    "Cena", "Hmotnost", "Motiv", "Stát", "Kvalita", "Mincovna", "Série", "Dostupnost"
  ];

  // Column-wise split for exact image match
  const col1 = [
    { label: "1000 g", count: 6 },
    { label: "500 g", count: 10 },
    { label: "250 g", count: 25 },
    { label: "100 g", count: 88 },
    { label: "50 g", count: 5 },
    { label: "31,11 g", count: 126 },
    { label: "31,1 g", count: 13 },
    { label: "25 g", count: 13 },
    { label: "20 g", count: 5 },
  ];

  const col2 = [
    { label: "10 g", count: 6 },
    { label: "5 g", count: 52 },
    { label: "2,5 g", count: 15 },
    { label: "2 g", count: 10 },
    { label: "1 g", count: 34 },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-[800px] shadow-2xl rounded-sm overflow-hidden flex flex-col transition-all">
        
        {/* Header */}
        <div className="flex justify-between items-center px-7 py-5 bg-white border-b border-gray-50">
          <h2 className="text-[30px] font-serif font-light text-[#333]">Rozšířený filtr</h2>
          <button 
            onClick={onClose}
            className="bg-[#C9B067] p-1.5 rounded-full text-white hover:scale-105 active:scale-95 transition-all"
          >
            <X size={18} strokeWidth={3} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex bg-white">
          {/* Sidebar */}
          <div className="w-[190px] bg-[#F4F4F4] border-r border-[#E5E5E5]">
            {sidebarItems.map((item) => (
              <div 
                key={item}
                className={`px-5 py-3.5 text-[14px] border-b border-[#E5E5E5] cursor-pointer transition-colors
                  ${item === "Hmotnost" 
                    ? "bg-white text-black font-bold border-r-0 shadow-sm" 
                    : "text-[#666] hover:bg-[#ECECEC]"}`}
              >
                {item}
              </div>
            ))}
            {/* Filler to keep sidebar full height */}
            <div className="flex-grow bg-[#F4F4F4]"></div>
          </div>

          {/* Main Grid Section */}
          <div className="flex-1 p-6 flex gap-4 bg-white overflow-y-auto">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-1.5">
              {col1.map((item, idx) => (
                <label 
                  key={idx} 
                  className="flex items-center gap-3 px-3 py-2 bg-[#FBFBFB] border border-[#EEEEEE] cursor-pointer hover:border-[#CCC] transition-all"
                >
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded-none accent-[#00A651] border-gray-300 cursor-pointer" 
                  />
                  <div className="text-[13px] text-[#333]">
                    <span className="font-bold">{item.label}</span>
                    <span className="text-[#999] ml-1.5 font-normal">({item.count})</span>
                  </div>
                </label>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-1.5">
              {col2.map((item, idx) => (
                <label 
                  key={idx} 
                  className="flex items-center gap-3 px-3 py-2 bg-[#FBFBFB] border border-[#EEEEEE] cursor-pointer hover:border-[#CCC] transition-all"
                >
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded-none accent-[#00A651] border-gray-300 cursor-pointer" 
                  />
                  <div className="text-[13px] text-[#333]">
                    <span className="font-bold">{item.label}</span>
                    <span className="text-[#999] ml-1.5 font-normal">({item.count})</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-7 py-6 bg-white border-t border-gray-100 gap-4">
          <button className="text-[14px] font-medium text-black underline underline-offset-4 hover:text-[#C9B067] transition-colors">
            Zrušit vybrané parametry
          </button>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="bg-[#C9B067] text-white px-12 py-3.5 text-[15px] font-normal hover:brightness-95 transition-all flex-1 sm:flex-none"
            >
              Zavřít
            </button>
            <button className="bg-[#00A651] text-white px-10 py-3.5 text-[15px] font-bold hover:brightness-90 transition-all flex-1 sm:flex-none">
              Zobrazit 318 položek
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;