"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Video, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
// import { INSTRUCTOR_DATA } from "@/data/home";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function InstructorSection() {
  const { t: translations } = useLanguage();
  const t = translations.instructor;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  interface Instructor {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
    title: string;
    bio: string;
    rating: number;
    reviewsCount: number;
    studentsCount: number;
    coursesCount: number;
  }

  const { data: queryData, isLoading } = useQuery({
    queryKey: ['instructors'],
    queryFn: async () => {
      const response = await axiosInstance.get('/users/instructors');
      return response.data.data;
    },
  });

  const instructors = Array.isArray(queryData) ? queryData : [];

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % (instructors.length || 1));
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + (instructors.length || 1)) % (instructors.length || 1));
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      slideNext();
    } else if (info.offset.x > swipeThreshold) {
      slidePrev();
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.9
    })
  };

  const currentInstructor = instructors[currentIndex];

  if (isLoading) {
    return (
      <section className="w-full py-32 md:py-48 bg-white overflow-hidden relative animate-pulse">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="bg-gray-100 rounded-[4rem] h-[600px] w-full" />
            <div className="space-y-10">
              <div className="h-8 bg-gray-100 rounded w-1/4" />
              <div className="h-24 bg-gray-100 rounded w-3/4" />
              <div className="h-20 bg-gray-100 rounded w-1/2" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!currentInstructor) {
    return null;
  }

  const fullName = `${currentInstructor.firstName} ${currentInstructor.lastName}`;
  const formattedStudents = new Intl.NumberFormat().format(currentInstructor.studentsCount);

  return (
    <section className="w-full py-32 md:py-48 bg-white overflow-hidden relative font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Swipable Visual Side (Left) */}
          <div className="relative order-2 lg:order-1 h-[500px] md:h-[650px] cursor-grab active:cursor-grabbing">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-gray-200 border-8 border-white group select-none">
                  <Image
                    src={currentInstructor.avatarUrl}
                    alt={currentInstructor.firstName + " " + currentInstructor.lastName}
                    fill
                    className="object-cover object-top pointer-events-none"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />

                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-10 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white space-y-3 pointer-events-none">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full w-fit">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">Verified Global Mentor</span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl md:text-4xl font-black tracking-tighter italic text-white">{fullName}</h3>
                      <p className="text-[10px] font-medium text-white/60 tracking-widest uppercase">{currentInstructor.title}</p>
                    </div>
                    <p className="text-[13px] text-white/80 leading-relaxed line-clamp-2 italic font-medium pt-1">
                      "{currentInstructor.bio}"
                    </p>
                  </div>
                </div>

                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute -top-8 -left-4 md:-top-10 md:-left-12 p-6 md:p-8 bg-secondary rounded-[2.5rem] shadow-2xl text-white space-y-4 border border-white/10 pointer-events-none hidden sm:block"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-secondary bg-gray-100 relative overflow-hidden">
                        <Image src={`/assets/images/user-${i}.png`} alt="user" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-black leading-none text-white">{formattedStudents}</p>
                    <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mt-1">Guided Students</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-24 -right-4 md:bottom-20 md:-right-12 p-6 md:p-8 bg-white rounded-[2.5rem] shadow-2xl space-y-2 border border-gray-100 pointer-events-none hidden sm:block"
                >
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-2xl md:text-3xl font-black text-secondary leading-none">{currentInstructor.rating}</p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Instructor Rating</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2.5">
              {instructors.map((_, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === currentIndex ? "w-10 bg-primary" : "w-3 bg-gray-200 hover:bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Content Side (Right) */}
          <div className="order-1 lg:order-2 space-y-10 md:space-y-14">
            <div className="space-y-6 md:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 w-fit"
              >
                {t.badge}
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-secondary leading-none md:leading-[0.95] tracking-tighter"
              >
                {t.titleLine1}<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-600 italic pb-2 inline-block">
                  {t.titleLine2}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed font-medium"
              >
                {t.subtitle}
              </motion.p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 gap-6 md:gap-10">
              {[
                { icon: Video, title: t.feature1Title, desc: t.feature1Desc },
                { icon: Users, title: t.feature2Title, desc: t.feature2Desc },
                { icon: Sparkles, title: t.feature3Title, desc: t.feature3Desc }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-5 md:gap-7 items-start group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xs">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-black text-secondary tracking-tight">{feature.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="pt-6 md:pt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8"
            >
              <Button size="lg" className="h-14 md:h-16 px-10 bg-secondary hover:bg-secondary/90 text-white font-black rounded-2xl shadow-2xl shadow-secondary/20 gap-3 text-base md:text-lg transition-all group overflow-hidden relative">
                <span className="relative z-10">{t.ctaButton}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Join 15k+ Instructors</span>
                <span className="text-[11px] text-gray-400 font-medium">{t.ctaSubtext}</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
