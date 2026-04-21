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
  currency: string; // New
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
        data: [10, 45, 30, 60, 50, 85, 45],
        borderColor: "#C9B067",
        borderWidth: 2,
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
    <div className="border border-white/70 hover:border-white/100 p-6 flex flex-col items-center bg-black rounded-sm group hover:border-white transition-all duration-300 min-w-[300px] md:min-w-0">
      
      <span className="text-[#C9B067] text-[13px]  tracking-[0.4em] mb-5 font-bold">
        {data.name}
      </span>

      {/* PRICE SECTION - Dynamic Currency & Unit */}
      <div className="flex items-baseline gap-1.5 mb-3">
        <span className="text-white text-[24px] font-bold tracking-tight">
          {data.price}
        </span>
        <span className="text-zinc-200 text-[16px] font-bold  tracking-tight">
          <span className="uppercase text-[24px]">{data.currency}</span>/{data.unit}
        </span>
      </div>

      <div
        className={cn(
          "flex items-center gap-1.5 px-4 py-1.5 rounded-[4px] text-[11px] font-bold mb-10",
          data.isDown ? "text-[#fca5a5] bg-[#7f1d1d]" : "text-[#6ee7b7] bg-[#064e3b]"
        )}
      >
        {data.isDown ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
        <span>{data.changeValue} ({data.changePercent})</span>
      </div>

      {/* CHART AREA */}
      <div className="w-full flex h-[160px] relative">
        <div className="flex-1 relative">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full border-t border-zinc-800/80 h-0" />
            ))}
            <div className="w-full border-t border-white/90 h-0" />
          </div>
          <div className="absolute inset-0 z-10 ">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
        <div className="flex flex-col justify-between text-[10px] text-zinc-500 font-bold h-full leading-none pb-2 ml-2">
          <span>2000</span>
          <span>1750</span>
          <span>1500</span>
          <span>1250</span>
          <span>1000</span>
          <span className="text-zinc-400">0</span>
        </div>
      </div>

      {/* X-AXIS */}
      <div className="w-full flex justify-between pr-10">
        {[
          { label: "8.00", align: "items-start" },
          { label: "12.00", align: "items-center" },
          { label: "16.00", align: "items-center" },
          { label: "20.00", align: "items-end" },
        ].map((tick, idx) => (
          <div key={idx} className={cn("flex flex-col ", tick.align)}>
            <div className="h-2 w-[1px] bg-white/90 mb-1" />
            <span className="text-[10px] text-white font-bold">{tick.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
export default function ActualniCeny() {
  const [currency, setCurrency] = useState("USD");
  const [unit, setUnit] = useState("Oz");
  const [openDropdown, setOpenDropdown] = useState<null | "currency" | "unit">(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currencies = ["USD", "EUR", "GBP"];
  const units = ["Oz", "Gram", "Kg"];

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
    { name: "Zlato", price: "1249,3", currency, unit, changeValue: "84,788", changePercent: "0,235%", isDown: true },
    { name: "Stříbro", price: "16,39", currency, unit, changeValue: "84,788", changePercent: "0,235%", isDown: false },
    { name: "Platina", price: "16,39", currency, unit, changeValue: "84,788", changePercent: "0,235%", isDown: false },
    { name: "Palladium", price: "1249,3", currency, unit, changeValue: "84,788", changePercent: "0,235%", isDown: true },
  ];

  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <h2 className="text-[#C9B067] text-[30px] font-medium leading-tight">Aktuální ceny</h2>
            <p className="text-zinc-500 text-[12px] font-bold">Aktualizováno: 15. 2. 2023 20.30</p>
          </div>

          <div ref={dropdownRef} className="flex gap-3">
            {/* Currency Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === "currency" ? null : "currency")}
                className="bg-white px-5 py-2 flex items-center justify-between text-black text-[14px] font-bold rounded-sm min-w-[110px]"
              >
                {currency} <ChevronDown size={18} className="ml-2" />
              </button>
              {openDropdown === "currency" && (
                <div className="absolute mt-1 bg-[#111] border border-zinc-800 w-full rounded-sm z-50 shadow-xl">
                  {currencies.map((c) => (
                    <div key={c} onClick={() => { setCurrency(c); setOpenDropdown(null); }} className="px-4 py-2 text-sm text-white hover:bg-zinc-900 cursor-pointer">{c}</div>
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
                {unit} <ChevronDown size={18} className="ml-2" />
              </button>
              {openDropdown === "unit" && (
                <div className="absolute mt-1 bg-[#111] border border-zinc-800 w-full rounded-sm z-50 shadow-xl">
                  {units.map((u) => (
                    <div key={u} onClick={() => { setUnit(u); setOpenDropdown(null); }} className="px-4 py-2 text-sm text-white hover:bg-zinc-900 cursor-pointer">{u}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar">
          {metals.map((m, i) => (
            <MetalPriceCard key={i} data={m} />
          ))}
        </div>
      </div>
    </section>
  );
}