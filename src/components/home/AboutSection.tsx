"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

export default function AboutSection() {
  const { t: translations } = useLanguage();
  const t = translations.about;

  return (
    <section className="w-full py-32 bg-white relative overflow-hidden font-sans">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white border border-secondary"
              >
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">{t.badge}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-secondary tracking-tighter leading-[0.9]"
              >
                {t.title.split(" ").map((word, i, arr) => (
                  i === arr.length - 1 ? (
                    <span key={i} className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-600 italic block mt-2 pb-5">{word}</span>
                  ) : word + " "
                ))}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed"
              >
                {t.subtitle}
              </motion.p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-secondary shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-secondary text-sm tracking-tight uppercase">Precision Learning</p>
                  <p className="text-xs text-gray-400 font-medium mt-1">Adaptive paths tailored to your speed.</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-secondary shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-secondary text-sm tracking-tight uppercase">Instant Growth</p>
                  <p className="text-xs text-gray-400 font-medium mt-1">Acquire skills that the market demands.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Grid Visual */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Background 3D Elements */}
            <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-3 scale-105 pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col justify-center items-center text-center space-y-3 relative z-10"
            >
              <p className="text-5xl font-black text-secondary tracking-tighter">{t.stat1Number}</p>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest">{t.stat1Label}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-secondary p-10 rounded-[3rem] shadow-2xl shadow-secondary/20 flex flex-col justify-center items-center text-center space-y-3 relative z-10 translate-y-12"
            >
              <p className="text-5xl font-black text-white tracking-tighter">{t.stat2Number}</p>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest">{t.stat2Label}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col justify-center items-center text-center space-y-3 relative z-10 -translate-y-6"
            >
              <p className="text-5xl font-black text-secondary tracking-tighter">{t.stat3Number}</p>
              <p className="text-[10px] font-black text-primary uppercase tracking-widest">{t.stat3Label}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-primary p-10 rounded-[3rem] shadow-2xl shadow-primary/20 flex flex-col justify-center items-center text-center space-y-3 relative z-10 translate-y-6"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                <Globe className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-black text-white uppercase tracking-widest">Global Access</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
