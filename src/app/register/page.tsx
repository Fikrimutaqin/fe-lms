"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Eye } from "lucide-react";


export default function RegisterPage() {
  const { t } = useLanguage();
  const r = t.registerPage;

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row relative">

      {/* Left Side: Visual & Brand */}
      <div className="relative flex-1 hidden md:flex flex-col justify-end p-16 overflow-hidden bg-secondary">
        <Image
          src="/assets/images/register-bg.png"
          alt="Luxury Library"
          fill
          className="object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/10 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6"
        >
          <div className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">
            Elite Membership Program
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
            {r.heroTitle}
          </h1>
          <p className="text-gray-400 max-w-lg font-medium leading-relaxed">
            {r.heroSubtitle}
          </p>

          <div className="pt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[4, 5, 6].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary overflow-hidden relative bg-gray-800">
                  <Image 
                    src={`/assets/images/user-${i > 3 ? i - 3 : i}.png`} 
                    alt="User" 
                    fill 
                    className="object-cover" 
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {r.heroStats}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Register Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-6 sm:p-12 md:p-16 relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-8 md:space-y-10 mt-0"
        >
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tighter">{r.title}</h2>
            <p className="text-sm md:text-base text-gray-500 font-medium">{r.subtitle}</p>
          </div>

          <form className="space-y-5 md:space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.nameLabel}</label>
              <Input
                type="text"
                placeholder="Lord Alistair Vaughn"
                className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.emailLabel}</label>
              <Input
                type="email"
                placeholder="name@corporate.com"
                className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.passwordLabel}</label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6 pr-12"
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.confirmPasswordLabel}</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox id="terms" className="rounded-md border-gray-200 mt-0.5" />
              <label htmlFor="terms" className="text-[11px] font-bold text-gray-400 cursor-pointer select-none leading-relaxed">
                {r.termsText}
              </label>
            </div>

            <Button className="w-full h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/10 transition-all active:scale-95 gap-3">
              {r.submitButton}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="text-center pt-4">
            <Link href="/login" className="text-sm font-bold text-gray-500 hover:text-primary transition-colors">
              {r.alreadyHaveAccount}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
