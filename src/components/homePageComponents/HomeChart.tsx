"use client";
import React, { useState, useMemo, useRef } from "react";
import {
    Settings
} from "lucide-react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import {
    CandlestickController,
    CandlestickElement,
} from "chartjs-chart-financial";

import GraphToolbar from "./GraphToolbar";
import "chartjs-adapter-date-fns";
import { Chart } from "react-chartjs-2";

if (typeof window !== "undefined") {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        TimeScale,
        Tooltip,
        Legend,
        PointElement,
        LineElement,
        CandlestickController,
        CandlestickElement
    );
}
type ChartType = "line" | "candlestick";

const PriceChart = () => {
    const chartRef = useRef<any>(null);

    const [metalToggle, setMetalToggle] = useState("zlato");
    const [timeframe, setTimeframe] = useState("D");
    const [chartType, setChartType] = useState<ChartType>("candlestick");
    const [showIndicator, setShowIndicator] = useState(false);

    const downloadChart = () => {
        if (chartRef.current) {
            const link = document.createElement("a");
            link.download = "chart.png";
            link.href = chartRef.current.toBase64Image();
            link.click();
        }
    };

    const generateData = useMemo(() => {
        const points = [];
        let price = metalToggle === "zlato" ? 1820 : 21.5;
        const startDate = new Date("2022-07-01");

        for (let i = 0; i < 100; i++) {
            const d = new Date(startDate);
            d.setDate(startDate.getDate() + i * 2);

            const volatility = metalToggle === "zlato" ? 15 : 0.5;
            const change = Math.random() * volatility - volatility / 2;

            const open = price;
            const close = price + change;

            points.push({
                x: d.getTime(),
                o: open,
                h: Math.max(open, close) + Math.random() * 5,
                l: Math.min(open, close) - Math.random() * 5,
                c: close,
                y: close,
            });

            price = close;
        }
        return points;
    }, [metalToggle]);

    const maData = useMemo(() => {
        return generateData.map((p, i, arr) => {
            const window = 7;
            if (i < window) return { x: p.x, y: p.c };
            const avg =
                arr.slice(i - window, i).reduce((s, c) => s + c.c, 0) / window;
            return { x: p.x, y: avg };
        });
    }, [generateData]);

   const chartData: ChartData = {
        datasets: [
            {
                type: chartType,
                label: "Price",
                data: generateData,
                borderColor:
                    chartType === "line"
                        ? "#2962FF"
                        : { up: "#089981", down: "#f23645", unchanged: "#787b86" },
                backgroundColor:
                    chartType === "line"
                        ? "transparent"
                        : { up: "#089981", down: "#f23645", unchanged: "#787b86" },
                borderWidth: chartType === "line" ? 2 : 1,
                pointRadius: 0,
            },
            {
                type: "line",
                label: "MA",
                data: maData,
                borderColor: "#f23645",
                borderWidth: 1,
                pointRadius: 0,
                hidden: !showIndicator,
                borderDash: [5, 5],
            },
        ],
    };

    const chartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                right: 10 // Right side par thodi jagah taaki price labels na kat-te hon
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                type: "time",
                grid: {
                    display: true,
                    color: "rgba(240, 243, 250, 0.8)", // Light grid lines
                    drawTicks: false,
                },
                time: {
                    unit: "month",
                    displayFormats: {
                        month: "MMM" // 'Jul', 'Aug', 'Sep' format ke liye
                    }
                },
                ticks: {
                    color: "#787b86",
                    font: { size: 12 },
                    padding: 3, // Ticks aur axis ke darmiyan gap
                     autoSkip: false,   // 👈 ADD THIS
                }
            },
            y: {
                position: "right", // Image ki tarah right side par
                grid: {
                    color: "#f0f3fa",
                    drawBorder: false, // Left side ki border line hatane ke liye
                },
                ticks: {
                    color: "#787b86",
                    font: { size: 11 },
                    padding: 8,
                    // Price ke sath .00 dikhane ke liye
                    callback: function (value: string | number) {
    const num = typeof value === "string" ? parseFloat(value) : value;
    return num.toFixed(2);
}
                },
            },
        },
    };

    return (
        <div className="w-full overflow-x-hidden">
            <div className="mx-auto ">
                <div className="min-h-[578px] border">
                    <div className="flex flex-col lg:flex-row gap-5 items-stretch">

                        {/* SIDEBAR - Restored Padding and Width */}
                        <div className="lg:w-[333px]  w-full lg:h-[563px]  flex flex-col p-6 sm:p-10 bg-[#fafafa] border border-gray-200 rounded-sm shadow-sm">
                            <div className="flex w-full mb-6 sm:mb-10 gap-2">
                                <button
                                    onClick={() => setMetalToggle("zlato")}
                                    className={`flex-1 py-2 text-[11px] font-bold ${metalToggle === "zlato"
                                        ? "bg-[rgb(199,177,93)] text-white"
                                        : "text-gray-400 bg-white border border-gray-200"
                                        }`}
                                >
                                    Zlato
                                </button>
                                <button
                                    onClick={() => setMetalToggle("stribro")}
                                    className={`flex-1 py-2 text-[11px] font-bold ${metalToggle === "stribro"
                                        ? "bg-[rgb(199,177,93)] text-white"
                                        : "text-gray-400 bg-white border border-gray-200"
                                        }`}
                                >
                                    Stříbro
                                </button>
                            </div>

                            <div className="flex flex-1 flex-col items-center justify-center text-center">
                                <h3 className="text-[20px] sm:text-[30px] mb-4">
                                    Aktuální hodnota :
                                </h3>
                                <div className="bg-[#f23645] text-white text-[22px] py-1 px-6 font-sans">
                                    {metalToggle === "zlato" ? "1907.06" : "25.32"}
                                </div>
                            </div>
                        </div>

                        {/* CHART CONTAINER */}
                        <div className="flex-1 bg-white border border-gray-200 rounded-sm flex flex-col min-w-0">
                            <GraphToolbar
                                timeframe={timeframe}
                                setTimeframe={setTimeframe}
                                chartType={chartType}
                                setChartType={setChartType}
                                showIndicator={showIndicator}
                                setShowIndicator={setShowIndicator}
                                downloadChart={downloadChart}
                            />

                            <div className="flex-1 px-2 pb-4 pt-4 relative">
                                {/* CHART FULL - Responsive Height preserved */}
                                <div className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] relative">
                                    <Chart
                                        ref={chartRef}
                                        type={chartType }
                                        data={chartData  }
                                        options={chartOptions  }
                                    />
                                </div>

                                <div className="absolute top-0 left-0 w-full px-3 py-2 z-10 pointer-events-none">
                                    {/* Container for Horizontal Scroll on Mobile */}
                                    <div className="overflow-x-auto no-scrollbar pointer-events-auto">
                                        <div className="flex items-center gap-2.5 whitespace-nowrap min-w-max">

                                            {/* 1. Symbol Info (Exact as per image) */}
                                            <div className="flex items-center gap-1   font-sans text-[12px] sm:text-[13px]">
                                                <span>CFDs on Gold (US$ / OZ)</span>
                                                <span className="text-[#787b86]">·</span>
                                                <span>1D</span>
                                                <span className="text-[#787b86]">·</span>
                                                <span>TVC</span>
                                            </div>

                                            {/* 2. Status Badges */}
                                            <div className="flex items-center gap-1 ml-1">
                                                <div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#e3f2fd]">
                                                    <div className="w-2 h-2 rounded-full bg-[#089981]" />
                                                </div>
                                                <div className="flex items-center justify-center px-1 h-[18px] rounded-sm bg-[#fdeeee] text-[#f23645]">
                                                    <span className="text-[11px] font-bold">≈</span>
                                                </div>
                                            </div>

                                            {/* 3. Price Data (O, H, L, C) */}
                                            <div className="flex items-center gap-3 text-[12px] sm:text-[13px] font-medium ml-1 font-sans">
                                                <div className="flex gap-1">
                                                    <span className="text-[#787b86]">O</span>
                                                    <span className="text-[#f23645]">1915.66</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <span className="text-[#787b86]">H</span>
                                                    <span className="text-[#f23645]">1919.02</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <span className="text-[#787b86]">L</span>
                                                    <span className="text-[#f23645]">1904.34</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <span className="text-[#787b86]">C</span>
                                                    <span className="text-[#f23645]">1907.06</span>
                                                </div>

                                                {/* Change Info */}
                                                <div className="text-[#f23645] font-semibold">
                                                    -10.54 (-0.55%)
                                                </div>
                                            </div>

                                            {/* 4. Mobile ONLY Volume (Line ke andar hi scroll hoga) */}
                                            <div className="flex sm:hidden items-center gap-1.5 text-[12px] border-l border-gray-200 pl-2 ml-1">
                                                <span className="text-[#787b86] font-medium uppercase">Vol</span>
                                                <span className="text-[#f23645] font-medium">0</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 5. Laptop ONLY Volume (Line ke niche jaisa image mein hai) */}
                                    <div className="hidden sm:flex items-center gap-1.5 text-[11px] mt-0.5 ml-[2px]">
                                        <span className="text-[#787b86] font-medium uppercase">Vol</span>
                                        <span className="text-[#f23645] font-medium">0</span>
                                    </div>
                                </div>

                                {/* TradingView Logo - Restored Exact Position */}
                                <div className="absolute bottom-14 left-9 w-9 h-9 bg-white shadow-sm border border-gray-200 rounded-full opacity-70 flex items-center justify-center z-20">
                                    <img
                                        src="/tradingview-logo.webp"
                                        alt="TV"
                                        className="w-5 h-5 object-contain"
                                    />
                                </div>

                                {/* SETTINGS - Restored Exact Position */}
                                <div className="absolute bottom-1 right-2 z-20">
                                    <div className="cursor-pointer hover:bg-gray-50 p-1 rounded">
                                        <Settings size={18} className="text-gray-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceChart;