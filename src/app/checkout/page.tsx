"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, CreditCard, ShieldCheck, Check } from "lucide-react";

const PAYMENT_METHODS = {
  virtualAccount: [
    { id: "bca", name: "BCA", sub: "VA BCA" },
    { id: "mandiri", name: "Mandiri", sub: "VA Mandiri" },
    { id: "bni", name: "BNI", sub: "VA BNI" },
    { id: "bri", name: "BRI", sub: "VA BRI" },
  ],
  eWallet: [
    { id: "gopay", name: "GoPay", color: "bg-blue-500", initials: "G" },
    { id: "ovo", name: "OVO", color: "bg-purple-600", initials: "O" },
    { id: "shopeepay", name: "ShopeePay", color: "bg-orange-600", initials: "S" },
    { id: "dana", name: "Dana", color: "bg-blue-400", initials: "D" },
  ],
};

const CHECKOUT_ITEMS = [
  {
    id: 1,
    title: "Global Executive Strategy: 2024 Framework",
    category: "Masterclass",
    modules: 12,
    price: 4500000,
    image: "/assets/images/course-1.png",
  },
  {
    id: 2,
    title: "Leadership Philosophy for the Digital Age",
    category: "Seminar",
    modules: 8,
    price: 2750000,
    image: "/assets/images/course-2.png",
  },
];

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
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Mesh Gradients Background (Global) */}
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
                  <motion.div
                    key={item.id}
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
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`relative p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 group ${selectedMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-gray-100 bg-white hover:border-gray-200"
                        }`}
                    >
                      <span className={`font-black text-lg ${selectedMethod === method.id ? "text-primary" : "text-secondary"}`}>
                        {method.name}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        {method.sub}
                      </span>
                      {selectedMethod === method.id && (
                        <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* E-Wallet */}
              <div className="space-y-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{c.eWallet}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {PAYMENT_METHODS.eWallet.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`relative p-5 rounded-2xl border-2 transition-all flex items-center gap-3 group ${selectedMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-gray-100 bg-white hover:border-gray-200"
                        }`}
                    >
                      <div className={`w-8 h-8 rounded-full ${method.color} flex items-center justify-center text-white font-black text-xs`}>
                        {method.initials}
                      </div>
                      <span className={`font-bold ${selectedMethod === method.id ? "text-primary" : "text-secondary"}`}>
                        {method.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          <aside className="w-full lg:w-[400px] shrink-0">
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
          </aside>

        </div>
      </div>
    </div>
  );
}
