"use client";

import Image from "next/image";
import { Star, Quote, Sparkles, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { TESTIMONIAL_DATA } from "@/data/home";
import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

export default function TestimonialSection() {
  const { t: translations } = useLanguage();
  const t = translations.testimonial;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const carouselRef = useRef<HTMLDivElement>(null);

  interface Testimonies {
    id: string;
    name: string;
    avatar: string;
    content: string;
    rating: number;
    createdAt: string;
  }

  // Tanstack Query
  const { data: queryData, isLoading } = useQuery({
    queryKey: ['testimonies'],
    queryFn: async () => {
      const response = await axiosInstance.get('/testimonies');
      return response.data.data;
    },
  });

  const testimonies = Array.isArray(queryData) ? queryData : [];

  useEffect(() => {
    if (carouselRef.current) {
      setConstraints({
        left: -(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth),
        right: 0,
      });
    }
  }, []);

  const next = () => {
    if (currentIndex < testimonies.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="w-full py-24 md:py-40 bg-[#FDFDFD] overflow-hidden relative font-sans">
      {/* Premium Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white border border-secondary"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Member Success</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-secondary tracking-tighter leading-none italic"
            >
              {t.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 max-w-xl font-medium text-lg md:text-xl leading-relaxed"
            >
              {t.subtitle}
            </motion.p>
          </div>

          {/* Custom Navigation Controls (Hidden if data <= 3) */}
          {testimonies.length > 3 && (
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-14 h-14 rounded-2xl border-2 border-gray-100 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-secondary transition-all"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                disabled={currentIndex === testimonies.length - 1}
                className="w-14 h-14 rounded-2xl border-2 border-gray-100 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-secondary transition-all"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>

        {/* Carousel / Grid Logic */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="min-h-[300px] bg-white rounded-[3rem] border border-gray-100 p-10 animate-pulse space-y-6">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, j) => <div key={j} className="w-4 h-4 bg-gray-100 rounded-full" />)}
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-100 rounded w-full" />
                  <div className="h-4 bg-gray-100 rounded w-5/6" />
                </div>
                <div className="flex items-center gap-4 pt-10 border-t border-gray-50">
                  <div className="w-14 h-14 rounded-2xl bg-gray-100" />
                  <div className="h-4 bg-gray-100 rounded w-1/3" />
                </div>
              </div>
            ))}
          </div>
        ) : testimonies.length === 0 ? (
          <div className="text-center py-20 text-gray-400 font-medium italic">
            No testimonials found.
          </div>
        ) : testimonies.length > 3 ? (
          <>
            {/* Swipable Carousel Container */}
            <div className="relative overflow-visible cursor-grab active:cursor-grabbing">
              <motion.div
                ref={carouselRef}
                drag="x"
                dragConstraints={constraints}
                animate={{ x: -currentIndex * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 320 : 440) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex gap-8 md:gap-10"
              >
                {testimonies.map((testi: Testimonies, idx: number) => (
                  <motion.div
                    key={testi.id}
                    className="relative min-w-[300px] md:min-w-[400px] p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 group overflow-hidden"
                  >
                    {/* Card Texture */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

                    <Quote className="absolute -top-4 -right-4 w-24 h-24 text-gray-50 group-hover:text-primary/5 transition-colors duration-700 -rotate-12" />

                    <div className="flex text-amber-400 mb-8 relative z-10">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-secondary font-bold text-lg leading-relaxed mb-12 relative z-10 italic">
                      "{testi.content}"
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-gray-50 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-4 border-gray-50 shadow-sm group-hover:scale-110 transition-transform duration-500 bg-gray-100">
                          <Image src={testi.avatar} alt={testi.name} fill className="object-cover" sizes="56px" />
                        </div>
                        <div>
                          <h4 className="font-black text-secondary text-sm tracking-tight">{testi.name}</h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Progress Bar Indicators */}
            <div className="mt-20 flex justify-center gap-2">
              {testimonies.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === currentIndex ? "w-12 bg-primary" : "w-4 bg-gray-200 hover:bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </>
        ) : (
          /* Static Grid for small data counts (Desktop) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonies.map((testi: Testimonies) => (
              <div
                key={testi.id}
                className="relative p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 group overflow-hidden"
              >
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-gray-50 group-hover:text-primary/5 transition-colors duration-700 -rotate-12" />
                <div className="flex text-amber-400 mb-8 relative z-10">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-secondary font-bold text-lg leading-relaxed mb-12 relative z-10 italic">
                  "{testi.content}"
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-gray-50 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-4 border-gray-50 shadow-sm group-hover:scale-110 transition-transform duration-500 bg-gray-100">
                      <Image src={testi.avatar} alt={testi.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <h4 className="font-black text-secondary text-sm tracking-tight">{testi.name}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
