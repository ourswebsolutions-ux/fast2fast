"use client";

import React, { useState } from "react";
import { ChevronDown, Calendar, LineChart, Table as TableIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import DoubleCalendar from "./extendedComponents/DoubleCalendar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export default function ExtendedChart() {
  const [activeTab, setActiveTab] = useState("Graf");
  const [activeFilter, setActiveFilter] = useState("Celá historie");
  const [showCalendar, setShowCalendar] = useState(false);

  const [selectedRange, setSelectedRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });


  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("USD");

  // Aapka data yahan add hoga
  const currencies = [
    { code: "USD", label: "US Dollar" },
    { code: "EUR", label: "Euro" },
    { code: "CZK", label: "Czech Koruna" },
    { code: "GBP", label: "British Pound" }
  ];
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

        {/* TOP TABS - untouched */}
        <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-6">
          <div className="flex gap-4 sm:gap-8">
            <button onClick={() => setActiveTab("Graf")} className={cn("flex items-center gap-2 text-[13px] sm:text-[14px] font-bold pb-2 transition-all relative", activeTab === "Graf" ? "text-[#C9B067]" : "text-zinc-500 hover:text-white")}>
              <LineChart size={18} /> Graf
              {activeTab === "Graf" && <div className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-[rgb(199,177,93)]" />}
            </button>
            <button onClick={() => setActiveTab("Tabulka")} className={cn("flex items-center gap-2 text-[13px] sm:text-[14px] font-bold pb-2 transition-all relative", activeTab === "Tabulka" ? "text-[#C9B067]" : "text-zinc-500 hover:text-white")}>
              <TableIcon size={18} /> Tabulka
              {activeTab === "Tabulka" && <div className="absolute bottom-[-9px] left-0 w-full h-[2px] bg-[rgb(199,177,93)]" />}
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-white text-[12px] font-bold cursor-pointer group">
            <div className="w-4 h-2 bg-[#FF0000] mr-1" />
            <span className="group-hover:text-[#C9B067] transition-colors">Komerční banka</span>
            <ChevronDown size={14} className="text-zinc-500" />
          </div>
        </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
          {/* CURRENCY DROPDOWN */}
          <div className="relative w-full lg:w-[120px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white px-4 py-2 flex items-center justify-between w-full text-black text-[14px] font-bold rounded-sm border border-gray-200 shadow-sm active:scale-95 transition-all"
            >
              {selected}
              <ChevronDown
                size={16}
                strokeWidth={3}
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-xl rounded-sm z-20 py-1 overflow-hidden">
                  {currencies.map((item) => (
                    <div
                      key={item.code}
                      onClick={() => {
                        setSelected(item.code);
                        setIsOpen(false);
                      }}
                      className={`px-4 py-2 text-[13px] cursor-pointer transition-colors
                        ${selected === item.code ? "bg-[#D1B870] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      <span className="font-bold">{item.code}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          
      
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 relative">
            <span className="text-white text-[13px] font-medium whitespace-nowrap">Konkrétní datum</span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="flex flex-1 sm:flex-none cursor-pointer group" onClick={() => setShowCalendar(!showCalendar)}>
                <div className="bg-black border border-zinc-700 px-3 py-2 text-[11px] text-zinc-400 w-full sm:w-32 group-hover:border-zinc-500">
                  Od: <span className="text-white ml-1 font-bold">{formatDate(selectedRange.start)}</span>
                </div>
                <div className="bg-[rgb(199,177,93)] p-2 flex items-center justify-center"><Calendar className="text-black" size={16} /></div>
              </div>
              <div className="flex flex-1 sm:flex-none cursor-pointer group" onClick={() => setShowCalendar(!showCalendar)}>
                <div className="bg-black border border-zinc-700 px-3 py-2 text-[11px] text-zinc-400 w-full sm:w-32 group-hover:border-zinc-500">
                  Do: <span className="text-white ml-1 font-bold">{formatDate(selectedRange.end)}</span>
                </div>
                <div className="bg-[rgb(199,177,93)] p-2 flex items-center justify-center"><Calendar className="text-black" size={16} /></div>
              </div>
            </div>
            {showCalendar && (
              <DoubleCalendar initialRange={selectedRange} onCancel={() => setShowCalendar(false)} onConfirm={(range) => { setSelectedRange(range); setShowCalendar(false); }} />
            )}
          </div>
        </div>

        {/* DYNAMIC CONTENT - only graph area updated to match first component exactly */}
        <div className="w-full h-[300px] sm:h-[480px] relative mb-12">
          {activeTab === "Graf" ? (
            <>
            {/* GRAPH AREA */}
<div className="relative w-full h-full flex flex-col">
  <div className="w-full h-full relative">

    {/* CHART */}
    <div className="w-full h-full">
   <Line
  data={{
    labels: Array.from({ length: 51 }, (_, i) => 1970 + i), // 1970 to 2020
    datasets: [{
      data: [
        // Exact visual match to image (approximated from graph shape)
        50,60,70,80,90,120,150,180,220,280,350,420,650,720,580,520,480,450,420,400,
        380,360,340,320,300,280,260,240,220,200,180,170,160,150,140,130,120,110,100,90,
        80,70,60,55,50,60,80,120,180,300,450,700,1100,1400,1700,1850,1750,1650,1550,1450,
        1350,1250,1150,1050,950,850,750,650,550,450,350,250,150,100,50,100,300,600,900,
        1200,1500,1700,1850,1950,1850,1750,1650,1550,1450,1350,1250,1150,1050,950,850,750
      ],
      borderColor: "#C9B067",
      borderWidth: 2.5,
      tension: 0.35,
      pointRadius: 0,
      fill: false,
    }],
  }}
  options={{
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { top: 10, right: 0, bottom: 25, left: 10 } },
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
   scales: {
 x: {
  display: true,
  offset: true,
  grid: {
    display: true,                 // 👈 MUST be true
   
    tickLength: 6,                // 👈 pointer size
  },
  border: {
    display: true,
    color: "#ffffff",
  },
  ticks: {
    color: "#9ca3af",
    font: { size: 10 },
    maxTicksLimit: 6,
    padding: 6,
  },
},
  y: {
    display: true,
    position: "right",
    min: 0,
    max: 2000,
    grid: {
      color: "rgba(255,255,255,0.05)",
    },
    ticks: {
      color: "#9ca3af",
      font: { size: 10 },
      stepSize: 250,
    },
  },
},
  }}
/>
    </div>
  </div>

  
</div>
            </>
          ) : (
            /* TABLE - untouched */
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

        {/* FILTER BUTTONS - untouched */}
        <div className="flex flex-wrap gap-2 mt-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] font-bold rounded-sm border transition-all active:scale-95 flex-grow sm:flex-grow-0 text-center",
                activeFilter === filter
                  ? "bg-[rgb(199,177,93)] text-white border-[#C9B067]"
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