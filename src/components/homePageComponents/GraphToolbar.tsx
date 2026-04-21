"use client";
import React from "react";
import {
  Plus,
  Camera,
  ChevronDown,
  BarChart2,
  ChartNoAxesCombined,
  TrendingUp,
  
  LineChart,
  AreaChart,
} from "lucide-react";
import { FcCandleSticks, } from "react-icons/fc";
import { MdOutlineShowChart } from "react-icons/md";
import { BsBarChartLine } from "react-icons/bs";
import { BiCandles } from "react-icons/bi";
import { OHLCBarsIcon } from "../Customicons";


type ChartType = "line" | "candlestick" | "bars" | "area";

interface Props {
  timeframe: string;
  setTimeframe: (val: string) => void;
  chartType: ChartType;
  setChartType: (val: ChartType) => void;
  showIndicator: boolean;
  setShowIndicator: (val: boolean) => void;
  downloadChart: () => void;
}

const GraphToolbar: React.FC<Props> = ({
  timeframe,
  setTimeframe,
  chartType,
  setChartType,
  showIndicator,
  setShowIndicator,
  downloadChart,
}) => {
  return (
    <div className="flex items-center h-[45px] border-b border-gray-200 px-3 gap-1 bg-white text-[13px] select-none">
      {/* ASSET NAME */}
      <div className="flex items-center pr-3 border-r border-gray-100 h-full">
        <span className="font-bold text-black tracking-tight">GOLD</span>
      </div>

      {/* PLUS CIRCLE */}
      <div className="px- ml-6 cursor-pointer hover:bg-gray-100 h-full flex items-center justify-center">
        <div className="border border-gray-400 rounded-full p-[1px]">
          <Plus size={14} className="text-gray-600" />
        </div>
      </div>

      <div className="h-4 w-[1px] bg-gray-200 mx-1" />

      {/* TIMEFRAME SECTION */}
      <div className="flex items-center">
        {["1m", "30m", "1h"].map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t)}
            className={`px-2 py-1 font-medium hover:bg-gray-100 rounded-sm transition-colors ${
              timeframe === t ? "text-blue-600" : "text-gray-600"
            }`}
          >
            {t}
          </button>
        ))}
        <div 
           className={`flex items-center gap-[2px] px-2 py-1 cursor-pointer hover:bg-gray-100 rounded-sm ${timeframe === 'D' ? 'text-blue-600' : 'text-gray-600'}`}
           onClick={() => setTimeframe('D')}
        >
          <span className="font-medium">D</span>
          <ChevronDown size={12} className="text-gray-400" />
        </div>
      </div>

      <div className="h-4 w-[1px] bg-gray-200 mx-1" />

      {/* CHART TYPES */}
      <div className="flex items-center gap-1">
       
        <div className="p-1.5 cursor-pointer hover:bg-gray-100 rounded-sm text-gray-500">
          <OHLCBarsIcon size={22}  />
        </div>
         <div className="p-1.5 cursor-pointer hover:bg-gray-100 rounded-sm text-gray-500">
          <BiCandles size={22}  />
        </div>
        <div 
          className={`p-1.5 cursor-pointer hover:bg-gray-100 rounded-sm ${chartType === 'candlestick' ? 'text-blue-600' : 'text-gray-500'}`}
          onClick={() => setChartType('candlestick')}
        >
          <BsBarChartLine size={18}  />
        </div>

        <div 
          className={`p-1.5 cursor-pointer hover:bg-gray-100 rounded-sm text-gray-500`}
          
        >
          <MdOutlineShowChart size={18}  />

        </div>
        
        <div className="flex items-center p-1 cursor-pointer hover:bg-gray-100 rounded-sm text-gray-500 gap-[2px]">
          <ChevronDown size={12} className="text-gray-400" />
        </div>
      </div>

      <div className="h-4 w-[1px] bg-gray-200 mx-1" />

      {/* INDICATORS SECTION */}
      <div
        className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-gray-100 rounded-sm group"
        onClick={() => setShowIndicator(!showIndicator)}
      >
        <ChartNoAxesCombined 
            size={18} 
            className={`${showIndicator ? "text-blue-600" : "text-gray-700"}`} 
            strokeWidth={1.5} 
        />
        <span className={`${showIndicator ? "text-yellow-600" : "text-gray-700"}font-medium`}>Indicators</span>
      </div>

      {/* SNAPSHOT/CAMERA */}
      <div className="ml-auto flex items-center  border-gray-200 h-full px-">
        <div 
          className=" hover:bg-gray-100 rounded-sm cursor-pointer text-gray-600"
          onClick={downloadChart}
        >
          <Camera size={20} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default GraphToolbar;