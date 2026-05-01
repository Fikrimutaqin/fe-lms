"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ALL_CATEGORIES = [
  { title: "Development", image: "/assets/images/cat-dev.png", count: "1,200+ Courses", desc: "Software engineering, web development, and mobile apps." },
  { title: "Business", image: "/assets/images/cat-biz.png", count: "850+ Courses", desc: "Entrepreneurship, marketing, and management." },
  { title: "Design", image: "/assets/images/cat-design.png", count: "600+ Courses", desc: "UI/UX, graphic design, and brand identity." },
  { title: "Marketing", image: "/assets/images/cat-design.png", count: "400+ Courses", desc: "Digital ads, SEO, and social media strategy." },
  { title: "Architecture", image: "/assets/images/course-1.png", count: "150+ Courses", desc: "Structural design and urban planning." },
  { title: "Philosophy", image: "/assets/images/course-4.png", count: "90+ Courses", desc: "Classical thought and modern ethics." },
  { title: "Quantum Science", image: "/assets/images/course-3.png", count: "45+ Courses", desc: "Computational logic and quantum mechanics." },
  { title: "Music", image: "/assets/images/cat-dev.png", count: "300+ Courses", desc: "Theory, production, and performance." },
];

export default function CategoriesPage() {
  const { t } = useLanguage();
  const c = t.categoriesPage;

  return (
    <main className="min-h-screen bg-white">
      
      {/* Enhanced Mesh Gradients Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] opacity-80" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-primary/25 rounded-full blur-[160px] opacity-70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold text-primary uppercase tracking-[0.3em] mb-4"
          >
            {c.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8"
          >
            {c.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed"
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href="/courses"
                className="group flex flex-col p-8 rounded-[40px] bg-white border border-gray-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all h-full"
              >
                <div className="relative w-20 h-20 rounded-3xl overflow-hidden bg-gray-50 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="80px"
                  />
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{cat.count}</span>
                    <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors tracking-tight">{cat.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">Explore</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[60px] bg-secondary text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter max-w-2xl mx-auto">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium">
            Our curriculum is constantly expanding. Suggest a new discipline or request a specific mentor to join our elite circle.
          </p>
          <Button size="lg" className="h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white font-bold gap-3 transition-all active:scale-95">
            Suggest a Category
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
