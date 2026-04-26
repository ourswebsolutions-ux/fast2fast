"use client";
import React, { useState } from 'react';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../ProductCard';
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
        <div className="bg-white pb-10 px- font-serif">
            <div className="max-w-[1412px] mx-auto">

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
                   {productsData.map((product) => (
  <div key={product.id} className="h-full">

    <ProductCard
      product={{
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.img,
        badges: [product.badge],
        rating: product.rating,
      }}

      selectedId={null}
      setSelectedId={() => {}}

      quantity={quantities[product.id] ?? 1}
      onInc={() => handleQuantity(product.id, "inc")}
      onDec={() => handleQuantity(product.id, "dec")}

      isFavorite={favorites[product.id]}
      onToggleFavorite={() => toggleFavorite(product.id)}
    />

  </div>
))}
                </div>

                {/* Pagination Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-16 mb-8 gap-6 w-full">
                    <div className="hidden md:block"></div>
                    <div className="flex justify-center">
                        <button className="bg-[#C5B367] text-white px-12 lg:px-13 py-3.5 text-[14px] hover:bg-[#b5a256] transition-all">
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