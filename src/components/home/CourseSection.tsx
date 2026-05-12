"use client";

import { useEffect, useMemo, useState } from "react";
import CourseCard from "../shared/CourseCard";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  SearchX,
  Sparkles,
  Filter,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguageProvider";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  banner: string;
  price: number;
  createdAt: string;
  rating: number;
  reviews: number;
  badge: string;
  instructorName: string;
  instructorImage: string;
}

interface CategoryWithCourse {
  id: string;
  name: string;
  slug: string;
  image: string;
  courses: Course[];
}

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState("");

  const { t: translations } = useLanguage();
  const t = translations.course;

  const { data, isLoading } = useQuery<CategoryWithCourse[]>({
    queryKey: ["categories-with-courses"],
    queryFn: async () => {
      const response = await axiosInstance.get(
        "/categories/with-courses"
      );

      return response.data.data;
    },
  });

  const categoriesWithCourses = data ?? [];

  // Set default active tab setelah data ada
  useEffect(() => {
    if (categoriesWithCourses.length > 0 && !activeTab) {
      setActiveTab(categoriesWithCourses[0].slug);
    }
  }, [categoriesWithCourses, activeTab]);

  // Cari category aktif
  const activeCategory = useMemo(() => {
    return categoriesWithCourses.find(
      (cat) => cat.slug === activeTab
    );
  }, [categoriesWithCourses, activeTab]);

  const courses = activeCategory?.courses ?? [];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="max-w-4xl space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black border border-secondary/5"
          >
            <span className="text-xs font-black uppercase tracking-wider text-white">
              Curated Learning
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-6xl font-black text-secondary tracking-tighter leading-none"
          >
            {t.titleStart}
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-600 italic pr-2">
              {t.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg font-medium max-w-xl"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-start">
          {/* SIDEBAR */}
          <aside className="w-full lg:w-[280px] lg:sticky lg:top-32 flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-secondary">
                  <Filter className="w-4 h-4" />
                  <span className="font-black text-[10px] uppercase tracking-widest">
                    Categories
                  </span>
                </div>

                <Link
                  href="/courses"
                  className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest"
                >
                  {t.viewAll}
                </Link>
              </div>

              <div className="h-px w-full bg-gray-100" />
            </div>

            <nav className="flex flex-col gap-2 w-full">
              {categoriesWithCourses.map((cat) => {
                const isActive = activeTab === cat.slug;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.slug)}
                    className={`group w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 text-sm font-bold ${isActive
                      ? "bg-secondary text-white shadow-xl shadow-secondary/10"
                      : "bg-transparent text-gray-400 hover:text-secondary hover:bg-gray-50"
                      }`}
                  >
                    <span>{cat.name}</span>

                    <ChevronRight
                      className={`w-4 h-4 transition-all ${isActive
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                        }`}
                    />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* CONTENT */}
          <div className="flex-1 w-full min-h-[600px]">
            <Tabs value={activeTab} className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <TabsContent
                    value={activeTab}
                    className="m-0 border-none p-0 h-[600px] overflow-y-scroll no-scrollbar px-6"
                  >
                    {isLoading ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 animate-pulse">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="aspect-4/5 rounded-[2.5rem] bg-gray-100" />
                        ))}
                      </div>
                    ) : courses.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                        {courses.map((course) => (
                          <CourseCard
                            key={course.id}
                            title={course.title}
                            instructor={course.instructorName}
                            rating={course.rating}
                            reviews={course.reviews}
                            price={course.price}
                            image={course.image || "/assets/images/cat-dev.png"}
                            badge={course.badge}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="py-32 flex flex-col items-center text-center space-y-8 rounded-[3rem] bg-gray-50 border border-dashed border-gray-200">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-gray-100">
                          <SearchX className="w-8 h-8 text-gray-300" />
                        </div>

                        <div className="space-y-2 px-6">
                          <h3 className="text-2xl font-black text-secondary tracking-tight">
                            {t.emptyStateTitle}
                          </h3>

                          <p className="text-gray-400 max-w-xs mx-auto font-medium text-xs leading-relaxed">
                            {t.emptyStateSubtitle}
                          </p>
                        </div>

                        <Button
                          variant="outline"
                          className="h-11 px-8 rounded-xl border-gray-200"
                        >
                          {t.checkOtherCategory}
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}