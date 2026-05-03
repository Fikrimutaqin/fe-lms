"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

interface CheckoutSummaryProps {
  totalPrice: number;
  discount: number;
  serviceFee: number;
  grandTotal: number;
  formatPrice: (price: number) => string;
  translations: any;
}

export default function CheckoutSummary({
  totalPrice,
  discount,
  serviceFee,
  grandTotal,
  formatPrice,
  translations: c
}: CheckoutSummaryProps) {
  return (
    <div className="sticky top-32 space-y-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden"
      >
        {/* Mesh Gradients Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[60px] opacity-80" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[250px] h-[250px] bg-purple-400/10 rounded-full blur-[50px] opacity-60" />
        </div>
        <div className="space-y-6 relative z-10">
          <h2 className="text-2xl font-bold text-secondary tracking-tight">{c.summaryTitle}</h2>

          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center text-gray-500 font-medium">
              <span>{c.totalPrice}</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between items-center text-primary font-bold">
              <span>{c.discount}</span>
              <span>-{formatPrice(discount)}</span>
            </div>
            <div className="flex justify-between items-center text-gray-500 font-medium">
              <span>{c.serviceFee}</span>
              <span>{formatPrice(serviceFee)}</span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E9E4D9]">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">{c.grandTotal}</span>
            <div className="text-4xl font-bold text-secondary tracking-tighter italic">
              {formatPrice(grandTotal)}
            </div>
          </div>

          <Button className="w-full h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/10 transition-all active:scale-95 mt-4">
            {c.payButton}
          </Button>

          <p className="text-[10px] text-gray-400 font-medium leading-relaxed text-center px-4">
            {c.termsAgreement}
          </p>
        </div>
      </motion.div>

      <div className="flex items-center justify-center gap-2 text-gray-400">
        <ShieldCheck className="w-4 h-4" />
        <span className="text-[10px] font-bold uppercase tracking-widest">{c.securePayment}</span>
      </div>
    </div>
  );
}
