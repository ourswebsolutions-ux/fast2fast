"use client";
import React from "react";
import { Heart, Star } from "lucide-react";

type Props = {
  product: any;
  selectedId?: number | null;
  setSelectedId?: (id: number) => void;

  quantity?: number;
  onInc?: () => void;
  onDec?: () => void;

  isFavorite?: boolean;

  // optional dynamic control
  showImage?: boolean;
  showTitle?: boolean;
  showButton?: boolean;
};

const ProductCard: React.FC<Props> = ({
  product,
  selectedId,
  setSelectedId,
  quantity = 1,
  onInc,
  onDec,
  isFavorite = false,

  showImage = true,
  showTitle = true,
  showButton = true,
}) => {
  return (
    <div
      className={`bg-white p-6 border-2 border-gray-100 lg:h-[540px] flex flex-col relative transition-all duration-300 hover:border-[#C5B367] 
      ${selectedId === product.id ? "shadow-lg" : ""}`}
      onClick={() => setSelectedId?.(product.id)}
    >
      {/* BADGES (SAME) */}
   <div className="flex flex-col gap-1.5 h-14">
                      {product.badges.map((badge : string) => {
                        const isNew = badge === "Novinka";

                        return isNew ? (
                          <div
                            key={badge}
                            className="inline-block -ml-2 w-fit p-[1px] bg-gray-300"
                            style={{
                              WebkitMask: `
            radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0,
            radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0,
            radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%,
            radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%
          `,
                              WebkitMaskSize: "51% 51%",
                              WebkitMaskRepeat: "no-repeat",
                            }}
                          >
                            <span
                              className="block bg-white text-[11px] px-3 py-1 font-semibold text-black-700"
                              style={{
                                WebkitMask: `
              radial-gradient(circle at 0 0, transparent 4px, black 0) 0 0,
              radial-gradient(circle at 100% 0, transparent 4px, black 0) 100% 0,
              radial-gradient(circle at 0 100%, transparent 4px, black 0) 0 100%,
              radial-gradient(circle at 100% 100%, transparent 4px, black 0) 100% 100%
            `,
                                WebkitMaskSize: "51% 51%",
                                WebkitMaskRepeat: "no-repeat",
                              }}
                            >
                              {badge}
                            </span>
                          </div>
                        ) : (
                          <span
                            key={badge}
                            className="w-fit text-[10px] bg-black-50 border border-gray-200 px-2 py-0.5 text-black-400 font-sans rounded-full"
                          >
                            {badge}
                          </span>
                        );
                      })}
                    </div>

      {/* IMAGE */}
      <div className="h-62 flex flex-col items-center -mt-8 justify-center relative mb-6">
        {showImage ? (
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-[300px] object-contain transition-transform hover:scale-105"
          />
        ) : (
          <div className="h-full w-full" />
        )}

        <Heart
          size={20}
          className={`absolute bottom-0 right-0 -mb-8 cursor-pointer transition-colors ${
            isFavorite
              ? "fill-[#C5B367] text-[#C5B367]"
              : "text-gray-200 hover:text-[#C5B367]"
          }`}
        />
      </div>

      {/* RATING */}
      <div className="flex justify-center gap-0.5 mb-3 mt-6 h-4">
        {product.rating > 0 &&
          [...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]" />
          ))}
      </div>

      {/* TITLE */}
      <div className="text-center mb-9 min-h-[60px]">
        {showTitle ? (
          <>
            <h3 className="text-[13px] underline mb-2 line-clamp-1">
              {product.title}
            </h3>
            <p className="text-xl text-[rgb(199,177,93)]">
              {product.price}
            </p>
          </>
        ) : (
          <div className="h-full" />
        )}
      </div>

      {/* FOOTER */}
      <div
        className="flex items-stretch gap-3 justify-center h-[50px]"
        onClick={(e) => e.stopPropagation()}
      >
        {showButton ? (
          <>
            <div className="flex border border-gray-200 items-center h-[50px] w-[80px]">
              <button onClick={onDec} className="w-8 text-red-400 text-lg">−</button>
              <input value={quantity} readOnly className="w-6 text-center text-sm" />
              <button onClick={onInc} className="w-8 text-green-500 text-lg">+</button>
            </div>

            <button className="bg-[#00A651] text-white text-[11px] px-3 h-[50px] w-[180px]">
              Přidat do košíku
            </button>
          </>
        ) : (
          <div className="w-full h-full" />
        )}
      </div>
    </div>
  );
};

export default ProductCard;