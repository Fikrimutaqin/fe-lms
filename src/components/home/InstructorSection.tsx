"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Video } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";

export default function InstructorSection() {
  const { t: translations } = useLanguage();
  const t = translations.instructor;

  return (
    <section className="w-full py-24 md:py-40 bg-white overflow-hidden relative">
      {/* Enhanced Primary Transparent Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] z-0 opacity-80" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-primary/25 rounded-full blur-[160px] z-0 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px] z-0" />
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Header Content - Centered & Elegant */}
        <div className="flex flex-col items-center text-center space-y-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[13px] font-bold uppercase tracking-widest border border-primary/10"
          >
            {t.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-secondary leading-[1.1] tracking-tight max-w-4xl"
          >
            {t.titleLine1}<br />
            <span className="text-primary italic">{t.titleLine2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-medium"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Features Row - Symmetrical */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { icon: Video, title: t.feature1Title, desc: t.feature1Desc },
            { icon: Users, title: t.feature2Title, desc: t.feature2Desc },
            { icon: Star, title: t.feature3Title, desc: t.feature3Desc }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-secondary">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Visual Section */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-video rounded-[40px] md:rounded-[60px] overflow-hidden border-16 border-white shadow-2xl bg-gray-50"
          >
            <Image
              src="/assets/images/instructor-man.png"
              alt="Instructor"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </motion.div>

          {/* Floating Achievement Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-8 -right-4 md:-bottom-12 md:right-10 bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100 z-20 flex flex-col items-center text-center"
          >
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 relative overflow-hidden">
                  <Image src={`/assets/images/user-${i}.png`} alt="user" fill className="object-cover" sizes="40px" />
                </div>
              ))}
            </div>
            <p className="text-3xl font-black text-secondary leading-none">150k+</p>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2">{t.statsStudents}</p>
          </motion.div>

          {/* Floating Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -top-12 -left-4 md:top-20 md:-left-12 bg-primary p-6 md:p-8 rounded-3xl shadow-2xl z-20 text-white text-center"
          >
            <p className="text-4xl font-black">10+</p>
            <p className="text-[10px] font-bold text-primary-foreground/60 uppercase tracking-wider">{t.statsExperience}</p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="mt-24 flex flex-col items-center gap-6">
          <Button size="lg" className="h-16 px-12 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-2xl shadow-xl shadow-secondary/10 gap-3 text-xl transition-all hover:scale-105 active:scale-95">
            {t.ctaButton}
            <ArrowRight className="w-6 h-6" />
          </Button>
          <p className="text-gray-400 font-medium">{t.ctaSubtext}</p>
        </div>
      </div>
    </section>
  );
}
