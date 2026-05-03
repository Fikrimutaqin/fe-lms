"use client";

import { motion } from "framer-motion";
import {
  Play,
  CheckCircle2,
  Lock,
  FileText,
  Download,
  Star,
  Users,
  ChevronDown,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const CURRICULUM = [
  {
    id: "section-1",
    title: "01 Foundational Ethics",
    lessons: [
      { id: "l1", title: "Intro to Moral Philosophy", duration: "12:40", status: "completed" },
      { id: "l2", title: "The Executive Charter", duration: "18:20", status: "completed" },
    ]
  },
  {
    id: "section-2",
    title: "02 Strategic Leadership",
    current: true,
    lessons: [
      { id: "l3", title: "Cognitive Frameworks", duration: "42:15", status: "watching" },
      { id: "l4", title: "Emotional Calibration", duration: "34:50", status: "locked" },
      { id: "l5", title: "Crisis Communication", duration: "56:10", status: "locked" },
    ]
  },
  {
    id: "section-3",
    title: "03 Global Economics",
    lessons: [
      { id: "l6", title: "Market Design Principles", duration: "45:00", status: "locked" },
    ]
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus Thorne",
    role: "CEO, NexGen Systems",
    image: "/assets/images/user-1.png",
    rating: 5,
    text: "The level of depth in this module is unparalleled. It's not just information; it's a structural shift in how I view corporate strategy. Highly recommended for C-suite professionals."
  },
  {
    id: 2,
    name: "Elena Vance",
    role: "VP of Design, Horizon",
    image: "/assets/images/user-2.png",
    rating: 5,
    text: "Finally, a course that treats learning like the elite experience it should be. The insights into heuristic frameworks changed my design leadership approach overnight."
  }
];

export default function CourseWatchPage() {
  const [activeLesson, setActiveLesson] = useState("l3");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Main Content (Video & Details) */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-5xl mx-auto p-4 sm:p-8 space-y-8">

          {/* Breadcrumb / Category */}
          <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="text-primary bg-primary/10 px-3 py-1 rounded-full">Module 04</span>
            <span className="text-gray-400">Strategic Leadership</span>
          </div>

          {/* Video Player Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-video rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-secondary shadow-2xl group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600"
              alt="Video Thumbnail"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            {/* Progress Bar in Player */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10">
              <div className="h-full bg-primary w-[42%] shadow-[0_0_15px_rgba(86,36,208,0.8)]" />
            </div>
          </motion.div>

          {/* Title & Author Info */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary leading-tight tracking-tight">
              Cognitive Frameworks for Executive Decision Making
            </h1>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-gray-50">
                  <Image src="/assets/images/user-1.png" alt="Instructor" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Dr. Julian Sterling</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Master Instructor</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-300" />
                <p className="text-sm font-bold text-secondary">12.4k Enrolled</p>
              </div>

              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <p className="text-sm font-bold text-secondary">4.9</p>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList variant="line" className="gap-8 sm:gap-12 mb-8">
              <TabsTrigger value="overview" className="px-0 py-4 text-xs font-black uppercase tracking-widest">Overview</TabsTrigger>
              <TabsTrigger value="resources" className="px-0 py-4 text-xs font-black uppercase tracking-widest">Resources</TabsTrigger>
              <TabsTrigger value="reviews" className="px-0 py-4 text-xs font-black uppercase tracking-widest">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-8">
                  <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    This session explores the intricate neurological processes that underpin high-stakes decision making. We delve into the "Intellectual Sanctuary" model, teaching you how to curate your cognitive environment to mitigate bias and enhance clarity during critical business transitions.
                  </p>

                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-secondary">What you'll master:</h3>
                    <div className="space-y-4">
                      {[
                        "Advanced heuristic identification and de-biasing strategies.",
                        "The architecture of 'Quiet Leadership' in volatile markets.",
                        "Developing a personalized 'Executive Lounge' mental space."
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                          <p className="text-secondary font-medium leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Course Assets Card */}
                <div className="space-y-6">
                  <div className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100 space-y-6">
                    <h4 className="text-sm font-black text-secondary uppercase tracking-widest">Course Assets</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Syllabus.pdf", type: "PDF" },
                        { name: "Decision_Map.xlsx", type: "XLSX" }
                      ].map((asset, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary/20 transition-all cursor-pointer group">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary" />
                            <span className="text-xs font-bold text-secondary">{asset.name}</span>
                          </div>
                          <Download className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                        </div>
                      ))}
                    </div>
                    <Button className="w-full h-14 rounded-2xl bg-secondary text-white font-black text-xs uppercase tracking-widest hover:bg-primary transition-all duration-500">
                      Join the Elite Circle
                    </Button>
                  </div>
                </div>
              </div>

              {/* Testimonials within Overview */}
              <div className="space-y-10 pt-12 border-t border-gray-100">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black text-secondary tracking-tight">Student Testimonials</h2>
                    <p className="text-sm text-gray-400 font-medium">Join the conversation with over 12,000 elite peers.</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-secondary">4.9</div>
                    <div className="flex gap-1 text-amber-400 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Based on 842 reviews</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white rounded-[2.5rem] p-8 border border-gray-50 shadow-sm space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden relative">
                            <Image src={t.image} alt={t.name} fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-secondary">{t.name}</p>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{t.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                        </div>
                      </div>
                      <p className="text-gray-500 leading-relaxed italic font-serif">"{t.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right Sidebar (Curriculum) */}
      <aside className="w-full lg:w-[400px] border-l border-gray-100 flex flex-col bg-gray-50/30">
        {/* Progress Summary */}
        <div className="p-8 space-y-4 border-b border-gray-100 bg-white">
          <h3 className="text-sm font-black text-secondary uppercase tracking-widest">Curriculum</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-end">
              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">64% Course Completed</p>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[64%] rounded-full shadow-[0_0_10px_rgba(86,36,208,0.3)]" />
            </div>
          </div>
        </div>

        {/* Lessons List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
          {CURRICULUM.map((section) => (
            <div key={section.id} className="space-y-4">
              <div className="flex items-center justify-between group cursor-pointer">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Section {section.title.split(' ')[0]}</p>
                  <h4 className="text-sm font-black text-secondary uppercase tracking-widest flex items-center gap-2">
                    {section.title.split(' ').slice(1).join(' ')}
                    {section.id === 'section-3' && <Lock className="w-3.5 h-3.5 text-gray-300" />}
                  </h4>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-300 transition-transform group-hover:text-secondary" />
              </div>

              <div className="space-y-2">
                {section.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group flex items-start gap-4 ${lesson.status === 'watching'
                      ? 'bg-white shadow-xl shadow-secondary/5 border border-primary/10'
                      : lesson.status === 'locked'
                        ? 'opacity-40 grayscale cursor-not-allowed'
                        : 'hover:bg-white hover:shadow-lg hover:shadow-secondary/5'
                      }`}
                  >
                    <div className="mt-0.5">
                      {lesson.status === 'completed' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      ) : lesson.status === 'watching' ? (
                        <PlayCircle className="w-5 h-5 text-primary" />
                      ) : (
                        <Lock className="w-5 h-5 text-gray-300" />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className={`text-xs font-bold leading-tight ${lesson.status === 'watching' ? 'text-secondary' : 'text-gray-400 group-hover:text-secondary'}`}>
                        {lesson.title}
                      </p>
                      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                        Lesson {lesson.id.replace('l', '0')} • {lesson.duration}
                      </p>
                    </div>
                    {lesson.status === 'watching' && (
                      <div className="w-1 h-8 bg-primary rounded-full ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer CTA */}
        <div className="p-8 bg-secondary space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-primary fill-current" />
            </div>
            <p className="text-[10px] font-black text-white uppercase tracking-widest">Elite Circle Benefit</p>
          </div>
          <p className="text-xs text-gray-400 font-medium leading-relaxed">
            Access private 1-on-1 sessions with Dr. Sterling upon completion.
          </p>
          <Button variant="outline" className="w-full h-12 rounded-xl border-white/10 text-white hover:bg-white hover:text-secondary text-[10px] font-black uppercase tracking-widest transition-all">
            Request Mentorship
          </Button>
        </div>
      </aside>
    </div>
  );
}
