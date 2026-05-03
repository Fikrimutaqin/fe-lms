"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { CART_DATA } from "@/data/courses";

// Components
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  const { t } = useLanguage();
  const c = t.cartPage;
  const [items, setItems] = useState(CART_DATA);

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
                <CartItem 
                  key={item.id} 
                  item={item} 
                  removeItem={removeItem} 
                  formatPrice={formatPrice}
                  moveToWishlistText={c.moveToWishlist}
                  removeText={c.remove}
                />
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
              <CartSummary 
                subtotal={subtotal} 
                discount={discount} 
                total={total} 
                formatPrice={formatPrice} 
                translations={c}
              />
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
