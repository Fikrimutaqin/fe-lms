"use client";

import Image from "next/image";
import { Search, Zap, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Hero() {
  const { t: translations } = useLanguage();
  const t = translations.hero;

  return (
    <section className="relative w-full bg-[#FDFDFD] pt-16 pb-20 lg:pt-32 lg:pb-48 overflow-hidden">
      {/* Dynamic Background Elements - Less "Perfect" Blur */}
      <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      {/* Human touch: Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Content */}
          <div className="flex-[1.2] space-y-10 md:space-y-14 text-center lg:text-left">
            <div className="space-y-6 md:space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-secondary leading-[0.95] md:leading-[0.9]"
              >
                Accelerate <br className="hidden lg:block" />
                <span className="text-primary italic font-medium tracking-normal">Your Mastery</span>
                <span className="block mt-2">At Scale.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Join 25,000+ professionals mastering high-impact skills through curriculum designed by industry leaders at Top Tech Companies.
              </motion.p>
            </div>

            {/* Search Bar with "Human" cues */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4 max-w-2xl mx-auto lg:mx-0 bg-white p-2 sm:p-3 rounded-[2rem] border border-gray-100 shadow-2xl shadow-secondary/5">
                <div className="relative flex-1 w-full group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder="Search e.g. 'Product Management'"
                    className="h-14 pl-14 pr-4 bg-transparent border-none shadow-none focus-visible:ring-0 text-base font-bold text-secondary"
                  />
                </div>
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 w-full sm:w-auto transition-all active:scale-95">
                  Explore Now
                </Button>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-4">
                Popular: UI Design, Python for Finance, Leadership
              </p>
            </motion.div>

            {/* Trusted By - More realistic typography */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-12 flex flex-col items-center lg:items-start gap-8"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Powering teams at</span>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="text-2xl font-black tracking-tighter text-secondary">ASTRALIS</div>
                <div className="text-2xl font-black tracking-tighter text-secondary">NEXUS.ID</div>
                <div className="text-2xl font-black tracking-tighter text-secondary">VOVA GROUP</div>
                <div className="text-2xl font-black tracking-tighter text-secondary">ZENITH</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Section with "Character" */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative aspect-4/5 w-full max-w-[550px] mx-auto">

              {/* Asymmetrical Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />

              <div className="relative w-full h-full rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border-[12px] border-white group">
                <Image
                  src="/assets/images/hero-woman.png"
                  alt="Professional Learning"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 550px"
                  priority
                />

                {/* Floating "Human" Insight */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 shadow-xl max-w-[180px] space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[9px] font-black uppercase text-emerald-600 tracking-widest">Live Now</span>
                  </div>
                  <p className="text-xs font-black text-secondary leading-tight">Advanced UI Patterns with Marcus</p>
                </div>
              </div>

              {/* Verified Student Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 bg-secondary p-8 rounded-[3rem] shadow-2xl text-white flex items-center gap-6 z-20 border border-white/10"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <p className="text-2xl font-black tracking-tighter italic">4.9/5</p>
                  </div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Community Rating</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-gray-800 overflow-hidden relative">
                      <Image src={`/assets/images/user-${i}.png`} alt="User" fill className="object-cover" sizes="40px" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Guarantee Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute top-20 -left-6 md:-left-12 bg-white p-5 rounded-3xl shadow-xl flex items-center gap-3 z-20 border border-gray-50"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-secondary">Certified Content</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">ISO 27001 Verified</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
