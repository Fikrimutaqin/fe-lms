"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    id: 1,
    title: "Master the Future of AI & ML",
    subtitle: "New Course Available",
    description: "Deep dive into neural networks, LLMs, and computer vision with our latest industry-standard curriculum.",
    image: "/promo_banner_ai_course_1778125846547.png",
    cta: "Enroll Now",
    color: "from-blue-600 to-purple-700",
    badge: "Most Popular"
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass 2024",
    subtitle: "Professional Certification",
    description: "Build world-class products and elevate your career with hands-on projects and expert coaching.",
    image: "/promo_banner_design_course_1778125881651.png",
    cta: "Start Learning",
    color: "from-orange-400 to-rose-500",
    badge: "New Release"
  },
  {
    id: 3,
    title: "Upgrade Your Skills Today",
    subtitle: "Special Limited Offer",
    description: "Get 50% OFF on all courses. Empower your future with premium e-learning content from top tech leaders.",
    image: "/promo_banner_discount_1778125865546.png",
    cta: "Claim Discount",
    color: "from-indigo-600 to-emerald-500",
    badge: "Limited Offer"
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
    const timer = setInterval(slideNext, 10000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.05
    })
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-secondary overflow-hidden group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.6 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={SLIDES[currentIndex].image}
              alt={SLIDES[currentIndex].title}
              fill
              className="object-cover opacity-60 transition-transform duration-10000 scale-110 group-hover:scale-100"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/80 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-secondary via-transparent to-transparent opacity-60" />
          </div>

          {/* Content Area */}
          <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
            <div className="max-w-2xl space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-white/10 text-white backdrop-blur-md border border-white/20`}>
                  {SLIDES[currentIndex].badge}
                </span>
                <span className="text-primary font-bold text-sm tracking-wide">
                  {SLIDES[currentIndex].subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1]"
              >
                {SLIDES[currentIndex].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 font-medium max-w-xl leading-relaxed"
              >
                {SLIDES[currentIndex].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 group/btn">
                  {SLIDES[currentIndex].cta}
                  <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 border-white/20 text-black hover:bg-white/10 font-bold text-xs uppercase tracking-widest rounded-2xl backdrop-blur-sm">
                  <Play className="mr-2 w-4 h-4 fill-current" />
                  View Trailer
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-5 lg:bottom-10 left-0 right-0 z-20 flex justify-center items-center gap-12">
        <div className="flex items-center gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${index === currentIndex ? "w-12 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" : "w-4 bg-white/30 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Controls */}
      <div className="absolute inset-y-0 left-4 right-4 z-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={slidePrev}
          className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all pointer-events-auto active:scale-90"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={slideNext}
          className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-all pointer-events-auto active:scale-90"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Side Elements */}
      <div className="absolute top-1/2 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
