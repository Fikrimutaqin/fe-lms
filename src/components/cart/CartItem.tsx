"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    author: string;
    institute: string;
    price: number;
    image: string;
  };
  removeItem: (id: number) => void;
  formatPrice: (price: number) => string;
  moveToWishlistText: string;
  removeText: string;
}

export default function CartItem({ item, removeItem, formatPrice, moveToWishlistText, removeText }: CartItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className="flex flex-col sm:flex-row items-center gap-8 pb-8 border-b border-gray-100 group"
    >
      <div className="relative w-full sm:w-64 aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-secondary/5">
        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
      </div>

      <div className="flex-1 space-y-4 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h3 className="text-2xl font-bold text-secondary tracking-tight">{item.title}</h3>
          <span className="text-2xl font-black text-secondary">{formatPrice(item.price)}</span>
        </div>

        <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
          {item.author} <span className="mx-2 text-gray-200">•</span> {item.institute}
        </p>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-4">
          <button className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-primary transition-colors tracking-widest">
            <Heart className="w-4 h-4" />
            {moveToWishlistText}
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-red-500 transition-colors tracking-widest"
          >
            <Trash2 className="w-4 h-4" />
            {removeText}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
