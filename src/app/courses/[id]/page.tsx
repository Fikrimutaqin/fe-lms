"use client";

import Navbar from "@/components/layout/Navbar";
import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Play,
  Star,
  Clock,
  FileText,
  ShieldCheck,
  Globe,
  ChevronRight,
  CheckCircle2,
  Lock
} from "lucide-react";
import Link from "next/link";

export default function CourseDetailPage() {
  const { t, language } = useLanguage();
  const d = t.courseDetail;

  const curriculum = [
    { num: "01", title: "Foundations of Cognitive Architecture", desc: "Principles of first-principles thinking and strategic regression.", time: "45 mins", locked: false },
    { num: "02", title: "The Psychology of Decision Making", desc: "Identifying bias and mental shortcuts in high-stakes environments.", time: "1h 12m", locked: true },
    { num: "03", title: "Advanced Systems Archetypes", desc: "Deep dive into feedback loops and evolutionary structures.", time: "55 mins", locked: true },
  ];

  return (
    <main className="min-h-screen bg-white pb-24">

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/course-bg.png"
          alt="Course Background"
          fill
          className="object-cover grayscale opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/80 to-white" />

        {/* Mesh Gradients Background (Home Hero Pattern) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-primary/20 rounded-full blur-[140px] opacity-80" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[800px] h-[800px] bg-primary/25 rounded-full blur-[160px] opacity-70" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-indigo-200/40 rounded-full blur-[100px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-3xl px-4"
        >
          <div className="bg-white/80 backdrop-blur-2xl p-6 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl border border-white/50 text-center space-y-4 md:space-y-6">
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-secondary/5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-secondary border border-secondary/10">Cognitive Series</span>
              <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-primary/5 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-primary border border-primary/10">Executive Level</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold text-secondary tracking-tighter leading-[1.1]">
              Strategic Thinking & Cognitive Architecture
            </h1>

            <p className="text-gray-500 text-xs md:text-base max-w-xl mx-auto leading-relaxed font-medium px-2">
              A masterclass designed for senior leaders to provide mental modeling, decision-making frameworks, and insights into complex systems.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-2 md:pt-4">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src="/assets/images/user-1.png"
                    alt="Instructor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 32px, 40px"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">Lead Mentor</p>
                  <p className="text-xs font-black text-secondary">Dr. Alistair Vaughn</p>
                </div>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-100" />
              <div className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs md:text-sm font-black text-secondary">4.9</span>
                <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">(214 Reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 max-w-6xl mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">

          {/* Left Column: Details - MOVED DOWN ON MOBILE */}
          <div className="lg:col-span-7 space-y-12 md:space-y-16 order-2 lg:order-1">

            {/* Philosophy */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold text-secondary tracking-tight">{d.philosophyTitle}</h2>
              <p className="text-gray-500 leading-relaxed font-medium">
                Education is not about rote memorization; it is about building a mental scaffolding that allows you to see the world with newfound clarity. Our "Strategic" curriculum is structured to move from the foundational principles of logic into the advanced realms of systemic intuition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-3xl bg-gray-50/50 border border-gray-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-secondary">Mental Models</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Master over 50 cognitive frameworks used by world-class strategists.</p>
                </div>
                <div className="p-6 rounded-3xl bg-gray-50/50 border border-gray-100 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-secondary">Systems Analysis</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">Learn to identify leverage points in complex organizational structures.</p>
                </div>
              </div>
            </section>

            {/* Curriculum */}
            <section className="space-y-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="text-3xl font-bold text-secondary tracking-tight">{d.curriculumTitle}</h2>
                <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">12 Total Chapters • 14h 30m</span>
              </div>

              <div className="space-y-4">
                {curriculum.map((item, idx) => (
                  <div key={idx} className="group p-6 rounded-[32px] border border-gray-100 hover:border-primary/20 hover:bg-primary/2 transition-all flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-6">
                      <span className="text-2xl font-black text-gray-200 group-hover:text-primary/30 transition-colors">{item.num}</span>
                      <div className="space-y-1">
                        <h4 className="font-bold text-secondary group-hover:text-primary transition-colors">{item.title}</h4>
                        <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold text-gray-300">{item.time}</span>
                      {item.locked ? (
                        <Lock className="w-4 h-4 text-gray-300" />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <Play className="w-3 h-3 fill-current" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full h-14 rounded-2xl border-gray-100 text-gray-400 font-bold hover:text-primary hover:border-primary transition-all">
                {d.viewSyllabus}
              </Button>
            </section>
          </div>

          {/* Right Column: Floating Sidebar - TOP ON MOBILE */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white rounded-[48px] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden p-4">
                <div className="relative aspect-video rounded-[36px] overflow-hidden mb-8 group">
                  <Image src="/assets/images/course-1.png" alt="Preview" fill className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2]" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-8 space-y-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-secondary tracking-tighter">$899</span>
                    <span className="text-lg text-gray-300 line-through font-bold">$1,250</span>
                    <span className="ml-auto text-[10px] font-black text-primary uppercase tracking-widest">Limited window</span>
                  </div>

                  <div className="space-y-3">
                    <Link href="/checkout" className="block w-full">
                      <Button className="w-full h-16 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/10 transition-all active:scale-95">
                        {d.enrollNow}
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full h-14 rounded-2xl border-gray-100 text-secondary font-bold hover:bg-gray-50 transition-all">
                      {d.scholarship}
                    </Button>
                  </div>

                  <div className="space-y-4 pt-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{d.included}</p>
                    <div className="grid grid-cols-1 gap-3">
                      {d.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 text-xs font-bold text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-center text-gray-400 px-8 font-medium italic">
                All digital resources, including proprietary frameworks, are delivered upon successful enrollment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <section className="container mx-auto px-4 max-w-6xl mt-24 md:mt-40">
        <div className="bg-gray-50 rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col md:flex-row items-center">
          <div className="flex-1 p-8 md:p-24 space-y-6 md:space-y-8 text-center md:text-left">
            <span className="text-[10px] md:text-[11px] font-black text-primary uppercase tracking-[0.3em]">{d.mentorWord}</span>
            <blockquote className="text-2xl md:text-5xl font-bold text-secondary tracking-tighter leading-tight italic">
              "The quality of your life is determined by the quality of the decisions you make every day. My mission is to give you the mental operating system to navigate complexity with effortless precision."
            </blockquote>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="hidden md:block w-12 h-px bg-gray-300" />
              <span className="text-xs md:text-sm font-black text-secondary">Dr. Alistair Vaughn</span>
            </div>
          </div>
          <div className="relative w-full md:w-[450px] aspect-square md:aspect-3/4">
            <Image src="/assets/images/mentor-teaching.png" alt="Mentor" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
