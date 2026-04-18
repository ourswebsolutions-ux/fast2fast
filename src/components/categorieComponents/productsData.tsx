"use client";
import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const productsData = [
    { id: 1, title: "31.1g investiční zlatý slitek Argor Heraeus SA", price: "42 505 Kč", badge: "Novinka", rating: 5, img: "/card-1.svg" },
    { id: 2, title: "Investiční zlato - slitek 500 g - Pamp fortuna", price: "665 342 Kč", badge: "Novinka", rating: 5, img: "/imgcoin23.svg" },
    { id: 3, title: "Zlatá investiční mince Wiener Philharmoniker...", price: "43 024 Kč", badge: "Tip", rating: 5, img: "/card-3.svg" },
    { id: 4, title: "Rakousko Uherská novoražba 100 Koruna...", price: "95 000 Kč", badge: "Novinka", rating: 5, img: "/card-4.svg" },
    { id: 5, title: "Rakousko Uherská novoražba 100 Koruna...", price: "95 000 Kč", badge: "Novinka", rating: 5, img: "/card-4.svg" },
    { id: 6, title: "250g investiční zlatý slitek Argor Heraeus SA", price: "337 106 Kč", badge: "Novinka", rating: 5, img: "/card-5.svg" },
    { id: 7, title: "Zlatá investiční mince Rok Tygra Lunar III 1 Oz...", price: "67 110 Kč", badge: "Tip", rating: 5, img: "/card-6.svg" },
    { id: 8, title: "31.1g investiční zlatý slitek Valcambi", price: "42 389 Kč", badge: "Novinka", rating: 5, img: "/card-7.svg" },
    { id: 9, title: "31.1g investiční zlatý slitek Valcambi", price: "42 389 Kč", badge: "Novinka", rating: 5, img: "/card-7.svg" },
    { id: 10, title: "50g investiční zlatý slitek Valcambi | Litý slitek", price: "68 310 Kč", badge: "Novinka", rating: 5, img: "/card-8.svg" },
    { id: 11, title: "Zlatá mince 10000 Kč Kněžna Ludmila 2021...", price: "78 900 Kč", badge: "Tip", rating: 5, img: "/card-9.svg" },
    { id: 12, title: "Investiční zlato - slitek 500 g - Pamp fortuna", price: "665 342 Kč", badge: "Novinka", rating: 5, img: "/imgcoin23.svg" },
];

type QuantityAction = 'inc' | 'dec';
type QuantitiesState = Record<number, number>;
type FavoritesState = Record<number, boolean>;

const ProductGrid = () => {
    const [quantities, setQuantities] = useState<QuantitiesState>({});
    const [favorites, setFavorites] = useState<FavoritesState>({});

    const handleQuantity = (id: number, type: QuantityAction) => {
        setQuantities(prev => ({
            ...prev,
            [id]: type === 'inc'
                ? (prev[id] ?? 1) + 1
                : Math.max(1, (prev[id] ?? 1) - 1)
        }));
    };

    const toggleFavorite = (id: number) => {
        setFavorites(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="bg-white pb-10 px-4 font-serif">
            <div className="max-w-[1350px] mx-auto">

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
                    {productsData.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white flex flex-col border border-gray-100 hover:border-[#C5B367] p-6 transition-all duration-300 relative group h-full"
                        >
                            {/* Badge Container */}
                            <div className="h-12 flex items-start">
                                {product.badge === "Novinka" ? (
                                    <div
                                        className="inline-block w-fit p-[1px] bg-gray-300"
                                        style={{
                                            WebkitMask: `radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%`,
                                            WebkitMaskSize: "51% 51%", WebkitMaskRepeat: "no-repeat",
                                        }}
                                    >
                                        <span className="block bg-white text-[11px] px-3 py-1 font-semibold text-gray-700"
                                            style={{
                                                WebkitMask: `radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0, radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0, radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%, radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%`,
                                                WebkitMaskSize: "51% 51%", WebkitMaskRepeat: "no-repeat",
                                            }}>
                                            {product.badge}
                                        </span>
                                    </div>
                                ) : (
                                    <span className="w-fit text-[10px] bg-gray-50 border border-gray-200 px-3 py-0.5 text-gray-400 font-sans rounded-full">
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                          {/* Image & Heart Section */}
<div className="relative h-52 flex items-center justify-center mb-4">
    <img
        src={product.img}
        alt={product.title}
        className="max-h-full max-w-[180px] object-contain group-hover:scale-105 transition-transform"
    />
    {/* Posunuto o kousek níže pomocí bottom-[-8px] */}
    <Heart
        size={20}
        onClick={() => toggleFavorite(product.id)}
        className={`absolute bottom-[-8px] right-0 cursor-pointer transition-colors ${
            favorites[product.id] ? "fill-[#C5B367] text-[#C5B367]" : "text-gray-200 hover:text-[#C5B367]"
        }`}
    />
</div>

                            {/* Rating */}
                            <div className="flex justify-center gap-0.5 mb-4 h-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-[#f8dc61] text-[#C5B367]" />
                                ))}
                            </div>

                            {/* Title & Price */}
                            <div className="text-center mb-6">
                                <h3 className="text-[13px] text-gray-500 underline underline-offset-4 mb-2 line-clamp-1 hover:text-black transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-xl text-[#C5A059] font-medium tracking-tight font-sans">
                                    {product.price}
                                </p>
                            </div>

                            {/* Footer Actions */}
                            <div className="flex items-stretch gap-2 h-10 mt-auto">
                                <div className="flex border border-gray-200 items-center bg-white">
                                    <button onClick={() => handleQuantity(product.id, 'dec')} className="px-3 text-red-400 text-xl">−</button>
                                    <input type="text" value={quantities[product.id] ?? 1} readOnly className="w-8 text-center text-sm outline-none" />
                                    <button onClick={() => handleQuantity(product.id, 'inc')} className="px-3 text-green-500 text-xl">+</button>
                                </div>
                                <button className="flex-grow bg-[#00A651] hover:bg-[#008d44] text-white text-[11px] font-bold tracking-wider transition-colors ">
                                    Přidat do košíku
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-16 mb-8 gap-6 w-full">
                    <div className="hidden md:block"></div>
                    <div className="flex justify-center">
                        <button className="bg-[#C5B367] text-white px-10 py-3 text-[14px] hover:bg-[#b5a256] transition-all">
                            Další produkty
                        </button>
                    </div>
                    <div className="flex justify-center md:justify-end items-center gap-4 text-[13px] font-sans text-[#C5B367]">
                        <div className="flex items-center gap-1 cursor-pointer hover:underline">
                            <ChevronLeft size={14} />
                            <span className="underline underline-offset-4">Předchozí</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="cursor-pointer underline underline-offset-4">1</span>
                            <span className="text-black font-bold px-1">2</span>
                            {[3, 4, 5, 6].map((n) => (
                                <span key={n} className="cursor-pointer underline underline-offset-4">{n}</span>
                            ))}
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer hover:underline">
                            <span className="underline underline-offset-4">Další</span>
                            <ChevronRight size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;