"use client";

import React, { useState } from "react";
import { ChevronDown, Calendar, LineChart, Table as TableIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import DoubleCalendar from "./extendedComponents/DoubleCalendar"; 

export default function ExtendedChart() {
  const [activeTab, setActiveTab] = useState("Graf"); 
  const [activeFilter, setActiveFilter] = useState("Celá historie");
  const [showCalendar, setShowCalendar] = useState(false);
  
  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const filters = ["1 den", "Týden", "Měsíc", "Rok", "Celá historie"];

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleDateString("cs-CZ");
  };

  const tableData = [
    { date: "16-02-2023", usd: "1837,30", gbp: "1522,94", eur: "1715,67", czk: "1522,94", pln: "1715,67" },
    { date: "15-02-2023", usd: "1835,45", gbp: "1518,65", eur: "1711,56", czk: "1518,65", pln: "1711,56" },
    { date: "14-02-2023", usd: "1860,50", gbp: "1525,80", eur: "1730,08", czk: "1525,80", pln: "1730,08" },
    { date: "13-02-2023", usd: "1858,50", gbp: "1544,04", eur: "1740,30", czk: "1544,04", pln: "1740,30" },
    { date: "10-02-2023", usd: "1864,10", gbp: "1540,49", eur: "1740,88", czk: "1540,49", pln: "1740,88" },
    { date: "09-02-2023", usd: "1882,10", gbp: "1549,72", eur: "1748,09", czk: "1549,72", pln: "1748,09" },
    { date: "08-02-2023", usd: "1880,75", gbp: "1555,76", eur: "1450,04", czk: "1555,76", pln: "1450,04" },
    { date: "07-02-2023", usd: "1873,80", gbp: "1561,81", eur: "1748,26", czk: "1561,81", pln: "1748,26" },
  ];

  return (
    <div className="w-full bg-black border-b border-zinc-900 select-none overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 py-6 relative">
        
        {/* TOP TABS - Static and Wrap-ready */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-6">
          <div className="flex gap-4 sm:gap-8">
            <button onClick={() => setActiveTab("Graf")} className={cn("flex items-center gap-2 text-[13px] sm:text-[14px] font-bold pb-2 transition-all relative", activeTab === "Graf" ? "text-[#C9B067]" : "text-zinc-500 hover:text-white")}>
              <LineChart size={18} /> Graf
              {activeTab === "Graf" && <div className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-[#C9B067]" />}
            </button>
            <button onClick={() => setActiveTab("Tabulka")} className={cn("flex items-center gap-2 text-[13px] sm:text-[14px] font-bold pb-2 transition-all relative", activeTab === "Tabulka" ? "text-[#C9B067]" : "text-zinc-500 hover:text-white")}>
              <TableIcon size={18} /> Tabulka
              {activeTab === "Tabulka" && <div className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-[#C9B067]" />}
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white text-[12px] font-bold cursor-pointer group">
             <div className="w-4 h-2 bg-[#FF0000] mr-1" />
             <span className="group-hover:text-[#C9B067] transition-colors">Komerční banka</span>
             <ChevronDown size={14} className="text-zinc-500" />
          </div>
        </div>

        {/* CONTROLS - Stacked on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
          <button className="bg-white px-4 py-2 flex items-center justify-between w-full lg:w-[120px] text-black text-[14px] font-bold rounded-sm active:scale-95">
            USD <ChevronDown size={16} strokeWidth={3} />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 relative">
            <span className="text-white text-[13px] font-medium whitespace-nowrap">Konkrétní datum</span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="flex flex-1 sm:flex-none cursor-pointer group" onClick={() => setShowCalendar(!showCalendar)}>
                <div className="bg-black border border-zinc-700 px-3 py-2 text-[11px] text-zinc-400 w-full sm:w-32 group-hover:border-zinc-500">
                  Od: <span className="text-white ml-1 font-bold">{formatDate(selectedRange.start)}</span>
                </div>
                <div className="bg-[#C9B067] p-2 flex items-center justify-center"><Calendar className="text-black" size={16} /></div>
              </div>
              <div className="flex flex-1 sm:flex-none cursor-pointer group" onClick={() => setShowCalendar(!showCalendar)}>
                <div className="bg-black border border-zinc-700 px-3 py-2 text-[11px] text-zinc-400 w-full sm:w-32 group-hover:border-zinc-500">
                  Do: <span className="text-white ml-1 font-bold">{formatDate(selectedRange.end)}</span>
                </div>
                <div className="bg-[#C9B067] p-2 flex items-center justify-center"><Calendar className="text-black" size={16} /></div>
              </div>
            </div>
            {showCalendar && (
              <DoubleCalendar initialRange={selectedRange} onCancel={() => setShowCalendar(false)} onConfirm={(range) => { setSelectedRange(range); setShowCalendar(false); }} />
            )}
          </div>
        </div>

        {/* DYNAMIC CONTENT - Chart remains VIP and Responsive */}
        <div className="w-full h-[300px] sm:h-[480px] relative mb-12 overflow-hidden">
          {activeTab === "Graf" ? (
            <>
              <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-[9px] sm:text-[11px] text-zinc-600 font-mono pr-1 z-20 bg-black/50">
                <span>2000</span><span>1500</span><span>1000</span><span>500</span><span>0</span>
              </div>
              <div className="w-full h-full flex flex-col justify-between absolute left-0 z-0">
                {[...Array(5)].map((_, i) => ( <div key={i} className="w-full h-[1px] bg-zinc-800/40" /> ))}
              </div>
              <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full overflow-visible relative z-10">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C9B067" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#C9B067" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,385 L100,382 L250,230 L380,315 L550,325 L720,160 L850,220 L1000,90 V400 H0 Z" fill="url(#chartGradient)"/>
                <path d="M0,385 L100,382 L250,230 L380,315 L550,325 L720,160 L850,220 L1000,90" fill="none" stroke="#C9B067" strokeWidth="3" strokeLinejoin="round" />
              </svg>
              <div className="flex justify-between w-full text-[9px] sm:text-[11px] text-zinc-500 font-mono mt-6 border-t border-zinc-800 pt-2">
                <span>1970</span><span className="hidden sm:inline">1980</span><span>1990</span><span className="hidden sm:inline">2000</span><span>2010</span><span>2020</span>
              </div>
            </>
          ) : (
            <div className="w-full overflow-x-auto rounded-sm border border-zinc-900">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="text-white text-[11px] sm:text-[13px] font-bold border-b border-zinc-800 bg-zinc-900/50">
                    <th className="py-4 px-4">Datum</th>
                    <th className="py-4 px-4 text-center">USD $</th>
                    <th className="py-4 px-4 text-center">GBP £</th>
                    <th className="py-4 px-4 text-center">EUR €</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] sm:text-[13px] font-bold">
                  {tableData.map((row, index) => (
                    <tr key={index} className={cn("transition-colors", index % 2 !== 0 ? "bg-white text-black" : "bg-black text-white")}>
                      <td className="py-3 px-4">{row.date}</td>
                      <td className="py-3 px-4 text-center">{row.usd}</td>
                      <td className="py-3 px-4 text-center">{row.gbp}</td>
                      <td className="py-3 px-4 text-center">{row.eur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* FIXED FILTERS - Wrapped so they don't scroll */}
        <div className="flex flex-wrap gap-2 mt-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] font-bold rounded-sm border transition-all active:scale-95 flex-grow sm:flex-grow-0 text-center",
                activeFilter === filter 
                  ? "bg-[#C9B067] text-black border-[#C9B067]" 
                  : "bg-black text-white border-zinc-800 hover:border-zinc-500"
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