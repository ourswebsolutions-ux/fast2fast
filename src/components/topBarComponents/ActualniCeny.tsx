"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

/* ================= CHART JS ================= */
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

/* ================= TYPES ================= */
interface MetalData {
  name: string;
  price: string;
  unit: string;
  changeValue: string;
  changePercent: string;
  isDown: boolean;
}

/* ================= METAL CARD ================= */
const MetalPriceCard = ({ data }: { data: MetalData }) => {
  const chartData = {
    labels: ["8", "10", "12", "14", "16", "18", "20"],
    datasets: [
      {
        data: [30, 45, 40, 60, 55, 70, 50],
        borderColor: "#C9B067",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
        fill: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: { x: { display: false }, y: { display: false } },
  } as const;

  return (
    <div className="border border-zinc-800 p-5 flex flex-col items-center bg-black rounded-sm group hover:border-zinc-700 transition-all duration-300 min-w-[290px] md:min-w-0 snap-center">
      
      <span className="text-[#C9B067] text-[14px] uppercase tracking-[0.3em] mb-4 font-medium">
        {data.name}
      </span>

      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-white text-[30px] font-bold tracking-tight">{data.price}</span>
        <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider">
          {data.unit}
        </span>
      </div>

      <div
        className={cn(
          "flex items-center gap-1.5 px-4 py-1 rounded-sm text-[11px] font-bold mb-8",
          data.isDown ? "text-[#FF4D4D] bg-[#FF4D4D]/10" : "text-[#00E676] bg-[#00E676]/10"
        )}
      >
        {data.isDown ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
        <span>{data.changeValue} ({data.changePercent})</span>
      </div>

      {/* GRAPH AREA WITH ALIGNED LABELS */}
      <div className="w-full relative flex gap-3 h-[140px] mb-2">
        {/* Left Side: Graph with Grid Lines */}
        <div className="flex-1 relative h-full">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-[2px]">
            {[2000, 1750, 1500, 1250, 1000, 0].map((_, i) => (
              <div key={i} className="w-full border-t border-zinc-800/60" />
            ))}
          </div>
          
          <div className="absolute inset-0 z-10">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Right Side: Price Scale (Aligned with lines) */}
        <div className="flex flex-col justify-between text-[10px] text-zinc-500 font-bold h-full leading-none">
          <span>2000</span>
          <span>1750</span>
          <span>1500</span>
          <span>1250</span>
          <span>1000</span>
          <span>0</span>
        </div>
      </div>

      {/* X-Axis Time Labels */}
      <div className="flex justify-between w-full text-[10px] text-zinc-500 font-bold pr-10 pl-2">
        <div className="flex flex-col items-center">
            <div className="h-1.5 w-[1px] bg-zinc-700 mb-1" />
            <span>8.00</span>
        </div>
        <div className="flex flex-col items-center">
            <div className="h-1.5 w-[1px] bg-zinc-700 mb-1" />
            <span>12.00</span>
        </div>
        <div className="flex flex-col items-center">
            <div className="h-1.5 w-[1px] bg-zinc-700 mb-1" />
            <span>16.00</span>
        </div>
        <div className="flex flex-col items-center">
            <div className="h-1.5 w-[1px] bg-zinc-700 mb-1" />
            <span>20.00</span>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
export default function ActualniCeny() {
  const [currency, setCurrency] = useState("USD");
  const [unit, setUnit] = useState("Ozt");
  const [openDropdown, setOpenDropdown] = useState<null | "currency" | "unit">(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currencies = ["USD", "EUR", "GBP"];
  const units = ["Ozt", "Gram", "Kg"];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const metals: MetalData[] = [
    { name: "Zlato", price: "1249,3", unit, changeValue: "84,788", changePercent: "0,235%", isDown: true },
    { name: "Stříbro", price: "16,39", unit, changeValue: "84,788", changePercent: "0,235%", isDown: false },
    { name: "Platina", price: "16,39", unit, changeValue: "84,788", changePercent: "0,235%", isDown: false },
    { name: "Palladium", price: "1249,3", unit, changeValue: "84,788", changePercent: "0,235%", isDown: true },
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <h2 className="text-[#C9B067] text-[36px] font-medium leading-tight">
              Aktuální ceny
            </h2>
            <p className="text-zinc-500 text-[12px] font-bold mt-1">
              Aktualizováno: 15. 2. 2023 20.30
            </p>
          </div>

          <div ref={dropdownRef} className="flex gap-3">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "currency" ? null : "currency")}
                className="bg-white px-5 py-2 flex items-center justify-between text-black text-[14px] font-bold rounded-sm min-w-[110px]"
              >
                {currency}
                <ChevronDown size={18} className="ml-2" />
              </button>
              {openDropdown === "currency" && (
                <div className="absolute mt-1 bg-[#111] border border-zinc-800 w-full rounded-sm z-50 shadow-xl">
                  {currencies.map((c) => (
                    <div key={c} onClick={() => { setCurrency(c); setOpenDropdown(null); }} className="px-4 py-2 text-sm text-white hover:bg-zinc-900 cursor-pointer">
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Unit Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "unit" ? null : "unit")}
                className="bg-white px-5 py-2 flex items-center justify-between text-black text-[14px] font-bold rounded-sm min-w-[110px]"
              >
                {unit}
                <ChevronDown size={18} className="ml-2" />
              </button>
              {openDropdown === "unit" && (
                <div className="absolute mt-1 bg-[#111] border border-zinc-800 w-full rounded-sm z-50 shadow-xl">
                  {units.map((u) => (
                    <div key={u} onClick={() => { setUnit(u); setOpenDropdown(null); }} className="px-4 py-2 text-sm text-white hover:bg-zinc-900 cursor-pointer">
                      {u}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SCROLLABLE GRID FOR MOBILE */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {metals.map((m, i) => (
            <MetalPriceCard key={i} data={m} />
          ))}
        </div>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}