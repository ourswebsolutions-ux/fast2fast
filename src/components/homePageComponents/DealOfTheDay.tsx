import React from 'react';

const DealOfTheDay = () => {
  return (
    <div className="bg-[#f9f9f9] py-16 px-4 font-serif">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <span className="text-gray-300 text-xs">◆ ◆ ◆</span>
          </div>
          <h2 className="text-3xl text-gray-800">Trhák dne</h2>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row items-stretch min-h-[400px]">
          
          {/* Left Column: Promotion Info */}
          <div className="flex-1 p-10 border-r border-gray-100">
            <h3 className="text-3xl text-gray-800 mb-6 font-light">Sleva dne</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-sm">
              Zlatý investiční slitek od švýcarské firmy Argor-Heraeus SA o hmotnosti 1 Oz (31,1g) 
              představuje nadstandardní jakost spojenou s elegancí a praktičností. Slitky do 100g mají ochranný obal.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl text-gray-800 font-light">Akce končí za:</h4>
              <div className="flex gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600 font-medium">09</span>
                  <span className="text-xs text-gray-500">hodin</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600 font-medium">55</span>
                  <span className="text-xs text-gray-500">minut</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl text-red-600 font-medium">55</span>
                  <span className="text-xs text-gray-500">sekund</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product and Price */}
          <div className="flex-[1.5] p-10 flex flex-col md:flex-row items-center gap-8 relative">
            
            {/* Product Image Area */}
            <div className="relative group">
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold z-20 shadow-lg">
                -20 %
              </div>
              
              <div className="relative w-48 h-64 bg-transparent">
                <img 
                  src="/3.png" 
                  alt="Argor Heraeus Gold Bar"
                  className="w-full h-full object-contain"
                />
                {/* Stock Tag */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-[10px] py-1 text-center font-sans tracking-wider">
                  Poslední 2ks skladem
                </div>
              </div>
            </div>

            {/* Price Details */}
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl text-gray-800 leading-tight font-light">
                31,1g investiční zlatý slitek Argor Heraeus SA
              </h3>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Běžná cena:</span>
                  <span className="text-gray-800">42 895 Kč</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Cena dnes:</span>
                  <span className="text-3xl text-[#C5A059] font-light">34 316 Kč</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sleva:</span>
                  <span className="text-red-600">– 8 579 Kč</span>
                </div>
              </div>

              <button className="w-full bg-[#C5B367] hover:bg-[#B4A256] text-white py-3 px-6 transition-colors text-sm uppercase tracking-wide">
                Zobrazit detail
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;