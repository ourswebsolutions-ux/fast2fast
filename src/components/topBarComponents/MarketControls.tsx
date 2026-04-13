"use client";

import React, { useState } from "react";
import { ChevronDown, LineChart, Table as TableIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MarketControls() {
  const [activeTab, setActiveTab] = useState("Graf");
  const [currency, setCurrency] = useState("USD $");
  const [timeOfDay, setTimeOfDay] = useState("AM – Dopolední cena");

  const currencies = ["USD $", "GBP £", "EUR €", "CZK Kč", "PLN zł"];
  const timeFilters = ["1 den", "Týden", "Měsíc", "Rok", "Celá historie"];

  const tableData = [
    { date: "16-02-2023", usd: "1837,30", gbp: "1522,94", eur: "1715,67", czk: "1522,94", pln: "1715,67" },
    { date: "15-02-2023", usd: "1835,45", gbp: "1518,65", eur: "1711,56", czk: "1518,65", pln: "1711,56" },
    { date: "14-02-2023", usd: "1860,50", gbp: "1525,80", eur: "1730,08", czk: "1525,80", pln: "1730,08" },
    { date: "13-02-2023", usd: "1858,50", gbp: "1544,04", eur: "1740,30", czk: "1544,04", pln: "1740,30" },
    { date: "10-02-2023", usd: "1864,10", gbp: "1540,49", eur: "1740,88", czk: "1540,49", pln: "1740,88" },
    { date: "09-02-2023", usd: "1882,10", gbp: "1549,72", eur: "1748,09", czk: "1549,72", pln: "1748,09" },
  ];

  return (
    <div className="w-full bg-black p-4 sm:p-6 font-sans select-none text-white overflow-hidden">
      <div className="max-w-[1350px] mx-auto">
        
        {/* TABS SELECTOR */}
        <div className="flex gap-6 sm:gap-8 border-b border-zinc-800 mb-6">
          <button 
            onClick={() => setActiveTab("Graf")}
            className={cn(
              "flex items-center gap-2 pb-2 text-[13px] sm:text-[14px] font-bold transition-all border-b-2",
              activeTab === "Graf" ? "text-[#C4B06D] border-[#C4B06D]" : "text-zinc-400 border-transparent hover:text-white"
            )}
          >
            <LineChart size={16} className="sm:w-[18px]" /> Graf
          </button>
          <button 
            onClick={() => setActiveTab("Tabulka")}
            className={cn(
              "flex items-center gap-2 pb-2 text-[13px] sm:text-[14px] font-bold transition-all border-b-2",
              activeTab === "Tabulka" ? "text-[#C4B06D] border-[#C4B06D]" : "text-zinc-400 border-transparent hover:text-white"
            )}
          >
            <TableIcon size={16} className="sm:w-[18px]" /> Tabulka
          </button>
        </div>

        {/* CONTROLS GRID */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 items-center mb-8">
          <div className="w-full lg:col-span-3 flex gap-2">
            <div className="relative flex-1">
              <select className="w-full bg-white text-black px-4 py-2.5 text-[13px] sm:text-[14px] font-bold appearance-none rounded-sm outline-none cursor-pointer">
                <option>Zlato</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={16} />
            </div>
            <div className="relative flex-1">
              <select className="w-full bg-white text-black px-4 py-2.5 text-[13px] sm:text-[14px] font-bold appearance-none rounded-sm outline-none cursor-pointer">
                <option>Kg</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={16} />
            </div>
          </div>

          <div className="w-full lg:col-span-5 flex justify-center">
            {activeTab === "Graf" && (
              <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-2 w-full justify-center">
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={cn(
                      "px-2 sm:px-4 py-2.5 text-[12px] sm:text-[13px] font-bold border transition-all rounded-sm",
                      currency === curr ? "bg-[#C4B06D] border-[#C4B06D] text-black" : "bg-transparent border-zinc-700 text-white hover:border-zinc-500"
                    )}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="w-full lg:col-span-4 flex gap-2">
            <button
              onClick={() => setTimeOfDay("AM – Dopolední cena")}
              className={cn(
                "flex-1 py-2.5 text-[11px] sm:text-[13px] font-bold border text-center transition-all rounded-sm",
                timeOfDay === "AM – Dopolední cena" ? "bg-[#C4B06D] border-[#C4B06D] text-black" : "bg-transparent border-zinc-700 text-white hover:border-zinc-500"
              )}
            >
              AM – Dopolední cena
            </button>
            <button
              onClick={() => setTimeOfDay("PM – Odpolední cena")}
              className={cn(
                "flex-1 py-2.5 text-[11px] sm:text-[13px] font-bold border text-center transition-all rounded-sm",
                timeOfDay === "PM – Odpolední cena" ? "bg-[#C4B06D] border-[#C4B06D] text-black" : "bg-transparent border-zinc-700 text-zinc-500"
              )}
            >
              PM – Odpolední cena
            </button>
          </div>
        </div>

        {/* CONDITIONAL CONTENT */}
        {activeTab === "Graf" ? (
          <div className="animate-in fade-in duration-500">
            {/* GRAPH AREA WITH RIGHT SPACE FOR NUMBERS */}
            <div className="relative w-full pr-14">
              <div className="w-full h-[300px] sm:h-[450px] relative">
                
                {/* Y-Axis Grid Lines & Numbers (Numbers positioned absolute to the right) */}
                {[2000, 1750, 1500, 1250, 1000, 750, 500, 250, 0].map((val) => (
                  <div 
                    key={val} 
                    className="absolute left-0 w-full border-t border-zinc-800/60 flex justify-end items-center" 
                    style={{ top: `${100 - (val/2000) * 100}%` }}
                  >
                    {/* Numbers on the right side of the line */}
                    <span className="absolute -right-14 text-zinc-500 text-[10px] sm:text-[11px] font-mono w-12 text-right">
                      {val}
                    </span>
                  </div>
                ))}

                {/* SVG Graph - Contained in grid */}
                <svg viewBox="0 0 1000 450" preserveAspectRatio="none" className="w-full h-full relative z-10 overflow-visible">
                  <path 
                    d="M0,430 L50,425 L100,410 L150,350 L180,360 L200,420 L250,415 L300,420 L350,425 L400,420 L450,425 L500,430 L550,420 L600,410 L650,400 L700,350 L720,280 L740,310 L780,250 L820,150 L850,220 L880,180 L920,80 L950,150 L1000,100" 
                    fill="none" 
                    stroke="#C4B06D" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="drop-shadow-[0_0_8px_rgba(196,176,109,0.4)]"
                  />
                </svg>
              </div>

              {/* X-Axis Labels (Aligned with Graph) */}
              <div className="flex justify-between mt-4 text-zinc-500 text-[10px] sm:text-[11px] font-mono border-t border-zinc-800 pt-3">
                <span>1970</span><span>1980</span><span>1990</span><span>2000</span><span>2010</span><span>2020</span>
              </div>
            </div>

            {/* Time Filter Buttons */}
            <div className="flex flex-wrap gap-2 pt-8">
              {timeFilters.map((f) => (
                <button key={f} className={cn("px-3 sm:px-4 py-1.5 text-[11px] sm:text-[12px] font-bold border transition-all rounded-sm", f === "Celá historie" ? "bg-[#C4B06D] border-[#C4B06D] text-black" : "border-zinc-800 text-white hover:border-zinc-600")}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* TABLE VIEW */
          <div className="w-full overflow-x-auto animate-in slide-in-from-bottom-2 duration-300">
            <table className="min-w-[700px] w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white text-[12px] sm:text-[13px] font-bold uppercase tracking-wider">
                  <th className="p-4">Datum</th>
                  {currencies.map(c => (
                    <th key={c} className="p-4 text-center">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={cn(
                      "text-[13px] sm:text-[14px] font-bold transition-all",
                      idx % 2 === 0 ? "bg-black text-white" : "bg-white text-black"
                    )}
                  >
                    <td className="p-4 border-none">{row.date}</td>
                    <td className="p-4 text-center border-none">{row.usd}</td>
                    <td className="p-4 text-center border-none">{row.gbp}</td>
                    <td className="p-4 text-center border-none">{row.eur}</td>
                    <td className="p-4 text-center border-none">{row.czk}</td>
                    <td className="p-4 text-center border-none">{row.pln}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}