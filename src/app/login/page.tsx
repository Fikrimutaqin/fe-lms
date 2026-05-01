"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Eye } from "lucide-react";


export default function LoginPage() {
  const { t } = useLanguage();
  const l = t.loginPage;

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row relative">

      {/* Left Side: Visual & Brand */}
      <div className="relative flex-1 hidden md:flex flex-col justify-end p-16 overflow-hidden bg-secondary">
        <Image
          src="/assets/images/login-bg.png"
          alt="Executive Office"
          fill
          className="object-cover opacity-60 grayscale"
          priority
          sizes="(max-width: 768px) 0vw, 50vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/20 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-6"
        >
          <div className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">
            Premium Learning Platform
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
            {l.heroTitle}
          </h1>
          <p className="text-gray-400 max-w-lg font-medium leading-relaxed">
            {l.heroSubtitle}
          </p>

          <div className="pt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary overflow-hidden relative bg-gray-800">
                  <Image 
                    src={`/assets/images/user-${i}.png`} 
                    alt="User" 
                    fill 
                    className="object-cover" 
                    sizes="40px"
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {l.heroStats}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 bg-white flex items-center justify-center p-6 sm:p-12 md:p-16 relative">

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md space-y-8 md:space-y-10 mt-0"
        >
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tighter">{l.title}</h2>
            <p className="text-sm md:text-base text-gray-500 font-medium">{l.subtitle}</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{l.emailLabel}</label>
              <Input
                type="email"
                placeholder="name@corporate.com"
                className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{l.passwordLabel}</label>
                <Link href="#" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">
                  {l.forgotPassword}
                </Link>
              </div>
              <div className="relative">
                <Input
                  type="password"
                  placeholder="••••••••••••"
                  className="h-14 rounded-xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all text-base px-6 pr-12"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-secondary">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox id="remember" className="rounded-md border-gray-200" />
              <label htmlFor="remember" className="text-xs font-bold text-gray-400 cursor-pointer select-none">
                {l.rememberMe}
              </label>
            </div>

            <Button className="w-full h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/10 transition-all active:scale-95 gap-3">
              {l.submitButton}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                <span className="bg-white px-4 text-gray-300">{l.socialText}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button variant="outline" className="h-14 rounded-xl border-gray-100 font-bold gap-3 hover:bg-gray-50 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Link href="#" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors italic">
              {l.footerText}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
