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

    const chartData = {
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

    const chartOptions = {
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
                callback: function(value) {
                    return value.toFixed(2);
                }
            },
        },
    },
};

    return (
        <div className="w-full overflow-x-hidden">
            <div className="mx-auto">
                <div className="min-h-[550px]">
                    <div className="flex flex-col lg:flex-row gap-5 items-stretch">

                        {/* SIDEBAR */}
                        <div className="lg:w-[340px] w-full flex flex-col p-6 sm:p-10 bg-[#fafafa] border border-gray-200 rounded-sm shadow-sm">

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

                                <div className="bg-[#f23645] text-white text-[22px] py-1 px-6">
                                    {metalToggle === "zlato" ? "1907.06" : "25.32"}
                                </div>
                            </div>
                        </div>

                        {/* CHART */}
                        <div className="flex-1 bg-white border border-gray-200 rounded-sm flex flex-col min-w-0">

                            {/* TOOLBAR (RESTORED EXACT) */}
                            <GraphToolbar
                                timeframe={timeframe}
                                setTimeframe={setTimeframe}
                                chartType={chartType}
                                setChartType={setChartType}
                                showIndicator={showIndicator}
                                setShowIndicator={setShowIndicator}
                                downloadChart={downloadChart}
                            />

                            {/* CHART AREA */}
                            <div className="flex-1  px-2 pb-4 pt-4  relative">

                                {/* CHART FULL */}
                                <div className="w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px]">
                                    <Chart
                                        ref={chartRef}
                                        type={chartType}
                                        data={chartData as any}
                                        options={chartOptions as any}
                                    />
                                </div>

                                {/* INFO BAR (OVERLAY - PART OF CHART) */}
                                <div className="absolute top-0 left-0 w-full px-2 py-2 text-xs text-gray-700 bg-white/60 backdrop-blur-md z-10 pointer-events-none">
                                    <div className="flex items-center gap- flex-wrap">
                                        CFDs on Gold (US$ / OZ) • 1D • TVC
                                        <span className="text-green-500">●</span>
                                        O 1915.66 H 1919.02 L 1904.34 C 1907.06
                                        <span className="text-red-500">-10.54 (-0.55%)</span>
                                    </div>
                                    <div className="text-gray-400 mt-1">Vol 0</div>
                                </div>

{/* Bottom-left logo setup */}
<div className="absolute bottom-14 left-9 w-9 h-9 bg-white shadow-sm border border-gray-200 rounded-full opacity-70 flex items-center justify-center z-20">
    <img 
        src="/tradingview-logo.webp" 
        alt="TV" 
        className="w-5 h-5 object-contain" 
    />
</div>                                {/* SETTINGS */}
                                <div className="absolute  bottom-1 right-2 z-20">
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