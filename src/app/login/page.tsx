"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Eye } from "lucide-react";

// Components
import AuthHero from "@/components/auth/AuthHero";
import SocialLogin from "@/components/auth/SocialLogin";

export default function LoginPage() {
  const { t } = useLanguage();
  const l = t.loginPage;

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row relative">

      <AuthHero 
        title={l.heroTitle}
        subtitle={l.heroSubtitle}
        stats={l.heroStats}
      />

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

          <SocialLogin text={l.socialText} />

          <div className="text-center">
            <Link href="/register" className="text-xs font-bold text-gray-400 hover:text-primary transition-colors italic">
              {l.footerText}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
