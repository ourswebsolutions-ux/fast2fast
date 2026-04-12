"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DoubleCalendar = ({ onCancel, onConfirm }: { onCancel: () => void, onConfirm: () => void }) => {
  const days = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

  const isSelected = (month: string, day: number) => {
    if (month === "March" && day >= 26) return true;
    if (month === "April" && day <= 31) return true;
    return false;
  };

  const DayBox = ({ day, month }: { day: number; month: string }) => {
    const selected = isSelected(month, day);
    return (
      <div
        className={cn(
          "h-9 w-full flex items-center justify-center text-[13px] border border-zinc-200 cursor-pointer relative transition-all",
          selected ? "bg-[#E6F9F0] text-[#2DB36F] font-bold z-10" : "bg-white text-zinc-800 hover:bg-zinc-50"
        )}
      >
        {day}
        {selected && (
          <>
            <div className="absolute inset-0 border-[1.5px] border-[#2DB36F]" />
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#2DB36F]" />
          </>
        )}
      </div>
    );
  };

  return (
    <div className={cn(
      "absolute z-[100] bg-white text-black p-4 sm:p-6 shadow-2xl border border-zinc-200 mt-1 font-sans animate-in fade-in slide-in-from-top-2",
      // Desktop: Starts from 'Od:' section (approx 110px from left)
      // Mobile: Centered/Full width
      "w-[95vw] sm:w-[680px] left-[-20px] sm:left-[110px] top-[105%]"
    )}>
      
      {/* Month Selectors Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-6">
        <div className="flex-1 flex items-center gap-2 border-b border-zinc-200 pb-2">
          <span className="font-bold text-zinc-700 text-[16px]">Březen</span>
          <ChevronDown size={14} className="text-zinc-400" />
          <span className="font-bold text-zinc-700 text-[16px] ml-auto">2023</span>
          <ChevronDown size={14} className="text-zinc-400" />
        </div>
        <div className="flex-1 flex items-center gap-2 border-b border-zinc-200 pb-2">
          <span className="font-bold text-zinc-700 text-[16px]">Duben</span>
          <ChevronDown size={14} className="text-zinc-400" />
          <span className="font-bold text-zinc-700 text-[16px] ml-auto">2023</span>
          <ChevronDown size={14} className="text-zinc-400" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
        {/* LEFT: BŘEZEN */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <ChevronLeft size={18} className="cursor-pointer text-zinc-400 hover:text-black" />
            <span className="font-bold text-[13px] tracking-wider text-zinc-800 uppercase">Březen 2023</span>
            <div className="w-4" />
          </div>
          <div className="grid grid-cols-7 gap-0 text-center">
            {days.map(d => <span key={d} className="text-[11px] text-zinc-400 font-bold mb-2">{d}</span>)}
            <div className="col-span-2 border border-transparent" />
            {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
              <DayBox key={d} day={d} month="March" />
            ))}
          </div>
        </div>

        {/* RIGHT: DUBEN */}
        <div className="flex-1 sm:border-l border-zinc-100 sm:pl-10 pt-6 sm:pt-0 border-t sm:border-t-0">
          <div className="flex justify-between items-center mb-4">
            <div className="w-4" />
            <span className="font-bold text-[13px] tracking-wider text-zinc-800 uppercase">Duben 2023</span>
            <ChevronRight size={18} className="cursor-pointer text-zinc-400 hover:text-black" />
          </div>
          <div className="grid grid-cols-7 gap-0 text-center">
            {days.map(d => <span key={d} className="text-[11px] text-zinc-400 font-bold mb-2">{d}</span>)}
            <div className="col-span-5 border border-transparent" />
            {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
              <DayBox key={d} day={d} month="April" />
            ))}
            <DayBox day={31} month="April" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-8 flex justify-between items-center border-t border-zinc-100 pt-4">
        <button onClick={onCancel} className="text-[14px] font-bold text-zinc-800 underline underline-offset-4 hover:text-black">
          Zrušit výběr
        </button>
        <button onClick={onConfirm} className="bg-[#C4B06D] text-white px-6 sm:px-8 py-3 text-[14px] font-bold hover:bg-[#b3a05f] transition-colors rounded-sm shadow-sm">
          Potvrdit výběr
        </button>
      </div>
    </div>
  );
};

const ChevronDown = ({ size, className }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);

export default DoubleCalendar;