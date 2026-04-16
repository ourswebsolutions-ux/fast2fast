"use client";
import React, { useState } from 'react';
import { X, Minus, Plus, Info } from 'lucide-react';

interface SalesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SalesPopup: React.FC<SalesPopupProps> = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const basePrice = 45703;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Main Modal Container */}
      <div className="bg-white w-full max-w-[750px] relative shadow-2xl rounded-sm overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Close Button Top Right */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-[#C5A059] hover:rotate-90 transition-transform duration-300"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        <div className="p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl text-[#333333] font-serif mb-12">
            Rekapitulace prodeje
          </h2>

          {/* Product Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-100 pb-8 mb-8">
            
            {/* Product Info */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-16 h-16 bg-[#fcfcfc] border border-gray-100 rounded-full flex items-center justify-center p-2">
                <img src="/imgcoin.svg" alt="Maple Leaf" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[15px] text-[#333333] font-medium leading-tight">
                  Kanada 50$ 2018 Maple Leaf 1 oz...
                </h3>
                <span className="text-[12px] bg-gray-100 text-gray-600 px-2 py-0.5 mt-1 inline-block">
                  Chci prodat – Na prodejně
                </span>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-[#C5A059] text-white p-2 hover:bg-[#b5914a] transition-colors"
              >
                <Minus size={18} />
              </button>
              <input 
                type="text" 
                value={quantity} 
                readOnly 
                className="w-12 text-center border-y border-gray-200 h-[34px] outline-none text-gray-700 font-medium"
              />
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="bg-[#C5A059] text-white p-2 hover:bg-[#b5914a] transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>

            {/* Price and Tooltip */}
            <div className="flex items-center gap-4 min-w-[140px] justify-end">
              <div className="relative group">
                <Info size={20} className="text-gray-400 cursor-help" />
                {/* Tooltip Message as per Image */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-white border border-gray-200 shadow-xl rounded text-[11px] text-gray-600 hidden group-hover:block z-50 animate-in fade-in slide-in-from-bottom-1">
                  Cena je proměnlivá a záleží kdy daný produkt obdržíme.
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                </div>
              </div>
              <span className="text-xl font-medium text-[#333333]">
                {(basePrice * quantity).toLocaleString()} Kč
              </span>
              <button className="text-gray-300 hover:text-red-500 transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <button 
              onClick={onClose}
              className="text-sm text-[#333333] underline underline-offset-4 hover:text-[#C5A059] transition-colors order-3 sm:order-1"
            >
              Zavřít rekapitulaci
            </button>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto order-2">
              <button className="bg-[#C5A059] text-white px-8 py-3 text-sm font-medium hover:bg-[#b5914a] transition-all min-w-[160px]">
                Prodat další
              </button>
              <button className="bg-[#00A651] text-white px-8 py-3 text-sm font-medium hover:bg-[#008d44] transition-all min-w-[180px]">
                Pokračovat v prodeji
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPopup;