"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AuthHeroProps {
  title: string;
  subtitle: string;
  stats: string;
  bgImage?: string;
}

export default function AuthHero({ title, subtitle, stats, bgImage = "/assets/images/login-bg.png" }: AuthHeroProps) {
  return (
    <div className="relative flex-1 hidden md:flex flex-col justify-end p-16 overflow-hidden bg-secondary">
      <Image
        src={bgImage}
        alt="Visual Branding"
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
          {title}
        </h1>
        <p className="text-gray-400 max-w-lg font-medium leading-relaxed">
          {subtitle}
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
            {stats}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
