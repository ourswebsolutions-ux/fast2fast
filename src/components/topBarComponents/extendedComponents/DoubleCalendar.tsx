"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const days = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

const monthNames = [
  "Leden", "Únor", "Březen", "Duben", "Květen", "Červen",
  "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
];

const years = Array.from({ length: 2026 - 2000 + 1 }, (_, i) => 2026 - i);

const DoubleCalendar = ({
  onCancel,
  onConfirm,
  initialRange,
}: {
  onCancel: () => void;
  onConfirm: (range: { start: Date | null; end: Date | null }) => void;
  initialRange?: { start: Date | null; end: Date | null };
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [range, setRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>(initialRange || { start: null, end: null });

  const getMonthData = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { startDay, daysInMonth };
  };

  const addMonths = (date: Date, count: number) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + count);
    return newDate;
  };

  const handleYearChange = (year: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    setCurrentDate(newDate);
  };

  const handleMonthChange = (monthIdx: number, isRight: boolean) => {
    const newDate = new Date(currentDate);
    if (isRight) {
      newDate.setMonth(monthIdx - 1);
    } else {
      newDate.setMonth(monthIdx);
    }
    setCurrentDate(newDate);
  };

  const handleDateClick = (date: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      if (date < range.start) {
        setRange({ start: date, end: range.start });
      } else {
        setRange({ ...range, end: date });
      }
    }
  };

  const isInRange = (date: Date) => {
    if (!range.start || !range.end) return false;
    return date >= range.start && date <= range.end;
  };

  const isSelected = (date: Date) => {
    return (
      (range.start && date.toDateString() === range.start.toDateString()) ||
      (range.end && date.toDateString() === range.end.toDateString())
    );
  };

  const renderMonth = (baseDate: Date) => {
    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();
    const { startDay, daysInMonth } = getMonthData(year, month);

    return (
      <div className="grid grid-cols-7 gap-0 text-center min-w-[280px] sm:min-w-0">
        {days.map((d) => (
          <span key={d} className="text-[10px] sm:text-[11px] text-zinc-400 font-bold mb-2 uppercase">
            {d}
          </span>
        ))}
        {startDay > 0 && <div style={{ gridColumn: `span ${startDay}` }} />}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const fullDate = new Date(year, month, day);
          const selected = isSelected(fullDate);
          const inRange = isInRange(fullDate);

          return (
            <div
              key={day}
              onClick={() => handleDateClick(fullDate)}
              className={cn(
                "h-9 sm:h-10 w-full flex items-center justify-center text-[12px] sm:text-[13px] border border-zinc-100 cursor-pointer relative transition-all",
                selected
                  ? "bg-[#E6F9F0] text-[#2DB36F] font-bold z-10"
                  : inRange
                  ? "bg-[#F0FBF6] text-[#2DB36F]"
                  : "bg-white text-zinc-800 hover:bg-zinc-50"
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
        })}
      </div>
    );
  };

  const leftDate = currentDate;
  const rightDate = addMonths(currentDate, 1);

  return (
    <div className="absolute z-[100] bg-white text-black p-4 sm:p-6 shadow-2xl border border-zinc-200 mt-1 w-[92vw] sm:w-[680px] -left-4 sm:left-0 top-[110%] rounded-md">
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-10">
        
        {/* Left Month Section */}
        <div className="flex-1">
          {/* Dropdown Section Left */}
          <div className="flex gap-6 mb-4 border-b border-zinc-100 pb-2">
            <div className="relative flex items-center group">
              <select 
                value={leftDate.getMonth()} 
                onChange={(e) => handleMonthChange(Number(e.target.value), false)} 
                className="appearance-none bg-transparent text-[15px] font-medium outline-none cursor-pointer pr-5 z-10"
              >
                {monthNames.map((name, i) => <option key={i} value={i}>{name}</option>)}
              </select>
              <ChevronDown size={14} className="text-zinc-400 absolute right-0 pointer-events-none group-hover:text-black transition-colors" />
            </div>

            <div className="relative flex items-center group">
              <select 
                value={leftDate.getFullYear()} 
                onChange={(e) => handleYearChange(Number(e.target.value))} 
                className="appearance-none bg-transparent text-[15px] font-medium outline-none cursor-pointer pr-5 z-10"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <ChevronDown size={14} className="text-zinc-400 absolute right-0 pointer-events-none group-hover:text-black transition-colors" />
            </div>
          </div>

          <div className="relative flex items-center justify-center mb-4">
            <ChevronLeft size={20} onClick={() => setCurrentDate(addMonths(currentDate, -1))} className="absolute left-0 cursor-pointer text-zinc-400 hover:text-black" />
            <span className="font-bold text-[13px] sm:text-[14px] tracking-wider text-zinc-800 uppercase text-center">
              {monthNames[leftDate.getMonth()]} {leftDate.getFullYear()}
            </span>
          </div>
          {renderMonth(leftDate)}
        </div>

        {/* Right Month Section */}
        <div className="flex-1 sm:border-l sm:border-zinc-100 sm:pl-10">
          {/* Dropdown Section Right-Aligned */}
          <div className="flex justify-end gap-6 mb-4 border-b border-zinc-100 pb-2">
            <div className="relative flex items-center group">
              <select 
                value={rightDate.getMonth()} 
                onChange={(e) => handleMonthChange(Number(e.target.value), true)} 
                className="appearance-none bg-transparent text-[15px] font-medium outline-none cursor-pointer pr-5 z-10"
              >
                {monthNames.map((name, i) => <option key={i} value={i}>{name}</option>)}
              </select>
              <ChevronDown size={14} className="text-zinc-400 absolute right-0 pointer-events-none group-hover:text-black transition-colors" />
            </div>

            <div className="relative flex items-center group">
              <select 
                value={rightDate.getFullYear()} 
                onChange={(e) => handleYearChange(Number(e.target.value))} 
                className="appearance-none bg-transparent text-[15px] font-medium outline-none cursor-pointer pr-5 z-10"
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
              <ChevronDown size={14} className="text-zinc-400 absolute right-0 pointer-events-none group-hover:text-black transition-colors" />
            </div>
          </div>

          <div className="relative flex items-center justify-center mb-4">
            <span className="font-bold text-[13px] sm:text-[14px] tracking-wider text-zinc-800 uppercase text-center">
              {monthNames[rightDate.getMonth()]} {rightDate.getFullYear()}
            </span>
            <ChevronRight size={20} onClick={() => setCurrentDate(addMonths(currentDate, 1))} className="absolute right-0 cursor-pointer text-zinc-400 hover:text-black" />
          </div>
          {renderMonth(rightDate)}
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t border-zinc-100 pt-4 gap-4">
        <button onClick={onCancel} className="text-[13px] sm:text-[14px] font-bold text-zinc-800 underline underline-offset-4 hover:text-black order-2 sm:order-1">
          Zrušit výběr
        </button>
        <button onClick={() => onConfirm(range)} className="w-full sm:w-auto bg-[#C4B06D] text-white px-8 py-3 text-[13px] sm:text-[14px] font-bold hover:bg-[#b3a05f] transition-colors rounded-sm order-1 sm:order-2 shadow-sm">
          Potvrdit výběr
        </button>
      </div>
    </div>
  );
};

export default DoubleCalendar;