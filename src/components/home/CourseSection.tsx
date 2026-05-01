"use client";

import { useState } from "react";
import CourseCard from "../shared/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguageProvider";
import Link from "next/link";

// Mock Data Mapping
const COURSE_DATA: Record<string, any[]> = {
  python: [
    {
      title: "The Complete 2024 Python Bootcamp: From Zero to Hero",
      instructor: "Jose Portilla, Dr. Angela Yu",
      rating: 4.8,
      reviews: "452,102",
      price: "Rp 129.000",
      image: "/assets/images/cat-dev.png",
      badge: "BESTSELLER"
    },
    {
      title: "Data Science & Machine Learning with Python",
      instructor: "Kirill Eremenko, Hadelin de Ponteves",
      rating: 4.8,
      reviews: "25,781",
      price: "Rp 159.000",
      image: "/assets/images/cat-dev.png",
      badge: "BESTSELLER"
    }
  ],
  javascript: [
    {
      title: "Modern Web Development with React & Next.js",
      instructor: "Sarah Drasner, Maximilian Schwarzmüller",
      rating: 4.9,
      reviews: "88,490",
      price: "Rp 149.000",
      image: "/assets/images/cat-design.png",
      badge: "NEW"
    }
  ],
  // Other categories are empty for testing empty state
  excel: [],
  "web-development": [],
  "data-science": []
};

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState("python");
  const { t: translations } = useLanguage();
  const t = translations.course;

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-secondary tracking-tight">
              {t.titleStart}<span className="text-primary italic">{t.titleHighlight}</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl font-medium">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link href="/courses" className="text-sm font-bold text-primary flex items-center gap-2 group border-b border-primary/20 pb-1 hover:border-primary transition-all">
              {t.viewAll}
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Tabs & Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full overflow-hidden"
        >
          <Tabs defaultValue="python" onValueChange={setActiveTab} className="w-full">
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <TabsList className="bg-gray-100/50 p-1.5 gap-1 inline-flex h-auto rounded-2xl border border-gray-100 mb-8 md:mb-12 min-w-max">
                {["Python", "Excel", "Web Development", "JavaScript", "Data Science"].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab.toLowerCase().replace(' ', '-')}
                    className="px-4 md:px-6 py-2 md:py-2.5 data-active:bg-white data-active:text-secondary data-active:shadow-sm rounded-xl font-bold text-gray-400 hover:text-secondary transition-all text-xs md:text-sm shadow-none border-none whitespace-nowrap"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {COURSE_DATA[activeTab]?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {COURSE_DATA[activeTab].map((course, idx) => (
                      <CourseCard key={idx} {...course} />
                    ))}
                  </div>
                ) : (
                  /* Elegant Empty State */
                  <div className="py-20 md:py-32 flex flex-col items-center text-center space-y-6 bg-gray-50/50 rounded-[40px] border border-dashed border-gray-200">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                      <SearchX className="w-10 h-10 text-gray-300" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-secondary">{t.emptyStateTitle}</h3>
                      <p className="text-gray-400 max-w-xs mx-auto font-medium">
                        {t.emptyStateSubtitle}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => document.getElementById('python-tab')?.click()}
                      className="rounded-full border-gray-200 font-bold text-secondary gap-2 hover:bg-white hover:shadow-sm transition-all"
                    >
                      {t.checkOtherCategory}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
