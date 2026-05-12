"use client";

import MentorCard from "@/components/mentors/MentorCard";
import MentorSidebar from "@/components/mentors/MentorSidebar";
import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MENTORS_DATA = [
  {
    image: "/assets/images/user-1.png",
    name: "Dr. Alistair Vaughn",
    role: "Lead Mentor",
    expertise: ["Decision Science", "Ethics"],
    rating: 4.9,
    studentsCount: "12,400+",
    bio: "Pioneer in computational ethics and strategic decision-making for Fortune 500 executives."
  },
  {
    image: "/assets/images/user-2.png",
    name: "Elena Vova",
    role: "Senior Practitioner",
    expertise: ["Design Theory", "Minimalism"],
    rating: 5.0,
    studentsCount: "8,900+",
    bio: "Former design director at leading tech giants, specializing in cognitive longevity and aesthetic restraint."
  },
  {
    image: "/assets/images/user-3.png",
    name: "Marcus Chen",
    role: "Thought Leader",
    expertise: ["Quantum Logic", "Strategy"],
    rating: 4.8,
    studentsCount: "15,200+",
    bio: "Quantum physicist turned business strategist, bridging the gap between hardware and human intuition."
  }
];

export default function MentorsPage() {
  const { t } = useLanguage();
  const m = t.mentorsPage;

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold border border-primary rounded-full w-fit px-4 py-2 text-primary uppercase mb-4"
          >
            {m.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8"
          >
            {m.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed"
          >
            {m.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <MentorSidebar />
          </aside>

          {/* Mentor Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
              {MENTORS_DATA.map((mentor, idx) => (
                <MentorCard key={idx} {...mentor} />
              ))}
            </div>

            {/* Load More Button */}
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
                {m.filters.seeMore}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
