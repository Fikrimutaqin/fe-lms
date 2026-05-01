"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Trash2, Lock, ArrowRight } from "lucide-react";

const INITIAL_CART_ITEMS = [
  {
    id: 1,
    title: "Strategic Leadership for Executives",
    author: "Dr. Alistair Vance",
    institute: "Global Strategy Institute",
    price: 899.0,
    image: "/assets/images/course-1.png",
  },
  {
    id: 2,
    title: "Advanced Market Theory",
    author: "Prof. Eleanor Thorne",
    institute: "Faculty of Economics",
    price: 1250.0,
    image: "/assets/images/course-2.png",
  },
];

export default function CartPage() {
  const { t } = useLanguage();
  const c = t.cartPage;
  const [items, setItems] = useState(INITIAL_CART_ITEMS);

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const discount = 200.0;
  const total = subtotal - (items.length > 0 ? discount : 0);

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-20 px-6 relative overflow-hidden">

      {/* Global Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-400/10 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tighter mb-2 italic">
            {c.title}
          </h1>
          <p className="text-gray-500 font-medium">
            {items.length} {c.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Cart Items List */}
          <div className="flex-1 space-y-8">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.div
                  key={item.id}
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
                        {c.moveToWishlist}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex items-center gap-2 text-[10px] font-black text-gray-400 hover:text-red-500 transition-colors tracking-widest"
                      >
                        <Trash2 className="w-4 h-4" />
                        {c.remove}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {items.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center space-y-6"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-10 h-10 text-gray-200" />
                </div>
                <p className="text-gray-400 font-bold italic">Your portfolio is currently empty.</p>
                <Link href="/courses">
                  <Button className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold px-8">
                    Browse Courses
                  </Button>
                </Link>
              </motion.div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <aside className="w-full lg:w-[450px] shrink-0">
            <div className="sticky top-32 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-2xl shadow-secondary/5 relative overflow-hidden"
              >
                {/* Internal Mesh Gradient */}
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

                  {/* Promo Code */}
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
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

import { ShoppingBag } from "lucide-react";
