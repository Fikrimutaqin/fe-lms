"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface CheckoutItemCardProps {
  item: {
    id: number;
    title: string;
    category: string;
    modules: number;
    price: number;
    image: string;
  };
  formatPrice: (price: number) => string;
}

export default function CheckoutItemCard({ item, formatPrice }: CheckoutItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-6 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-secondary truncate">{item.title}</h3>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">
          {item.category} • {item.modules} Modules
        </p>
      </div>
      <div className="text-right">
        <span className="font-bold text-secondary">{formatPrice(item.price)}</span>
      </div>
    </motion.div>
  );
}
