"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  total: number;
  formatPrice: (price: number) => string;
  translations: any;
}

export default function CartSummary({ subtotal, discount, total, formatPrice, translations: c }: CartSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-2xl shadow-secondary/5 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 space-y-8">
        <h2 className="text-3xl font-bold text-secondary tracking-tighter border-b border-gray-100 pb-6">
          {c.summaryTitle}
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-gray-500 font-bold">
            <span className="text-sm uppercase tracking-widest">{c.subtotal}</span>
            <span className="text-lg">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between items-center text-primary font-bold">
            <span className="text-sm uppercase tracking-widest">{c.discount}</span>
            <span className="text-lg">-{formatPrice(discount)}</span>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
          <span className="text-2xl font-bold text-secondary">{c.total}</span>
          <span className="text-4xl font-black text-secondary tracking-tighter italic">
            {formatPrice(total)}
          </span>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">
            {c.promoCode}
          </label>
          <div className="flex gap-2">
            <Input
              placeholder="ELITE2024"
              className="h-12 rounded-xl bg-gray-50 border-transparent focus:bg-white"
            />
            <Button variant="outline" className="h-12 px-6 rounded-xl border-gray-200 font-black text-[10px] tracking-widest hover:bg-secondary hover:text-white hover:border-secondary transition-all">
              {c.applyButton}
            </Button>
          </div>
        </div>

        <Link href="/checkout" className="block">
          <Button className="w-full h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/10 transition-all active:scale-95 group">
            {c.checkoutButton}
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>

        <div className="flex items-center justify-center gap-2 text-gray-300">
          <Lock className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-widest">{c.secureCheckout}</span>
        </div>
      </div>
    </motion.div>
  );
}
