import React from 'react';
import {
  ChevronRight,
  BookOpen,
  Coins,
  Package,
  Star,
  PhoneCall,
  Clock
} from 'lucide-react';
import GridLayout from "@/components/layouts/GridLayout";
import Testimonials from '@/components/homePageComponents/Testimonials'; // Testimonials component import ho gaya

export default function Page() {
  return (
    <GridLayout>
      <div className="main lg:col-span-12 w-full">
        {/* Split Background Section */}
        <section
          className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-6 lg:py-10 overflow-hidden"
          style={{ background: 'linear-gradient(to bottom, #F5F5F5 88%, #ffffff 88%)' }}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">

            <div className="grid grid-cols-12 gap-6 mb-12">

              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-3">
                <div className="bg-black text-white flex flex-col h-full shadow-2xl">
                  {[
                    { icon: "Au", label: "Investiční zlato" },
                    { icon: "Ag", label: "Investiční stříbro" },
                    { icon: <Coins size={18} />, label: "Pro sběratele" },
                    { icon: <BookOpen size={18} />, label: "Příslušenství", active: true },
                    { label: "Spoření" },
                    { label: "Online rádce" },
                    { label: "Naše prodejny" },
                    { label: "Kontakt" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-5 py-4 border-b border-white/5 cursor-pointer ${item.active ? "bg-[#C9B067] text-black" : "hover:bg-[#C9B067] hover:text-black"
                        }`}
                    >
                      <div className="flex items-center gap-4 text-[13px] font-bold uppercase">
                        {item.icon ? (
                          <span className="w-6 flex justify-center shrink-0">
                            {typeof item.icon === 'string' ? (
                              <span className="text-[10px] font-bold border border-current rounded-full w-5 h-5 flex items-center justify-center">{item.icon}</span>
                            ) : item.icon}
                          </span>
                        ) : <div className="w-6 shrink-0" />}
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight size={14} />
                    </div>
                  ))}
                </div>
              </div>

              {/* 3-Column Banner Area */}
              <div className="col-span-12 lg:col-span-9 bg-[#E5E7EB] p-6 lg:p-10 shadow-sm border border-zinc-100">
                <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-8">

                  {/* Text Column */}
                  <div className="flex flex-col items-center text-center flex-1">
                    <h2 className="text-2xl lg:text-4xl font-serif text-black font-medium mb-2">
                      Investiční zlato
                    </h2>
                    <p className="text-zinc-500 text-sm italic mb-8">
                      Zlato, které ochrání vaše úspory.
                    </p>
                    <button className="bg-[#C9B067] text-white px-10 rounded py-3 uppercase text-[11px] font-bold tracking-widest hover:brightness-110 transition-all">
                      Prohlédnout
                    </button>
                  </div>

                  {/* Image Column */}
                  <div className="flex-1 flex justify-center">
                    <img
                      src="/gold-assets.png"
                      alt="Gold Assets"
                      className="max-w-full h-auto drop-shadow-2xl"
                    />
                  </div>

                  {/* Banners Column */}
                  <div className="w-full lg:w-[220px] flex flex-col gap-2">
                    <div className="bg-black text-white py-3.5 text-center text-[10px] font-bold uppercase tracking-widest cursor-pointer">Banner č. 1</div>
                    <div className="bg-black text-white py-3.5 text-center text-[10px] font-bold uppercase tracking-widest cursor-pointer">Banner č. 2</div>
                    <div className="relative bg-[#C9B067] text-white py-3.5 text-center text-[10px] font-bold uppercase tracking-widest">
                      <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-[#C9B067]" />
                      Investiční zlato
                    </div>
                    <div className="bg-black text-white py-3.5 text-center text-[10px] font-bold uppercase tracking-widest cursor-pointer">Banner č. 4</div>
                    <div className="bg-black text-white py-3.5 text-center text-[10px] font-bold uppercase tracking-widest cursor-pointer">Banner č. 5</div>
                  </div>

                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-40">
              <div className="flex flex-col items-center mb-16">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3].map((i) => <span key={i} className="w-1.5 h-1.5 rotate-45 bg-[#C9B067]" />)}
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif text-black text-center italic">V čem jsme dobří</h2>
              </div>

              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                {[
                  { icon: <Package size={26} />, title: "Doprava zdarma", sub: "nad 5 000 Kč" },
                  { icon: <Star size={26} />, title: "Nejlepší výkupní", sub: "ceny" },
                  { icon: <PhoneCall size={26} />, title: "Jsme tu pro vás,", sub: "rádi poradíme" },
                  { icon: <Clock size={26} />, title: "Odeslání zboží", sub: "do 24h" },
                ].map((feature, i) => (
                  <div key={i} className="col-span-6 lg:col-span-3 flex flex-col items-center group">
                    <div className="relative w-32 h-32 lg:w-36 lg:h-36 flex items-center justify-center">
                      <div className="absolute inset-0 rotate-45 bg-white border border-zinc-100 shadow-lg group-hover:bg-[#C9B067] transition-all duration-300" />
                      <div className="relative z-10 flex flex-col items-center text-center px-2">
                        <div className="text-[#C9B067] group-hover:text-white mb-2">{feature.icon}</div>
                        <h3 className="text-[10px] lg:text-[11px] font-bold uppercase text-black group-hover:text-white transition-colors">{feature.title}</h3>
                        <p className="text-[8px] lg:text-[9px] text-zinc-500 group-hover:text-zinc-100 uppercase transition-colors">{feature.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
        <Testimonials />

      </div>
    </GridLayout>
  );
}