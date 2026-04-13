"use client";

import React from "react";
import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

/* ================= TYPES ================= */
interface MetalData {
  name: string;
  price: string;
  unit: string;
  changeValue: string;
  changePercent: string;
  isDown: boolean;
}

/* ================= METAL CARD COMPONENT ================= */
const MetalPriceCard = ({ data }: { data: MetalData }) => {
  return (
    <div className="border border-zinc-800 p-6 flex flex-col items-center bg-black rounded-sm group hover:border-zinc-700 transition-all duration-300">
      {/* Metal Name - Gold color with wide tracking */}
      <span className="text-[#C9B067] text-[13px] uppercase tracking-[0.3em] mb-5 font-medium">
        {data.name}
      </span>

      {/* Price Section */}
      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-white text-[28px] font-bold tracking-tight">
          {data.price}
        </span>
        <span className="text-zinc-400 text-[10px] font-bold uppercase">
          {data.unit}
        </span>
      </div>
      
      {/* Change Badge */}
      <div className={cn(
        "flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-bold mb-8",
        data.isDown ? "bg-[#FF4D4D]/10 text-[#FF4D4D]" : "bg-[#00E676]/10 text-[#00E676]"
      )}>
        {data.isDown ? <TrendingDown size={13} /> : <TrendingUp size={13} />}
        <span>{data.isDown ? "↓" : "↑"} {data.changeValue} ({data.changePercent})</span>
      </div>

      {/* Chart Section */}
      <div className="w-full h-28 mt-auto relative mb-4">
        {/* Horizontal Grid Lines */}
        <div className="absolute top-0 w-full h-[1px] bg-zinc-900"></div>
        <div className="absolute top-[25%] w-full h-[1px] bg-zinc-900"></div>
        <div className="absolute top-[50%] w-full h-[1px] bg-zinc-900"></div>
        <div className="absolute top-[75%] w-full h-[1px] bg-zinc-900"></div>
        
        <svg viewBox="0 0 200 80" className="w-full h-full stroke-[1.5] fill-none text-[#C9B067] overflow-visible">
          {/* Chart Path - Exact aesthetic from image */}
          <path 
            d="M0,55 C10,50 20,60 30,35 C45,15 55,70 70,55 C85,40 100,75 120,45 C140,20 160,65 180,30 C190,15 200,25 210,10" 
            className="drop-shadow-[0_0_8px_rgba(201,176,103,0.3)]"
          />
        </svg>

        {/* Bottom Axis Line */}
        <div className="absolute bottom-0 w-full h-[1px] bg-zinc-700"></div>
        
        {/* Ticks */}
        <div className="absolute bottom-[-4px] left-[5%] w-[1px] h-[4px] bg-zinc-500"></div>
        <div className="absolute bottom-[-4px] left-[35%] w-[1px] h-[4px] bg-zinc-500"></div>
        <div className="absolute bottom-[-4px] left-[65%] w-[1px] h-[4px] bg-zinc-500"></div>
        <div className="absolute bottom-[-4px] left-[95%] w-[1px] h-[4px] bg-zinc-500"></div>
      </div>

      {/* Time Labels */}
      <div className="flex justify-between w-full text-[9px] text-zinc-500 font-bold tracking-widest px-1">
        <span>8.00</span>
        <span>12.00</span>
        <span>16.00</span>
        <span>20.00</span>
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
export default function ActualniCeny() {
  const metals: MetalData[] = [
    { name: "Zlato", price: "1249,3", unit: "USD/oz", changeValue: "84,788", changePercent: "0,235%", isDown: true },
    { name: "Stříbro", price: "16,39", unit: "USD/oz", changeValue: "84,788", changePercent: "0,235%", isDown: false },
    { name: "Platina", price: "16,39", unit: "USD/oz", changeValue: "84,788", changePercent: "0,235%", isDown: false },
    { name: "Palladium", price: "1249,3", unit: "USD/oz", changeValue: "84,788", changePercent: "0,235%", isDown: true },
  ];

  return (
    <section className="w-full bg-black py-12 selection:bg-[#C9B067]">
      <div className="max-w-[1350px] mx-auto px-6">
        
        {/* Header: Title & Dropdowns */}
        <div className="flex justify-between items-start mb-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-[#C9B067] text-[32px] font-medium tracking-tight">
              Aktuální ceny
            </h2>
            <p className="text-zinc-500 text-[11px] font-bold">
              Aktualizováno: 15. 2. 2023 20.30
            </p>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-white px-4 py-2.5 flex items-center justify-between min-w-[100px] text-black text-[13px] font-bold rounded-sm">
              USD <ChevronDown size={16} strokeWidth={3} className="ml-2" />
            </button>
            <button className="bg-white px-4 py-2.5 flex items-center justify-between min-w-[100px] text-black text-[13px] font-bold rounded-sm">
              Ozt <ChevronDown size={16} strokeWidth={3} className="ml-2" />
            </button>
          </div>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metals.map((metal, idx) => (
            <MetalPriceCard key={idx} data={metal} />
          ))}
        </div>
      </div>
    </section>
  );
}