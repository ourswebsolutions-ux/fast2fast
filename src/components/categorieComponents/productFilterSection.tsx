"use client";
import React, { useState } from 'react';
import { ChevronDown, X, ChevronUp } from 'lucide-react';

const ProductFilterSection = () => {
  const [isDostupnostOpen, setIsDostupnostOpen] = useState(false);
  const [availability, setAvailability] = useState([
    { label: 'Skladem', count: 300, checked: true },
    { label: 'Na objednávku', count: 3, checked: true },
    { label: 'Dočasně nedostupné', count: 6, checked: false },
    { label: 'Na dotaz', count: 2, checked: false },
    { label: 'Vyprodáno', count: 1, checked: false },
  ]);

  const toggleCheckbox = (index: number) => {
    const newAvailability = [...availability];
    newAvailability[index].checked = !newAvailability[index].checked;
    setAvailability(newAvailability);
  };

  return (
    <div className="w-full bg-white">
      {/* Container with Fixed Max Width */}
      <div className="max-w-[1350px] mx-auto font-sans px-4">
        
        {/* SECTION 1: Upper Filters with Gray Background */}
        <div className="bg-[#F3F3F3] p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {['Hmotnost', 'Motiv', 'Stát', 'Kvalita'].map((filter, i) => (
              <div key={i} className="relative group">
                <div className="bg-white h-12 px-4 flex items-center justify-between border border-gray-200 cursor-pointer hover:border-[#C5A059] transition-all group">
                  <span className="text-[#333] text-[14px]">{filter}</span>
                  <ChevronDown size={18} className="text-gray-400 group-hover:text-[#C5A059]" />
                </div>
              </div>
            ))}

            {/* Interactive Dostupnost Dropdown */}
            <div className="relative">
              <div 
                onClick={() => setIsDostupnostOpen(!isDostupnostOpen)}
                className={`bg-white h-12 px-4 flex items-center justify-between border transition-all cursor-pointer ${isDostupnostOpen ? 'border-[#C5A059]' : 'border-gray-200 hover:border-[#C5A059]'}`}
              >
                <span className="text-[#333] text-[14px]">Dostupnost</span>
                {isDostupnostOpen ? <ChevronUp size={18} className="text-[#C5A059]" /> : <ChevronDown size={18} className="text-gray-400" />}
              </div>
              
              {isDostupnostOpen && (
                <div className="absolute right-0 top-[50px] w-full bg-white border border-gray-300 shadow-xl z-50 p-4 min-w-[220px]">
                  <div className="flex flex-col gap-3">
                    {availability.map((item, idx) => (
                      <label 
                        key={idx} 
                        className="flex items-center justify-between cursor-pointer group"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleCheckbox(idx);
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 border transition-colors ${item.checked ? 'bg-[#C5A059] border-[#C5A059]' : 'border-gray-300 group-hover:border-[#C5A059]' } flex items-center justify-center`}>
                            {item.checked && <div className="w-2 h-1 border-l-2 border-b-2 border-white -rotate-45 mb-0.5"></div>}
                          </div>
                          <span className="text-[13px] text-gray-700 select-none">{item.label}</span>
                        </div>
                        <span className="text-[12px] text-gray-400">({item.count})</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Filter Button */}
          <div className="flex justify-center mt-6">
            <button className="bg-[#C5A059] text-white px-10 py-2.5 text-[14px] font-medium hover:bg-[#b38f4d] transition-all shadow-sm active:scale-95">
              Rozšířený filtr
            </button>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            {['1 oz', 'Koala', 'Austrálie', 'Proof'].map((tag, i) => (
              <div key={i} className="flex items-center bg-[#C5A059] text-white px-3 py-1.5 gap-4 group cursor-default">
                <span className="text-[13px] font-medium">{tag}</span>
                <X size={14} className="cursor-pointer text-white/70 hover:text-white transition-colors" />
              </div>
            ))}
            <button className="bg-[#E30613] p-2 text-white hover:bg-red-700 transition-colors">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* SECTION 2: Sorting Buttons with Pure White Background */}
        <div className="bg-white pt-8 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
            <button className="bg-[#C5A059] text-white py-4 text-[14px] font-medium transition-all shadow-sm border border-[#C5A059]">
              Nejprodávanější
            </button>
            <button className="bg-white text-[#333] border border-gray-200 py-4 text-[14px] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all shadow-sm md:shadow-none font-medium">
              Nejlevnější
            </button>
            <button className="bg-white text-[#333] border border-gray-200 py-4 text-[14px] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all shadow-sm md:shadow-none font-medium">
              Nejdražší
            </button>
            <button className="bg-white text-[#333] border border-gray-200 py-4 text-[14px] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all shadow-sm md:shadow-none font-medium">
              Abecedně
            </button>
          </div>

          {/* Result Count */}
          <div className="text-right mt-4">
            <span className="text-[13px] text-gray-400 font-medium italic">310 položek celkem</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductFilterSection;