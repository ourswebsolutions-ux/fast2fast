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
    <div className="w-full bg-black p-4 sm:p-6 font-sans">
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

        {/* CONTROLS GRID - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 items-center mb-8">
          
          {/* 1. Select Dropdowns */}
          <div className="w-full lg:col-span-3 flex gap-2">
            <div className="relative flex-1">
              <select className="w-full bg-white text-black px-4 py-2.5 text-[13px] sm:text-[14px] font-bold appearance-none rounded-sm outline-none">
                <option>Zlato</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={16} />
            </div>
            <div className="relative flex-1">
              <select className="w-full bg-white text-black px-4 py-2.5 text-[13px] sm:text-[14px] font-bold appearance-none rounded-sm outline-none">
                <option>Kg</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={16} />
            </div>
            {activeTab === "Tabulka" && (
                <div className="relative flex-1">
                <select className="w-full bg-white text-black px-4 py-2.5 text-[13px] sm:text-[14px] font-bold appearance-none rounded-sm outline-none">
                  <option>2023</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none" size={16} />
              </div>
            )}
          </div>

          {/* 2. Currency Buttons - Grid layout on mobile for better alignment */}
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

          {/* 3. AM / PM Buttons - Side by side on mobile */}
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
          <>
            <div className="w-full h-[250px] sm:h-[400px] relative border-b border-zinc-800 mb-6 overflow-hidden">
              {[2000, 1750, 1500, 1250, 1000, 750, 500, 250, 0].map((val) => (
                <div key={val} className="absolute w-full border-t border-zinc-900/50 flex justify-end" style={{ bottom: `${(val/2000) * 100}%` }}>
                  <span className="text-zinc-600 text-[9px] sm:text-[10px] pr-2 -mt-2">{val}</span>
                </div>
              ))}
              <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full stroke-[2] sm:stroke-[1.5] fill-none text-[#C4B06D]">
                <path d="M0,380 L100,370 L200,350 L280,310 L300,240 L310,250 L350,290 L400,310 L500,320 L600,330 L700,280 L720,180 L800,220 L850,150 L900,60 L950,120 L1000,90" />
              </svg>
            </div>
            {/* Timeline filters - Scrollable on very small screens */}
            <div className="flex flex-wrap sm:flex-nowrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {timeFilters.map((f) => (
                <button key={f} className={cn("px-3 sm:px-4 py-1.5 text-[11px] sm:text-[12px] font-bold border whitespace-nowrap rounded-sm", f === "Celá historie" ? "bg-[#C4B06D] border-[#C4B06D] text-black" : "border-zinc-800 text-white")}>
                  {f}
                </button>
              ))}
            </div>
          </>
        ) : (
          /* TABLE VIEW - Mobile Responsive Scroll */
          <div className="w-full overflow-x-auto bg-white rounded-sm shadow-xl">
            <table className="min-w-[700px] w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white text-[12px] sm:text-[13px] font-bold">
                  <th className="p-3 sm:p-4 border-r border-zinc-800">Datum</th>
                  {currencies.map(c => (
                    <th key={c} className="p-3 sm:p-4 text-center border-r border-zinc-800 last:border-0">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} className={cn("text-[13px] sm:text-[14px] font-medium border-b border-zinc-100 last:border-0", idx % 2 === 0 ? "bg-white text-black" : "bg-zinc-50 text-black")}>
                    <td className="p-3 sm:p-4 border-r border-zinc-200 font-bold">{row.date}</td>
                    <td className="p-3 sm:p-4 text-center border-r border-zinc-200">{row.usd}</td>
                    <td className="p-3 sm:p-4 text-center border-r border-zinc-200">{row.gbp}</td>
                    <td className="p-3 sm:p-4 text-center border-r border-zinc-200">{row.eur}</td>
                    <td className="p-3 sm:p-4 text-center border-r border-zinc-200">{row.czk}</td>
                    <td className="p-3 sm:p-4 text-center">{row.pln}</td>
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