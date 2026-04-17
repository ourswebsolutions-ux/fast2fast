"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import {
    ChevronDown,
    Plus,
    Camera,
    ChartNoAxesCombined,
    LineChart,
    Activity,
    AlignHorizontalDistributeCenter
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

const PriceChart = () => {
    const chartRef = useRef<any>(null);

    const [metalToggle, setMetalToggle] = useState("zlato");
    const [timeframe, setTimeframe] = useState("D");
    const [chartType, setChartType] = useState<"candlestick" | "line">(
        "candlestick"
    );
    const [showIndicator, setShowIndicator] = useState(false);


    



    const downloadChart = () => {
        if (chartRef.current) {
            const link = document.createElement("a");
            link.download = `chart.png`;
            link.href = chartRef.current.toBase64Image();
            link.click();
        }
    };

    // DATA (UNCHANGED)
    const generateData = useMemo(() => {
        const points: any[] = [];
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
        return generateData.map((p: any, i: number, arr: any[]) => {
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
                type: chartType as any,
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
                type: "line" as const,
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

    const chartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: {
                type: "time",

                grid: { color: "rgba(240, 243, 250, 0.6)", drawTicks: false },

                time: {
                    unit: "month",
                    stepSize: 1,
                    displayFormats: {
                        month: "MMM"
                    }
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    color: "#787b86",
                    font: { size: 11 }
                }
            },
            y: {
                position: "right",
                grid: { color: "#f0f3fa" },
                ticks: { color: "#787b86", font: { size: 10 } },
            },
        },
    };

    return (
        <div className="w-full overflow-x-hidden">
            <div className="mx-auto">

                <div className="min-h-[550px]">


                    <div className="flex flex-col lg:flex-row gap-5 items-stretch">

                        {/* SIDEBAR (NO CHANGE) */}
              <div className="lg:w-[340px] w-full flex flex-col p-6 sm:p-10 bg-[#fafafa] border border-gray-200 rounded-sm shadow-sm">

    {/* TOP BUTTONS */}
    <div className="flex w-full mb-6 sm:mb-10 gap-2">

        <button
            onClick={() => setMetalToggle("zlato")}
            className={`flex-1 py-2 text-[11px] font-bold ${
                metalToggle === "zlato"
                    ? "bg-[rgb(199,177,93)] text-white hover:bg-[#b39e55]"
                    : "text-gray-400 bg-white border border-gray-200 hover:text-white hover:bg-[#b39e55]"
            }`}
        >
            Zlato
        </button>

        <button
            onClick={() => setMetalToggle("stribro")}
            className={`flex-1 py-2 text-[11px] font-bold ${
                metalToggle === "stribro"
                    ? "bg-[rgb(199,177,93)] text-white"
                    : "text-gray-400 bg-white border border-gray-200 hover:bg-[rgb(199,177,93)] hover:text-white"
            }`}
        >
            Stříbro
        </button>

    </div>

    {/* CENTER CONTENT */}
    <div className="flex flex-1 flex-col items-center justify-center text-center">

        <h3 className="text-[20px] sm:text-[30px] text-black-400 mb-4 racking-[0.25em]">
            Aktuální hodnota :
        </h3>

        <div className="bg-[#f23645] text-white text-[22px] sm:text-xl py-1 px-6 sm:px-10 font-lightshadow-lg">
            {metalToggle === "zlato" ? "1907.06" : "25.32"}
        </div>

    </div>

</div>
                        {/* CHART AREA */}
                  {/* CHART AREA - Final version with Gear (right) & TV (left) */}
<div className="flex-1 bg-white border border-gray-200 rounded-sm flex flex-col min-w-0 h-full">

    {/* TOOLBAR */}
    <div className="flex items-center px-6 py-3 border-b gap-3 text-sm overflow-x-auto whitespace-nowrap flex-shrink-0">

        <span className="font-bold text-black">GOLD</span>

        <div className="flex items-center gap-1 text-gray-400">
            <Plus size={18} className="cursor-pointer hover:text-black" onClick={() => alert('Add clicked')} />
        </div>

        <div className="h-5 w-[1px] bg-gray-200 mx-1" />

        <div className="flex items-center gap-1">
            {["1m", "30m", "1h", "D"].map((t) => (
                <button
                    key={t}
                    onClick={() => setTimeframe(t)}
                    className={`px-3 py-1 text-[13px] font-medium rounded-sm ${timeframe === t 
                        ? "bg-blue-50 text-blue-600" 
                        : "text-gray-500 hover:text-black"}`}
                >
                    {t}
                </button>
            ))}
            <ChevronDown size={16} className="text-gray-400 ml-1" />
        </div>

        <div className="h-5 w-[1px] bg-gray-200 mx-2" />

        <div className="flex items-center gap-4 text-gray-400">
            <span className="cursor-pointer text-lg leading-none hover:text-black">↑↓</span>
            <span className="cursor-pointer text-lg leading-none hover:text-black">
                <AlignHorizontalDistributeCenter size={19} />
            </span>
            
            <ChartNoAxesCombined 
                size={19} 
                className={`cursor-pointer ${chartType === "candlestick" ? "text-blue-600" : ""}`} 
                onClick={() => setChartType("candlestick")} 
            />
            
            <LineChart 
                size={19} 
                className={`cursor-pointer ${chartType === "line" ? "text-blue-600" : ""}`} 
                onClick={() => setChartType("line")} 
            />
        </div>

        <div className="h-5 w-[1px] bg-gray-200 mx-2" />

        <div 
            className={`flex items-center gap-1 text-sm cursor-pointer ${showIndicator ? "text-blue-600" : "text-gray-500"}`}
            onClick={() => setShowIndicator(!showIndicator)}
        >
            <Activity size={19} />
            <span>Indicators</span>
            <ChevronDown size={16} />
        </div>

        <div className="ml-auto">
            <Camera 
                size={20} 
                className="text-gray-400 cursor-pointer hover:text-black" 
                onClick={downloadChart} 
            />
        </div>
    </div>

    {/* Top info */}
    <div className="px-6 py-2 border-b bg-white text-xs text-gray-500 flex-shrink-0">
        CFDs on Gold (US$ / OZ) • 1D • TVC 
        <span className="text-green-500 mx-1">●</span>
        <span className="text-green-600">O 1915.66</span> 
        <span className="text-green-600">H 1919.02</span> 
        <span className="text-green-600">L 1904.34</span> 
        <span className="text-green-600">C 1907.06</span> 
        <span className="text-red-500">-10.54 (-0.55%)</span>
        
        <div className="mt-1 text-gray-400">Vol 0</div>
    </div>

    {/* CHART AREA - Full height with icons */}
    <div className="flex-1 p-6 relative border-b border-gray-200 min-h-0">
        <div className="w-full h-full">
            {typeof window !== "undefined" && (
                <Chart
                    ref={chartRef}
                    type={chartType as any}
                    data={chartData}
                    options={chartOptions}
                />
            )}
        </div>

        {/* Bottom Left - TV Icon */}
        <div className="absolute bottom-4 left-6">
            <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white">
                TV
            </div>
        </div>

        {/* Bottom Right - Gear Icon */}
        <div className="absolute bottom-4 right-6 text-gray-400 cursor-pointer hover:text-black">
            ⚙️
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