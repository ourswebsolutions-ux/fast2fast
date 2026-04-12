import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-white pt-12 pb-6 font-sans mt-28">
            {/* Main Wrapper - Exactly matching Navbar alignment at 1350px */}
            <div className="mx-auto w-full max-w-[1350px] px-4">

                {/* 1. Newsletter Box */}
                <div className="relative mb-16">
                    <div className="relative -mt-28 overflow-hidden bg-[#C9B067] py-8 px-6 md:px-10 lg:px-12 shadow-2xl rounded">
                        
                        {/* Background Pattern */}
                        <div className="absolute inset-0 z-0 opacity-20">
                            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-black/20 rotate-45 -translate-y-1/2" />
                            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/10 rotate-45 -translate-y-1/2 -translate-x-1/2" />
                            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-black/10 rotate-45 -translate-y-1/2" />
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
                            <h2 className="text-xl md:text-2xl lg:text-[24px] font-serif italic text-white text-center lg:text-left leading-tight max-w-md">
                                Nezmeškejte žádné novinky či slevy!
                            </h2>

                            {/* Input and Button with Gap (as requested) */}
                            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
                                <input
                                    type="email"
                                    placeholder="Napište Váš e-mail"
                                    className="bg-black/20 border-none px-6 py-3.5 w-full sm:w-64 lg:w-80 text-white placeholder:text-white/80 outline-none focus:bg-black/30 transition-all text-sm rounded"
                                />
                                <button className="bg-[#e0c885] hover:bg-white hover:text-[#C9B067] text-white px-8 py-3.5 font-bold uppercase text-[10px] md:text-[11px] tracking-[2px] transition-all whitespace-nowrap shadow-inner rounded">
                                    Přihlásit k odběru
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Grid Content Sections - No changes to structure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-[#C9B067] font-serif italic text-lg mb-6">Hlavní kategorie</h3>
                        <ul className="flex flex-col gap-3 text-[13px] text-zinc-400">
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Investiční zlato</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Investiční stříbro</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Pro sběratele</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Příslušenství</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-[#C9B067] font-serif italic text-lg mb-6">Důležité informace</h3>
                        <ul className="flex flex-col gap-3 text-[13px] text-zinc-400">
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Investice</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Online rádce</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Vše o výkupu</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Slovníček pojmů</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Blog</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">O nás</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-[#C9B067] font-serif italic text-lg mb-6">Vše o nákupu</h3>
                        <ul className="flex flex-col gap-3 text-[13px] text-zinc-400">
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Naše prodejny</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Hodnocení obchodu</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Obchodní podmínky</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Doprava a platba</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Záruka a reklamace</Link></li>
                            <li><Link href="#" className="hover:text-[#C9B067] transition-all">Odstoupení od smlouvy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 - Kontaktujte nás */}
                    <div className="lg:pr-10">
                        <h3 className="text-[#C9B067] font-serif italic text-lg mb-6">Kontaktujte nás</h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="mt-1 transition-transform group-hover:scale-110">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="border-b border-zinc-800 pb-3 max-w-[150px] w-full transition-colors group-hover:border-[#C9B067]">
                                    <p className="text-[12px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wider group-hover:text-[#C9B067]">Infolinka</p>
                                    <p className="text-[14px] text-zinc-400 group-hover:text-[#C9B067]">+420 800 01 02 03</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group cursor-pointer">
                                <div className="mt-1 transition-transform group-hover:scale-110">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="border-b border-zinc-800 pb-3 max-w-[150px] w-full transition-colors group-hover:border-[#C9B067]">
                                    <p className="text-[12px] font-bold text-zinc-400 mb-0.5 uppercase tracking-wider group-hover:text-[#C9B067]">E-mail</p>
                                    <p className="text-[14px] text-zinc-400 group-hover:text-[#C9B067]">info@gulden.cz</p>
                                </div>
                            </div>

                            <div className="flex gap-2.5 pt-2">
                                {[
                                    { name: 'FB', svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> },
                                    { name: 'IG', svg: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> },
                                    { name: 'YT', svg: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></> },
                                    { name: 'TW', svg: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path> }
                                ].map((icon, idx) => (
                                    <div key={idx} className="w-9 h-9 flex items-center justify-center bg-[#C9B067] text-white hover:bg-white hover:text-[#C9B067] rounded-md transition-all cursor-pointer shadow-sm">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{icon.svg}</svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Bottom Bar - All Images added back */}
                <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-zinc-500 uppercase tracking-[1px]">
                    <div className="flex items-center gap-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 opacity-80" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3 opacity-80" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-80" />
                    </div>
                    
                    <p className="font-medium text-center md:text-left text-zinc-400">© Copyright 2026 GULDEN. Všechna práva vyhrazena.</p>
                    
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="flex gap-[1.5px]">
                            <span className="w-2 h-2 bg-[#FFD700]" />
                            <span className="w-2 h-2 bg-[#00AEEF]" />
                        </div>
                        <span className="hover:text-white transition-all text-[10px]">Vytvořil Shoptet</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;