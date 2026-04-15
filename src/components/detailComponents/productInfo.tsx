"use client";
import React, { useState } from 'react';

const ProductInfoSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Popis');

    const tabs = [
        { name: 'Popis' },
        { name: 'Specifikace' },
        { name: 'Historie ceny' },
        { name: 'Možnosti doručení' },
        { name: 'Vše o výkupu' }
    ];

    return (
        <section className="mt-16 py-12 px-4 font-sans bg-white">
            {/* Main width back to 1350px */}
            <div className="max-w-[1350px] mx-auto">

                {/* Section Title */}
                <div className="text-center mb-10">
                    <div className="flex items-center justify-center gap-1.5 mb-6">
                        <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
                        <div className="w-2 h-2 bg-[#D1D1D1] rotate-45" />
                        <div className="w-1.5 h-1.5 bg-[#D1D1D1] rotate-45" />
                    </div>
                    <h2 className="text-4xl font-serif text-[#333333]">Informace o produktu</h2>
                </div>

                {/* Navigation Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`py-3.5 px-2 text-[13px] font-bold tracking-wider transition-all border border-[#C5A059]/40
                                ${activeTab === tab.name
                                    ? 'bg-[#C5A059] text-white border-[#C5A059] hover:bg-[#b38f4d]'
                                    : 'bg-white text-[#666666] hover:bg-[#C5A059] hover:text-white'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Main Content Container */}
                <div className="bg-white border border-gray-100 p-10 md:p-16 lg:p-20 shadow-[0_10px_50px_rgba(0,0,0,0.05)] rounded-sm">
                    
                    {/* First Block: Text width restricted to match image */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
                        <div className="lg:col-span-8 lg:text-right order-2 lg:order-1 flex flex-col lg:items-end">
                            <h3 className="text-xl font-serif text-[#333333]  mb-2">Investiční zlatá mince</h3>
                            <h2 className="text-3xl md:text-[40px]  text-[#333333] mb-6 leading-tight lg:max-w-[600px]">
                                Maple Leaf 1 oz 999,9/1000 Au
                            </h2>
                            <p className="text-[#444444] text-[15px] md:text-[16px] leading-[1.8] text-justify lg:text-right lg:max-w-[600px]">
                                Kanadská královská mincovna razí investiční mince Maple Leaf (javorový list) již od roku 1979. 
                                Tvůrcem návrhu mince je Walter Ott. Mince neobsahují žádné jiné kovy, jen čisté zlato vytěžené 
                                ve zlatých dolech v Kanadě. Tato zlatá mince je nabízena ve velikostech 1/20 oz, 1/10 oz, 1/4 oz, 
                                1/2 oz a 1 oz a je zaručen obsah kovu (v trojských uncích) 0,9999 (24 karátů), liší se pouze na lícové 
                                i rubové straně indikací váhy a nominální hodnoty.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
                            <img
                                src="/imgcoin.svg"
                                alt="Maple Leaf Gold"
                                className="w-[180px] md:w-[240px] lg:w-full lg:max-w-[300px] drop-shadow-2xl transition-transform hover:scale-105 duration-500"
                            />
                        </div>
                    </div>

                    {/* Second Block: Text width restricted */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        <div className="lg:col-span-4 flex justify-center">
                            <img
                                src="/imgcoin.svg"
                                alt="Mince a pouzdro"
                                className="w-[160px] md:w-[220px] lg:w-full lg:max-w-[280px] drop-shadow-xl"
                            />
                        </div>
                        <div className="lg:col-span-8 flex flex-col items-start">
                            <h3 className="text-xl font-serif text-[#333333] mb-2 ">Krátká specifikace</h3>
                            <h2 className="text-3xl md:text-[40px] font-serif text-[#333333] mb-6 leading-tight">
                                Proč investiční zlatou minci?
                            </h2>
                            <div className="space-y-4 text-[#444444] text-[15px] leading-relaxed lg:max-w-[550px]">
                                <p><span className="font-bold text-[#333333]">Emitent:</span> Kanada</p>
                                <p>
                                    <span className="font-bold text-[#333333]">Líc:</span> Královna Alžběta II. hledící vpravo text 
                                    "ELIZABETH II 50 DOLLARS" Rok Autor Arnold Machin (1979-1989) Vyobrazení Alžběty II se od roku 1990 změnilo. 
                                    Novým autorem je de Pedery-Hunt (1990+)
                                </p>
                                <p>
                                    <span className="font-bold text-[#333333]">Rub:</span> Maple leaf - Javorový list text 
                                    "CANADA 9999 FINE GOLD 1 OZ OR PUR 9999" Autor Cosme Saffioti
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductInfoSection;