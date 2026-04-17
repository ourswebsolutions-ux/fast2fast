"use client";

import React, { useState } from "react";
import { ChevronDown, LineChart, Table as TableIcon } from "lucide-react";
import { cn } from "@/lib/utils";
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
    { date: "08-02-2023", usd: "1880,75", gbp: "1555,76", eur: "1450,04", czk: "1555,76", pln: "1450,04" },
    { date: "07-02-2023", usd: "1873,80", gbp: "1561,81", eur: "1748,26", czk: "1561,81", pln: "1748,26" },
    { date: "06-02-2023", usd: "1873,50", gbp: "1556,69", eur: "1739,54", czk: "1556,69", pln: "1739,54" },
    { date: "03-02-2023", usd: "1910,00", gbp: "1559,71", eur: "1447,27", czk: "1559,71", pln: "1447,27" },
  ];

  return (
    <div className="w-full bg-black p-4 sm:p-6 font-sans select-none text-white overflow-hidden">
      <div className="max-w-[1350px] mx-auto">

        {/* TABS - exact same as your second code */}
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

        {/* CONTROLS - exact same as your second code (other design untouched) */}
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

        {/* GRAPH + FILTERS - exactly same as your first component (graph area only changed) */}
        {activeTab === "Graf" ? (
          <div className="animate-in fade-in duration-500">
            <div className="w-full h-[300px] sm:h-[480px] relative mb-12">
              <Line
                data={{
                  labels: Array.from({ length: 51 }, (_, i) => 1970 + i),
                  datasets: [{
                    data: [50,60,70,80,90,120,150,180,220,280,350,420,650,720,580,520,480,450,420,400,380,360,340,320,300,280,260,240,220,200,180,170,160,150,140,130,120,110,100,90,80,70,60,55,50,60,80,120,180,300,450,700,1100,1400,1700,1850,1750,1650,1550,1450,1350,1250,1150,1050,950,850,750,650,550,450,350,250,150,100,50,100,300,600,900,1200,1500,1700,1850,1950,1850,1750,1650,1550,1450,1350,1250,1150,1050,950,850,750],
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
                      grid: { display: true, tickLength: 6 },
                      border: { display: true, color: "#ffffff" },
                      ticks: { color: "#9ca3af", font: { size: 10 }, maxTicksLimit: 6, padding: 6 },
                    },
                    y: {
                      display: true,
                      position: "right",
                      min: 0,
                      max: 2000,
                      grid: { color: "rgba(255,255,255,0.05)" },
                      ticks: { color: "#9ca3af", font: { size: 10 }, stepSize: 250 },
                    },
                  },
                }}
              />
            </div>

            {/* Time Filter Buttons - same as first */}
            <div className="flex flex-wrap gap-2">
              {timeFilters.map((f) => (
                <button
                  key={f}
                  className={cn(
                    "px-4 sm:px-5 py-2 text-[11px] sm:text-[12px] font-bold rounded-sm border transition-all active:scale-95 flex-grow sm:flex-grow-0 text-center",
                    f === "Celá historie" ? "bg-[rgb(199,177,93)] text-black border-[#C9B067]" : "bg-black text-white border-zinc-800 hover:border-zinc-500"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* TABLE - exact same as your second code */
          <div className="w-full overflow-x-auto bg-black p-1">
            <table className="min-w-[700px] w-full text-left border-collapse">
              <thead>
                <tr className="bg-black text-white text-[13px] font-bold">
                  <th className="p-4 w-[150px]"></th>
                  <th className="p-4 text-center">USD $</th>
                  <th className="p-4 text-center">GBP £</th>
                  <th className="p-4 text-center">EUR €</th>
                  <th className="p-4 text-center">CZK Kč</th>
                  <th className="p-4 text-center">PLN zł</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={cn(
                      "text-[14px] font-medium transition-all",
                      idx % 2 === 0 ? "bg-white text-black" : "bg-black text-white"
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