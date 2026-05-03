"use client";

import { motion } from "framer-motion";
import { 
  PlayCircle, 
  Filter, 
  ChevronDown, 
  ListFilter,
  Search
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DashboardCourseCard from "@/components/shared/DashboardCourseCard";

const COURSES = [
  {
    id: 1,
    title: "Financial Intelligence for Non-Financial Leaders",
    instructor: "Dr. Julianne Thorne",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    category: "Business Strategy",
    progress: 42,
    status: "in-progress" as const
  },
  {
    id: 2,
    title: "Emotional Intelligence in Global Team Management",
    instructor: "Marcus Aris Giles",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    category: "Leadership",
    progress: 12,
    status: "in-progress" as const
  },
  {
    id: 3,
    title: "Sustainable Growth Strategies for Modern Tech",
    instructor: "Helena Vane",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Innovation",
    progress: 100,
    status: "completed" as const
  },
  {
    id: 4,
    title: "Microeconomic Foundations of Market Design",
    instructor: "Professor Alistair Cook",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800",
    category: "Economics",
    progress: 88,
    status: "in-progress" as const
  }
];

export default function DashboardCoursesPage() {
  return (
    <div className="p-4 sm:p-8 pb-20 space-y-8 sm:space-y-12 max-w-[1400px] mx-auto">
      
      {/* Hero Banner Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative min-h-[320px] sm:h-[380px] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-secondary/10"
      >
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" 
            alt="Hero Background"
            fill
            priority
            className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/90 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(86,36,208,0.1),transparent)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center p-6 sm:p-12 lg:p-20 max-w-3xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[10px] font-black text-primary uppercase tracking-[0.3em] pl-1"
          >
            Continue where you left off
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            Advanced Strategic Leadership in Digital Economies
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm font-medium mt-5 max-w-xl leading-relaxed"
          >
            Module 1: Disrupt vs Innovation Models and Market Dominance Strategies for Global Enterprises
          </motion.p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-6">
            <Button className="bg-white text-secondary hover:bg-primary hover:text-white h-12 sm:h-14 px-6 sm:px-10 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-500 group/btn">
              <span className="flex items-center gap-3">
                <PlayCircle className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                Resume Module
              </span>
            </Button>
            
            <div className="hidden sm:block flex-1 max-w-[200px]">
              <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Course Progress</span>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">64%</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[64%] rounded-full shadow-[0_0_10px_rgba(86,36,208,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Course List Section */}
      <section className="space-y-10">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-4 overflow-x-auto custom-scrollbar no-scrollbar">
            <TabsList variant="line" className="gap-4 sm:gap-8 min-w-max">
              <TabsTrigger value="all" className="px-0 py-2 text-[11px] font-black uppercase tracking-widest data-active:text-secondary after:bottom-[-5px]">
                All Courses
              </TabsTrigger>
              <TabsTrigger value="progress" className="px-0 py-2 text-[11px] font-black uppercase tracking-widest data-active:text-secondary after:bottom-[-5px]">
                In Progress
              </TabsTrigger>
              <TabsTrigger value="completed" className="px-0 py-2 text-[11px] font-black uppercase tracking-widest data-active:text-secondary after:bottom-[-5px]">
                Completed
              </TabsTrigger>
              <TabsTrigger value="wishlist" className="px-0 py-2 text-[11px] font-black uppercase tracking-widest data-active:text-secondary after:bottom-[-5px]">
                Wishlist
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-10 rounded-xl border-gray-100 px-5 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50">
                <Filter className="w-3.5 h-3.5" />
                Filter
              </Button>
              <Button variant="outline" className="h-10 rounded-xl border-gray-100 px-5 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50">
                <ListFilter className="w-3.5 h-3.5" />
                Recent
                <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-50" />
              </Button>
            </div>
          </div>

          <div className="mt-12">
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {COURSES.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DashboardCourseCard {...course} priority={index < 2} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="progress">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {COURSES.filter(c => c.status === "in-progress").map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DashboardCourseCard {...course} priority={index < 2} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {COURSES.filter(c => c.status === "completed").map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DashboardCourseCard {...course} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wishlist">
              <div className="flex flex-col items-center justify-center py-24 text-center space-y-6">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-gray-200" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-secondary">No courses in wishlist</h3>
                  <p className="text-sm text-gray-400">Start exploring our premium curriculum to add items here.</p>
                </div>
                <Button className="rounded-xl px-8 h-12 text-[11px] font-black uppercase tracking-widest">Explore Courses</Button>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* Quote Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 sm:py-20 text-center space-y-6 sm:space-y-8 border-t border-gray-100"
      >
        <blockquote className="max-w-3xl mx-auto space-y-4 sm:space-y-6 px-4">
          <p className="text-xl sm:text-3xl lg:text-4xl font-serif italic text-secondary leading-tight">
            "The beautiful thing about learning is that no one can take it away from you."
          </p>
          <footer className="space-y-1">
            <cite className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary not-italic">B.B. King</cite>
            <p className="text-[9px] font-bold uppercase tracking-widest text-primary">Life Long Learner</p>
          </footer>
        </blockquote>
      </motion.section>

    </div>
  );
}
