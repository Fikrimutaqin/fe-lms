"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { useState } from "react";
import { ShoppingBag, CreditCard } from "lucide-react";
import { PAYMENT_METHODS, CHECKOUT_ITEMS } from "@/data/checkout";

// Components
import CheckoutItemCard from "@/components/checkout/CheckoutItemCard";
import PaymentMethodCard from "@/components/checkout/PaymentMethodCard";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

export default function CheckoutPage() {
  const { t } = useLanguage();
  const c = t.checkoutPage;
  const [selectedMethod, setSelectedMethod] = useState("mandiri");

  const totalPrice = CHECKOUT_ITEMS.reduce((sum, item) => sum + item.price, 0);
  const discount = 500000;
  const serviceFee = 15000;
  const grandTotal = totalPrice - discount + serviceFee;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-20 px-6 relative overflow-hidden">
      {/* Mesh Gradients Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-purple-400/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-blue-300/5 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter mb-2 italic">{c.title}</h1>
          <p className="text-gray-500 font-medium">{c.subtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content */}
          <div className="flex-1 space-y-12">

            {/* Items Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-secondary">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="text-xl font-bold tracking-tight">{c.itemsTitle}</h2>
              </div>

              <div className="space-y-4">
                {CHECKOUT_ITEMS.map((item) => (
                  <CheckoutItemCard 
                    key={item.id} 
                    item={item} 
                    formatPrice={formatPrice} 
                  />
                ))}
              </div>
            </section>

            {/* Payment Section */}
            <section className="space-y-8">
              <div className="flex items-center gap-3 text-secondary">
                <CreditCard className="w-5 h-5" />
                <h2 className="text-xl font-bold tracking-tight">{c.paymentTitle}</h2>
              </div>

              {/* Virtual Account */}
              <div className="space-y-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{c.virtualAccount}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {PAYMENT_METHODS.virtualAccount.map((method) => (
                    <PaymentMethodCard 
                      key={method.id}
                      {...method}
                      isSelected={selectedMethod === method.id}
                      onSelect={setSelectedMethod}
                      type="va"
                    />
                  ))}
                </div>
              </div>

              {/* E-Wallet */}
              <div className="space-y-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{c.eWallet}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {PAYMENT_METHODS.eWallet.map((method) => (
                    <PaymentMethodCard 
                      key={method.id}
                      {...method}
                      isSelected={selectedMethod === method.id}
                      onSelect={setSelectedMethod}
                      type="ewallet"
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          <aside className="w-full lg:w-[400px] shrink-0">
            <CheckoutSummary 
              totalPrice={totalPrice}
              discount={discount}
              serviceFee={serviceFee}
              grandTotal={grandTotal}
              formatPrice={formatPrice}
              translations={c}
            />
          </aside>

        </div>
      </div>
    </div>
  );
}
