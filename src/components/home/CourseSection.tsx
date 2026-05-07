"use client";

import { useState } from "react";
import CourseCard from "../shared/CourseCard";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX, ArrowRight, Sparkles, Filter, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguageProvider";
import Link from "next/link";
import { COURSE_DATA, COURSE_CATEGORIES } from "@/data/home";

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState("python");
  const { t: translations } = useLanguage();
  const t = translations.course;

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">

        {/* Editorial Header */}
        <div className="max-w-4xl space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/5 border border-secondary/5"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary">Curated Learning</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-secondary tracking-tighter leading-none"
          >
            {t.titleStart} <br />
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

        {/* Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-start">

          {/* Custom Sidebar Navigation */}
          <aside className="w-full lg:w-[280px] lg:sticky lg:top-32 flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-secondary">
                  <Filter className="w-4 h-4" />
                  <span className="font-black text-[10px] uppercase tracking-widest">Categories</span>
                </div>
                <Link href="/courses" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">
                  {t.viewAll}
                </Link>
              </div>
              <div className="h-px w-full bg-gray-100" />
            </div>

            {/* Custom Category List (Replaces TabsList for better control) */}
            <nav className="flex flex-col gap-2 w-full">
              {COURSE_CATEGORIES.map((cat) => {
                const value = cat.toLowerCase().replace(' ', '-');
                const isActive = activeTab === value;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(value)}
                    className={`group w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 text-sm font-bold ${isActive
                      ? "bg-secondary text-white shadow-xl shadow-secondary/10"
                      : "bg-transparent text-gray-400 hover:text-secondary hover:bg-gray-50"
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      {cat}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-all ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`} />
                  </button>
                );
              })}
            </nav>

            {/* Premium Sidebar Card */}
            <div className="p-8 hidden lg:block rounded-4xl bg-gray-50 border border-gray-100 relative overflow-hidden group cursor-pointer">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-10 -mt-10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="font-black text-[10px] uppercase tracking-widest text-secondary">Elevate Skills</p>
                  <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                    Access our most rigorous technical curricula and world-class mentors.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Grid */}
          <div className="flex-1 w-full min-h-[600px]">
            <Tabs value={activeTab} className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                >
                  <TabsContent value={activeTab} className="m-0 border-none p-0 focus-visible:ring-0">
                    {COURSE_DATA[activeTab]?.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                        {COURSE_DATA[activeTab].map((course, idx) => (
                          <CourseCard key={idx} {...course} />
                        ))}
                      </div>
                    ) : (
                      /* Minimal Empty State */
                      <div className="py-32 flex flex-col items-center text-center space-y-8 rounded-[3rem] bg-gray-50 border border-dashed border-gray-200">
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-gray-100">
                          <SearchX className="w-8 h-8 text-gray-300" />
                        </div>
                        <div className="space-y-2 px-6">
                          <h3 className="text-2xl font-black text-secondary tracking-tight">{t.emptyStateTitle}</h3>
                          <p className="text-gray-400 max-w-xs mx-auto font-medium text-xs leading-relaxed">
                            {t.emptyStateSubtitle}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => setActiveTab("python")}
                          className="h-11 px-8 rounded-xl border-gray-200 font-black text-[10px] uppercase tracking-widest text-secondary"
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
