"use client";

import React, { useState } from "react";
import { ChevronDown, Calendar, LineChart, Table as TableIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// Import path ko fix kiya hai (Ensure k ye file exits karti ho)
import DoubleCalendar from "./extendedComponents/DoubleCalendar"; 

export default function ExtendedChart() {
  const [activeTab, setActiveTab] = useState("Graf");
  const [activeFilter, setActiveFilter] = useState("Celá historie");
  const [showCalendar, setShowCalendar] = useState(false);

  const filters = ["1 den", "Týden", "Měsíc", "Rok", "Celá historie"];

  return (
    <div className="w-full bg-black border-b border-zinc-900">
      {/* Main Container - Fixed 1350px width as per your preference */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-6 relative">
        
        {/* 1. TOP TABS SECTION */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-6">
          <div className="flex gap-8">
            <button 
              onClick={() => setActiveTab("Graf")}
              className={cn(
                "flex items-center gap-2 text-[14px] font-bold pb-2 transition-all relative",
                activeTab === "Graf" ? "text-[#C9B067]" : "text-zinc-500 hover:text-white"
              )}
            >
              <LineChart size={18} /> Graf
              {activeTab === "Graf" && (
                <div className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-[#C9B067]" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab("Tabulka")}
              className={cn(
                "flex items-center gap-2 text-[14px] font-bold pb-2 transition-all relative",
                activeTab === "Tabulka" ? "text-[#C9B067]" : "text-zinc-500 hover:text-white"
              )}
            >
              <TableIcon size={18} /> Tabulka
              {activeTab === "Tabulka" && (
                <div className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-[#C9B067]" />
              )}
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-white text-[12px] font-bold cursor-pointer group">
             <div className="w-4 h-2 bg-[#FF0000] mr-1" />
             <span className="group-hover:text-[#C9B067]">Komerční banka</span>
             <ChevronDown size={14} className="text-zinc-500" />
          </div>
        </div>

        {/* 2. CONTROLS (Currency & Date Pickers) */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button className="bg-white px-4 py-2 flex items-center justify-between min-w-[120px] text-black text-[14px] font-bold rounded-sm active:scale-95 transition-transform">
            USD <ChevronDown size={16} strokeWidth={3} />
          </button>

          <div className="flex items-center gap-3 ml-0 lg:ml-6 relative">
            <span className="text-white text-[13px] font-medium">Konkrétní datum</span>
            
            <div className="flex items-center gap-2">
              {/* OD: Field */}
              <div 
                className="flex cursor-pointer group" 
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <div className="bg-black border border-zinc-700 px-3 py-2 text-[12px] text-zinc-400 w-24 group-hover:border-zinc-500 transition-colors">
                  Od:
                </div>
                <div className="bg-[#C9B067] p-2 flex items-center justify-center group-hover:bg-[#B39A56] transition-colors">
                  <Calendar className="text-black" size={16} />
                </div>
              </div>
              
              {/* DO: Field */}
              <div 
                className="flex cursor-pointer group"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <div className="bg-black border border-zinc-700 px-3 py-2 text-[12px] text-zinc-400 w-24 group-hover:border-zinc-500 transition-colors">
                  Do:
                </div>
                <div className="bg-[#C9B067] p-2 flex items-center justify-center group-hover:bg-[#B39A56] transition-colors">
                  <Calendar className="text-black" size={16} />
                </div>
              </div>
            </div>

            {/* DOUBLE CALENDAR DROPDOWN */}
            {showCalendar && (
              <div className="absolute top-full left-0 mt-2 z-50">
                <DoubleCalendar 
                  onCancel={() => setShowCalendar(false)} 
                  onConfirm={() => setShowCalendar(false)} 
                />
              </div>
            )}
          </div>
        </div>

        {/* 3. CHART AREA */}
        <div className="w-full h-[300px] lg:h-[450px] relative mb-10">
          <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-[10px] text-zinc-600 font-bold pr-1 select-none">
            <span>2000</span><span>1750</span><span>1500</span><span>1250</span><span>1000</span><span>750</span><span>500</span><span>250</span><span>0</span>
          </div>

          <div className="w-[96%] h-full flex flex-col justify-between absolute left-0">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-full h-[1px] bg-zinc-900/60" />
            ))}
          </div>

          <svg viewBox="0 0 1000 400" className="w-[96%] h-full stroke-[1.8] fill-none text-[#C9B067] overflow-visible relative z-10">
            <path 
              d="M0,380 L15,378 L30,375 L50,370 L100,385 L150,375 L200,350 L240,340 L250,260 L260,240 L270,280 L290,300 L350,310 L400,320 L450,315 L500,325 L550,320 L600,310 L650,280 L680,180 L700,160 L730,220 L760,240 L800,210 L850,230 L900,120 L920,80 L940,140 L1000,90" 
              strokeLinejoin="round"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(201,176,103,0.5)] transition-all duration-700"
            />
          </svg>

          <div className="flex justify-between w-[96%] text-[10px] text-zinc-500 font-bold mt-4">
            <span>1970</span><span>1975</span><span>1980</span><span>1985</span><span>1990</span><span>1995</span><span>2000</span><span>2005</span><span>2010</span><span>2015</span><span>2020</span>
          </div>
        </div>

        {/* 4. HISTORY FILTERS SECTION */}
        <div className="flex flex-wrap gap-2 mt-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-1.5 text-[12px] font-bold rounded-sm border transition-all active:scale-95",
                activeFilter === filter 
                  ? "bg-[#C9B067] text-black border-[#C9B067]" 
                  : "bg-black text-white border-zinc-700 hover:border-zinc-500"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}