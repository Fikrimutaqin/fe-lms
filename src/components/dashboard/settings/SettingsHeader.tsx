"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function SettingsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-gray-100 pb-12 relative z-10">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-primary">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center relative">
            <Sparkles className="w-5 h-5" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 rounded-2xl blur-lg"
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">Personal Space</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-secondary tracking-tight">Configure Your Experience</h1>
      </div>

      <div className="hidden xl:flex items-center gap-4 bg-white border border-gray-100 p-2 pl-4 rounded-2xl shadow-sm">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
              <Image src={`/assets/images/user-${i}.png`} alt="User" width={32} height={32} className="object-cover" />
            </div>
          ))}
        </div>
        <div className="pr-4 border-r border-gray-100">
          <p className="text-[9px] font-black text-secondary uppercase leading-none">Active Mentors</p>
          <p className="text-[10px] text-gray-400 font-bold mt-1">3 mentors online</p>
        </div>
        <div className="pl-2 pr-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase text-emerald-600">System Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}
