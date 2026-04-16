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
      {/* Main Modal Container - Width restored to original size */}
      <div className="bg-white w-full max-w-[750px] relative shadow-2xl rounded-sm overflow-visible animate-in fade-in zoom-in duration-300">

        {/* Header with Gray Background */}
        <div className="bg-[#f8f8f8] px-6 py-8 md:px-10 flex justify-between items-center relative border-b border-gray-100">
          <h2 className="text-3xl md:text-4xl text-[#333333] font-serif font-light">
            Rekapitulace prodeje
          </h2>

          <button
            onClick={onClose}
            className="w-9 h-9 bg-[#c2ad67] rounded-full flex items-center justify-center text-white hover:bg-[#b09b5a] transition-colors"
          >
            <X size={22} strokeWidth={2.3} />
          </button>
        </div>

        <div className="p-6 md:p-10 bg-white">
          {/* Product Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-8 mb-8">

            {/* Product Info */}
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center p-1">
                <img src="/can-img.png" alt="Maple Leaf" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-[14px] text-[#333333] font-normal">
                  Kanada 50$ 2018 Maple Leaf 1 oz...
                </h3>
                <span className="text-[11px] bg-[#eeeeee] text-[#333333] px-2 py-0.5 mt-1 inline-block">
                  Chci prodat – Na prodejně
                </span>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center h-[34px]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-[#c2ad67] text-white w-9 h-full flex items-center justify-center hover:bg-[#b09b5a]"
              >
                <Minus size={16} />
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-10 text-center border-y border-gray-100 h-full outline-none text-[#333333] text-sm"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-[#c2ad67] text-white w-9 h-full flex items-center justify-center hover:bg-[#b09b5a]"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Price and Tooltip Section */}
            <div className="flex items-center gap-3 min-w-[150px] justify-end relative">
              <div className="relative group flex items-center">
                {/* Info Icon */}
                <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center text-gray-400 cursor-help text-[10px] font-serif">
                  i
                </div>

                {/* Hover Message (Tooltip) */}
                <div className="absolute top-[20px] left-1/2 md:left-full md:-translate-y-0 ml-0 md:ml-2 whitespace-nowrap px-3 py-1.5 bg-white border border-gray-200 shadow-lg text-[11.5px] text-[#666666] hidden group-hover:block z-[110] pointer-events-none">
                  Cena je proměnlivá a záleží kdy daný produkt obdržíme.

                  {/* Tooltip Arrow - Positioned at the top for a 'downward' feel */}
                  <div className="absolute -top-2 left-4 md:left-0 md:right-full md:top-2 md:translate-y-0 border-8 border-transparent border-b-white md:border-b-transparent md:border-r-white"></div>
                </div>
              </div>

              <span className="text-lg font-medium text-[#333333]">
                {(basePrice * quantity).toLocaleString()} Kč
              </span>

              <button className="text-gray-300 hover:text-red-500 transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-[14px] text-[#333333] underline underline-offset-4 hover:text-[#c2ad67]"
            >
              Zavřít rekapitulaci
            </button>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="bg-[#c2ad67] text-white px-8 py-3 text-[13px] font-medium hover:bg-[#b09b5a] transition-all min-w-[150px]">
                Prodat další
              </button>
              <button className="bg-[#00a651] text-white px-8 py-3 text-[13px] font-medium hover:bg-[#008d44] transition-all min-w-[180px]">
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