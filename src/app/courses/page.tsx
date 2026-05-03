"use client";

import CourseCard from "@/components/courses/CourseCard";
import CourseSidebar from "@/components/courses/CourseSidebar";
import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { COURSES_DATA } from "@/data/courses";

export default function CoursesPage() {
  const { t } = useLanguage();
  const pageT = t.coursesPage;

  return (
    <main className="min-h-screen bg-white">

      {/* Enhanced Mesh Gradients Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] opacity-80" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-primary/25 rounded-full blur-[160px] opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            {pageT.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8"
          >
            {pageT.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed"
          >
            {pageT.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-64 shrink-0">
            <CourseSidebar />
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
              {COURSES_DATA.map((course, idx) => (
                <CourseCard key={idx} {...course} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-24 flex justify-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 rounded-full border-gray-200 text-secondary font-bold hover:bg-gray-50 hover:border-gray-300 transition-all gap-3"
              >
                {pageT.filters.seeMore}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
