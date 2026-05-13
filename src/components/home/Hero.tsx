"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    title: "Mastering the Art of Modern Strategy",
    subtitle: "New Masterclass Available",
    description: "Deep dive into cognitive frameworks, systemic thinking, and high-stakes decision making with industry leaders.",
    image: "/hero_strategy_banner_1778663026659.png",
    cta: "Start Your Journey",
    color: "from-[#1a1a2e] to-[#16213e]",
    accent: "bg-primary",
    badge: "Executive Level"
  },
  {
    id: 2,
    title: "High-Performance Design Systems",
    subtitle: "Professional Certification",
    description: "Build scalable, world-class design languages that bridge the gap between aesthetics and engineering.",
    image: "/hero_design_banner_1778663072292.png",
    cta: "Explore Curriculum",
    color: "from-[#0f172a] to-[#1e293b]",
    accent: "bg-indigo-500",
    badge: "Limited Intake"
  },
  {
    id: 3,
    title: "The Future of Digital Ecosystems",
    subtitle: "Strategic Insight 2024",
    description: "Navigate the complex landscape of web3, AI agents, and decentralized architectures with precision.",
    image: "/hero_ecosystem_banner_1778663401990.png",
    cta: "Join The Cohort",
    color: "from-[#020617] to-[#0f172a]",
    accent: "bg-emerald-500",
    badge: "New Release"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(slideNext, 8000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-[#020617] overflow-hidden group">
      {/* Dynamic Animated Background Accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]"
        />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 35 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.7 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Premium Multi-Layer Overlay */}
          <div className="absolute inset-0">
            <Image
              src={SLIDES[currentIndex].image}
              alt={SLIDES[currentIndex].title}
              fill
              className="object-cover opacity-40 grayscale-[0.2]"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/70 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-linear-to-b from-[#020617]/20 to-transparent opacity-40" />
          </div>

          {/* Content Area */}
          <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
            <div className="max-w-4xl">
              <div className="flex flex-col gap-6 md:gap-10">

                {/* Badge & Subtitle */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-center gap-4"
                >
                  <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-white border border-white/20 backdrop-blur-md shadow-2xl`}>
                    {SLIDES[currentIndex].badge}
                  </span>
                  <span className="text-white/60 font-bold text-xs uppercase tracking-[0.2em]">
                    {SLIDES[currentIndex].subtitle}
                  </span>
                </motion.div>

                {/* Main Heading with staggered entrance */}
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.95]"
                  >
                    {SLIDES[currentIndex].title}
                  </motion.h1>
                </div>

                {/* Description Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-lg md:text-2xl text-white/50 font-medium max-w-2xl leading-relaxed tracking-tight"
                >
                  {SLIDES[currentIndex].description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-wrap items-center gap-6 pt-6"
                >
                  <Button size="lg" className="h-16 px-12 bg-white hover:bg-gray-100 text-[#020617] font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl transition-all active:scale-95 group/btn">
                    {SLIDES[currentIndex].cta}
                    <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>

                  <button className="flex items-center gap-4 group/play">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md group-hover/play:bg-white/10 group-hover/play:border-white/40 transition-all">
                      <Play className="w-5 h-5 text-white fill-white ml-1" />
                    </div>
                    <span className="text-white text-xs font-black uppercase tracking-widest">{SLIDES[currentIndex].id === 1 ? 'Preview Masterclass' : 'Curriculum Tour'}</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Pagination Controls (Vertical or Horizontal) */}
      <div className="absolute bottom-10 left-0 right-0 z-20 container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="relative py-4 group"
            >
              <div className={`h-1 transition-all duration-700 rounded-full ${index === currentIndex ? "w-16 bg-white" : "w-8 bg-white/20 hover:bg-white/40"}`} />
            </button>
          ))}
        </div>

        {/* Arrow Controls with Glassmorphism */}
        <div className="flex items-center gap-4">
          <button
            onClick={slidePrev}
            className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#020617] transition-all active:scale-90"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={slideNext}
            className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#020617] transition-all active:scale-90"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Subtle Bottom Accent Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
