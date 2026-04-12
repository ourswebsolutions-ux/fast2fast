"use client";

import React from "react";
import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const MetalPriceCard = ({ data }: { data: any }) => (
  <div className="border border-zinc-800 p-5 flex flex-col items-center bg-black rounded-sm w-full transition-all duration-300 hover:border-zinc-600 group">
    {/* Metal Name */}
    <span className="text-[#C9B067] text-[16px] font-medium mb-5 tracking-wide">{data.name}</span>

    {/* Price & Unit */}
    <div className="flex items-baseline gap-1.5 mb-2">
      <span className="text-white text-[22px] font-bold tracking-tight">{data.price}</span>
      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{data.unit}</span>
    </div>

    {/* Change Status Box */}
    <div className={cn(
      "flex items-center gap-1 px-3 py-1 rounded-[2px] text-[10px] font-bold mb-8 border",
      data.isDown 
        ? "bg-[#FF4D4D]/10 text-[#FF4D4D] border-[#FF4D4D]/20" 
        : "bg-[#00E676]/10 text-[#00E676] border-[#00E676]/20"
    )}>
      {data.isDown ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
      <span>{data.changeValue} ({data.changePercent})</span>
    </div>

    {/* Graph Section with Labels */}
    <div className="w-full h-40 relative flex items-center justify-center mb-2">
      {/* Y-Axis Labels (Right Side) */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-[9px] text-zinc-700 font-bold pr-1 select-none">
        <span>2000</span>
        <span>1750</span>
        <span>1500</span>
        <span>1250</span>
        <span>1000</span>
        <span className="mb-4">0</span>
      </div>

      <div className="w-[88%] h-full flex flex-col justify-between relative">
        {/* Horizontal Grid Lines */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-full h-[1px] bg-zinc-900/80" />
        ))}
        
        {/* SVG Graph (Updated path to match image precisely) */}
        <div className="absolute inset-0 pointer-events-none pr-8">
          <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="w-full h-full stroke-[1.2] fill-none text-[#C9B067] overflow-visible">
            <path 
              d="M0,70 L5,65 L8,55 L10,60 L12,45 L15,58 L18,48 L22,50 L25,48 L30,58 L35,75 L40,85 L45,95 L50,85 L55,88 L60,95 L65,92 L70,98 L75,90 L80,95 L85,105 L90,95 L95,90 L100,85 L105,92 L110,88 L115,100 L120,95 L125,92 L130,95 L135,102 L140,95 L145,98 L150,85 L155,75 L160,78 L165,70 L170,60 L175,45 L180,30 L185,10 L190,35 L195,25 L200,45" 
              strokeLinejoin="round"
              strokeLinecap="round"
              className="drop-shadow-[0_0_3px_rgba(201,176,103,0.3)]"
            />
          </svg>
        </div>
        
        {/* X-Axis Bottom Line */}
        <div className="w-full h-[1px] bg-zinc-700 mt-auto" />
      </div>
    </div>

    {/* X-Axis Time Labels */}
    <div className="flex justify-between w-[88%] text-[9px] text-zinc-500 font-bold mt-1 pr-8">
      <span>8.00</span><span>12.00</span><span>16.00</span><span>20.00</span>
    </div>
  </div>
);

export default function ActualniCeny() {
  const metals = [
    { name: "Zlato", price: "1249,3", unit: "USD/oz", changeValue: "↓ 84,788", changePercent: "0,235%", isDown: true },
    { name: "Stříbro", price: "16,39", unit: "USD/oz", changeValue: "↑ 84,788", changePercent: "0,235%", isDown: false },
    { name: "Platina", price: "16,39", unit: "USD/oz", changeValue: "↑ 84,788", changePercent: "0,235%", isDown: false },
    { name: "Palladium", price: "1249,3", unit: "USD/oz", changeValue: "↓ 84,788", changePercent: "0,235%", isDown: true },
  ];

  return (
    <div className="w-full bg-black border-b border-zinc-900">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-8 max-h-[85vh] overflow-y-auto custom-scrollbar lg:max-h-none lg:overflow-visible">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
            <h2 className="text-[#C9B067] text-[28px] font-medium tracking-tight">Aktuální ceny</h2>
            <p className="text-zinc-500 text-[11px] font-bold">Aktualizováno: 15. 2. 2023 20.30</p>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="bg-white px-5 py-2 flex items-center justify-between flex-1 sm:min-w-[100px] text-black text-[13px] font-extrabold rounded-sm border border-transparent active:bg-zinc-200">
              USD <ChevronDown size={16} strokeWidth={3} />
            </button>
            <button className="bg-white px-5 py-2 flex items-center justify-between flex-1 sm:min-w-[100px] text-black text-[13px] font-extrabold rounded-sm border border-transparent active:bg-zinc-200">
              Ozt <ChevronDown size={16} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 pb-4">
          {metals.map((metal, idx) => (
            <MetalPriceCard key={idx} data={metal} />
          ))}
        </div>
      </div>
    </div>
  );
}