"use client";
import React, { useState } from 'react';
import { ChevronDown, X, ChevronUp } from 'lucide-react';
import FilterModal from './filterModal';

const ProductFilterSection = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [filters, setFilters] = useState<any>({
    "Hmotnost": [
      { label: '1 oz', count: 45, checked: false },
      { label: '1/2 oz', count: 20, checked: false },
      { label: '1/4 oz', count: 15, checked: false }
    ],
    "Motiv": [
      { label: 'Koala', count: 12, checked: false },
      { label: 'Kangaroo', count: 30, checked: false }
    ],
    "Stát": [
      { label: 'Austrálie', count: 80, checked: false },
      { label: 'Kanada', count: 40, checked: false }
    ],
    "Kvalita": [
      { label: 'Proof', count: 55, checked: false },
      { label: 'Standard', count: 120, checked: false }
    ],
    "Dostupnost": [
      { label: 'Skladem', count: 300, checked: false },
      { label: 'Na objednávku', count: 3, checked: false },
      { label: 'Dočasně nedostupné', count: 6, checked: false },
      { label: 'Na dotaz', count: 2, checked: false },
      { label: 'Vyprodáno', count: 1, checked: false },
    ]
  });

  const handleItemClick = (category: string, index: number) => {
    const updatedFilters = { ...filters };
    updatedFilters[category][index].checked = !updatedFilters[category][index].checked;
    setFilters(updatedFilters);
  };

  const clearAllFilters = () => {
    const resetFilters = { ...filters };
    Object.keys(resetFilters).forEach(cat => {
      resetFilters[cat] = resetFilters[cat].map((item: any) => ({ ...item, checked: false }));
    });
    setFilters(resetFilters);
  };

  const activeFilters = Object.keys(filters).flatMap(cat =>
    filters[cat].filter((item: any) => item.checked).map((item: any) => ({
      category: cat,
      label: item.label,
      index: filters[cat].findIndex((x: any) => x.label === item.label)
    }))
  );

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1412px] mx-auto font-sans ">
        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        />
        {/* SECTION 1: Filters Area */}
        <div className="bg-[#F3F3F3] p-4 s ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {Object.keys(filters).map((category) => (
              <div key={category} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                  className={`w-full bg-white lg:h-14 h-12 px-4 flex items-center justify-between border transition-all text-[14px]
                    ${openDropdown === category ? 'border-[#C5A059]' : 'border-gray-200 hover:border-[#C5A059]'}`}
                >
                  <span className="text-[#333]">{category}</span>
                  {openDropdown === category ? <ChevronUp size={18} className="text-[#C5A059]" /> : <ChevronDown size={18} className="text-gray-400" />}
                </button>

                {openDropdown === category && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setOpenDropdown(null)}></div>
                    <div className="absolute left-0 border border-gray-200 top-[50px] w-full bg-white border border-gray-300 shadow-xl z-50 p-4 min-w-[220px]">
                      <div className="flex flex-col  gap-3 max-h-[250px] overflow-y-auto no-scrollbar">
                        {filters[category].map((item: any, idx: number) => (
                          <div
                            key={idx}
                            onClick={() => handleItemClick(category, idx)}
                            className="flex items-center justify-between cursor-pointer group"
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 border transition-colors flex items-center justify-center 
                                ${item.checked ? 'bg-[#C5A059] border-[#C5A059]' : 'border-gray-300 group-hover:border-[#C5A059]'}`}>
                                {item.checked && <div className="w-2 h-1 border-l-2 border-b-2 border-white -rotate-45 mb-0.5"></div>}
                              </div>
                              <span className="text-[13px] text-gray-700 select-none">{item.label}</span>
                            </div>
                            <span className="text-[12px] text-gray-400">({item.count})</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Rozšířený filtr - Now clears all filters on click */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="bg-[#D1B870] text-white px-10 py-2.5 text-[14px] font-medium hover:bg-[#c4a95d] transition-all rounded-[2px]"
            >
              Rozšířený filtr
            </button>
          </div>

          {/* DYNAMIC TAGS */}
          {activeFilters.length > 0 && (
            <div className="flex items-center gap-2 mt-6   overflow-hidden">
              <div className="flex flex-nowrap md:flex-wrap items-center gap-2 overflow-x-auto no-scrollbar">
                {activeFilters.map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center bg-[#D1B870] text-white px-3 h-7 gap-4 flex-shrink-0"
                  >
                    <span className="text-[13px] font-medium whitespace-nowrap">{tag.label}</span>
                    <X
                      size={14}
                      className="cursor-pointer hover:text-black transition-colors"
                      onClick={() => handleItemClick(tag.category, tag.index)}
                    />
                  </div>
                ))}

                {/* Clear All Button - Fixed Height matches the tags */}
                <button
                  onClick={clearAllFilters}
                  className="bg-[#FF0000] w-9 h-9 text-white hover:bg-red-700 transition-colors flex-shrink-0 flex items-center justify-center"
                >
                  <X size={16} strokeWidth={3} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 2: Sorting Buttons - Mobile Scroller 2-per-screen */}
        <div className="bg-white pt-8 pb-4">
          {/* Grid ko 5 columns (md:grid-cols-5) mein convert kar diya hai */}
          <div className="flex md:grid md:grid-cols-5 gap-1 overflow-x-auto no-scrollbar flex-nowrap">
            {['Nejprodávanější', 'Nejlevnější', 'Nejdražší', 'Abecedně', 'Nejaktuálnější'].map((sort, idx) => (
              <button
                key={sort}
                className={`
          /* Mobile par 2 buttons screen par fit ayenge (49.5%) */
          min-w-[49.5%] md:min-w-0 
          flex-shrink-0 
          md:w-full 
          py-2.5 
          text-[14px] 
          font-medium 
          transition-all 
          border  
          ${idx === 0
                    ? 'bg-[#D1B870] text-white border-[#D1B870]'
                    : 'bg-white text-[#333] border-gray-200 hover:bg-[#D1B870] hover:text-white hover:border-[#D1B870]'
                  }
        `}
              >
                {sort}
              </button>
            ))}
          </div>

          <div className="text-right mt-4">
            <span className="text-[13px] text-gray-600 font-medium ">310 položek celkem</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductFilterSection;