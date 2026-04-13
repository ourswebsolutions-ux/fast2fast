v"use client";

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
    <div className="border border-zinc-800 p-6 flex flex-col items-center bg-black rounded-sm group hover:border-zinc-700 transition-all duration-300">
      
      <span className="text-[#C9B067] text-[13px] uppercase tracking-[0.3em] mb-5 font-medium">
        {data.name}
      </span>

      <div className="flex items-baseline gap-1.5 mb-2">
        <span className="text-white text-[28px] font-bold">{data.price}</span>
        <span className="text-zinc-400 text-[10px] font-bold uppercase">
          {data.unit}
        </span>
      </div>

      <div
        className={cn(
          "flex items-center gap-1.5 px-3 py-1 rounded-sm text-[11px] font-bold mb-8",
          data.isDown ? "text-[#FF4D4D] bg-[#FF4D4D]/10" : "text-[#00E676] bg-[#00E676]/10"
        )}
      >
        {data.isDown ? <TrendingDown size={13} /> : <TrendingUp size={13} />}
        <span>{data.changeValue} ({data.changePercent})</span>
      </div>

      <div className="w-full h-28 relative mb-4">
        <div className="absolute inset-0">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="flex justify-between w-full text-[9px] text-zinc-500 font-bold">
        <span>8.00</span>
        <span>12.00</span>
        <span>16.00</span>
        <span>20.00</span>
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

  /* close on outside click */
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
    <section className="w-full bg-black py-12">
      <div className="max-w-[1350px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h2 className="text-[#C9B067] text-[32px] font-medium">
              Aktuální ceny
            </h2>
            <p className="text-zinc-500 text-[11px] font-bold">
              Aktualizováno: 15. 2. 2023 20.30
            </p>
          </div>

          {/* DROPDOWNS */}
          <div ref={dropdownRef} className="flex gap-2 relative">

            {/* Currency */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "currency" ? null : "currency")
                }
                className="bg-white px-4 py-2.5 flex items-center text-black text-[13px] font-bold rounded-sm min-w-[100px]"
              >
                {currency}
                <ChevronDown size={16} className="ml-2" />
              </button>

              {openDropdown === "currency" && (
                <div className="absolute mt-2 bg-black border border-zinc-800 w-full rounded-sm z-50">
                  {currencies.map((c) => (
                    <div
                      key={c}
                      onClick={() => {
                        setCurrency(c);
                        setOpenDropdown(null);
                      }}
                      className="px-3 py-2 text-sm text-white hover:bg-zinc-900 cursor-pointer"
                    >
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Unit */}
            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "unit" ? null : "unit")
                }
                className="bg-white px-4 py-2.5 flex items-center text-black text-[13px] font-bold rounded-sm min-w-[100px]"
              >
                {unit}
                <ChevronDown size={16} className="ml-2" />
              </button>

              {openDropdown === "unit" && (
                <div className="absolute mt-2 bg-black border border-zinc-800 w-full rounded-sm z-50">
                  {units.map((u) => (
                    <div
                      key={u}
                      onClick={() => {
                        setUnit(u);
                        setOpenDropdown(null);
                      }}
                      className="px-3 py-2 text-sm text-white hover:bg-zinc-900 cursor-pointer"
                    >
                      {u}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {metals.map((m, i) => (
            <MetalPriceCard key={i} data={m} />
          ))}
        </div>

      </div>
    </section>
  );
}