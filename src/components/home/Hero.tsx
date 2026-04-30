"use client";

import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-16 pb-20 lg:pt-28 lg:pb-40 overflow-hidden">
      {/* Enhanced Primary Transparent Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] z-0 opacity-80" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-primary/25 rounded-full blur-[160px] z-0 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px] z-0" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">

          {/* Left Side: Content */}
          <div className="flex-[1.2] space-y-8 md:space-y-12 z-10 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] md:text-[13px] font-semibold"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Baru: Bootcamp Data Science 2024
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary leading-[1.2] md:leading-[1.1]"
              >
                Tingkatkan <span className="text-primary">Karier</span> Anda dengan Belajar Terstruktur.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Akses ribuan kursus berkualitas tinggi dari instruktur profesional.
                Investasi terbaik adalah investasi pada diri Anda sendiri.
              </motion.p>
            </div>

            {/* Simplified Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto lg:mx-0"
            >
              <div className="relative flex-1 w-full group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <Input
                  placeholder="Cari kursus idaman Anda..."
                  className="h-14 pl-12 pr-4 bg-white border-gray-200 rounded-xl shadow-sm focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-base"
                />
              </div>
              <Button size="lg" className="h-14 px-8 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-xl shadow-lg shadow-secondary/10 w-full sm:w-auto">
                Mulai Belajar
              </Button>
            </motion.div>

            {/* Trusted By / Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-6 md:pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 opacity-40 grayscale"
            >
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary opacity-60 w-full lg:w-auto mb-2 lg:mb-0">Dipercaya Oleh:</span>
              <div className="flex gap-6 md:gap-8 items-center flex-wrap justify-center lg:justify-start">
                <div className="font-black text-lg md:text-xl tracking-tighter">TECHCORP</div>
                <div className="font-black text-lg md:text-xl tracking-tighter">GLOBALEDU</div>
                <div className="font-black text-lg md:text-xl tracking-tighter">NEXTLVL</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative w-full mt-10 lg:mt-0"
          >
            <div className="relative aspect-5/6 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] mx-auto">
              {/* Solid Background Frame */}
              <div className="absolute inset-4 border-2 border-secondary/10 rounded-[32px] -z-10 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4" />

              <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] bg-white">
                <Image
                  src="/assets/images/hero-woman.png"
                  alt="Professional Learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Minimal Info Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 md:gap-4 z-20 w-auto min-w-[200px]"
              >
                <div className="flex -space-x-2 md:-space-x-3 shrink-0">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative">
                      <Image src={`/assets/images/user-${i}.png`} alt="User" fill className="object-cover" sizes="40px" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-[12px] md:text-sm font-bold text-secondary">3.5k+ Pelajar</p>
                  <p className="text-[9px] md:text-[11px] text-gray-500 font-medium">Baru saja bergabung</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
