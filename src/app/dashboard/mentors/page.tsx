"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  Star, 
  MessageSquare, 
  Calendar, 
  ChevronRight,
  Globe,
  Award,
  Video
} from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MENTORS = [
  {
    id: 1,
    name: "Dr. Julianne Thorne",
    role: "Ex-Director at McKinsey & Company",
    expertise: ["Business Strategy", "Market Entry"],
    rating: 5.0,
    students: 1240,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    description: "Specializing in high-growth strategies and digital transformation for Fortune 500 companies."
  },
  {
    id: 2,
    name: "Marcus Aris Giles",
    role: "Behavioral Psychologist & Leadership Coach",
    expertise: ["Leadership", "EQ", "Management"],
    rating: 4.9,
    students: 890,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    description: "Developing elite teams through emotional intelligence and neuroscience-based management."
  },
  {
    id: 3,
    name: "Helena Vane",
    role: "Innovation Consultant at Google X",
    expertise: ["Design Thinking", "Product Innovation"],
    rating: 4.8,
    students: 2100,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    description: "Helping startups and enterprises build disruptive products and innovative cultures."
  },
  {
    id: 4,
    name: "Professor Alistair Cook",
    role: "Senior Economist at Oxford University",
    expertise: ["Economics", "Game Theory"],
    rating: 5.0,
    students: 1560,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    description: "Bridging microeconomic theory with real-world market design and strategic dominance."
  }
];

export default function MentorsPage() {
  return (
    <div className="p-4 sm:p-8 space-y-12 max-w-[1400px] mx-auto pb-20">
      
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="space-y-2">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black text-primary uppercase tracking-[0.3em]"
          >
            Elite Faculty
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight"
          >
            Learn from the masters
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm max-w-2xl leading-relaxed font-medium"
        >
          Our mentors are not just teachers; they are industry titans and academic leaders who have shaped the digital economy. Book 1-on-1 sessions for personalized executive guidance.
        </motion.p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search mentors by name or expertise..."
            className="pl-11 h-12 bg-white border-gray-100 rounded-2xl focus:ring-primary/20"
          />
        </div>
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          <Badge className="bg-primary text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-pointer whitespace-nowrap">All Expertise</Badge>
          <Badge variant="outline" className="px-5 py-2.5 rounded-xl border-gray-100 text-gray-400 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-gray-50 whitespace-nowrap">Strategy</Badge>
          <Badge variant="outline" className="px-5 py-2.5 rounded-xl border-gray-100 text-gray-400 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-gray-50 whitespace-nowrap">Innovation</Badge>
          <Badge variant="outline" className="px-5 py-2.5 rounded-xl border-gray-100 text-gray-400 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-gray-50 whitespace-nowrap">Leadership</Badge>
          <Button variant="outline" className="h-10 w-10 p-0 rounded-xl border-gray-100">
            <Filter className="w-4 h-4 text-gray-400" />
          </Button>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {MENTORS.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="group bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500 flex flex-col"
          >
            <div className="p-8 space-y-6 flex-1">
              {/* Header: Avatar & Basic Info */}
              <div className="flex items-start gap-5">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-gray-50 group-hover:scale-105 transition-transform duration-500">
                  <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-secondary group-hover:text-primary transition-colors leading-tight">{mentor.name}</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed line-clamp-2">{mentor.role}</p>
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span className="text-xs font-black text-secondary">{mentor.rating}</span>
                    </div>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">{mentor.students} Students</span>
                  </div>
                </div>
              </div>

              {/* Expertise Badges */}
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map(skill => (
                  <Badge key={skill} className="bg-gray-50 text-gray-500 hover:bg-primary/5 hover:text-primary border-none px-3 py-1 text-[9px] font-black uppercase tracking-wider rounded-lg transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-xs font-medium leading-relaxed italic border-l-2 border-gray-100 pl-4 py-1">
                "{mentor.description}"
              </p>

              {/* Stats/Icons */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center space-y-1">
                  <MessageSquare className="w-4 h-4 mx-auto text-gray-300" />
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Chat</p>
                </div>
                <div className="text-center space-y-1">
                  <Video className="w-4 h-4 mx-auto text-gray-300" />
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Live</p>
                </div>
                <div className="text-center space-y-1">
                  <Award className="w-4 h-4 mx-auto text-gray-300" />
                  <p className="text-[8px] font-black text-gray-300 uppercase tracking-widest">Elite</p>
                </div>
              </div>
            </div>

            {/* Footer: Action Button */}
            <div className="p-6 bg-gray-50/50 border-t border-gray-100 group-hover:bg-primary/5 transition-colors">
              <Button className="w-full h-12 rounded-xl bg-white border border-gray-100 text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 shadow-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Executive Session
                </span>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[3rem] overflow-hidden bg-secondary p-10 sm:p-16 text-center space-y-8"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600" alt="Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Badge className="bg-primary/20 text-primary border-none px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">Become a Mentor</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Share your expertise with the next generation of leaders</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are always looking for exceptional leaders, innovators, and thinkers to join our faculty. If you have a proven track record in the digital economy, apply to become an EduPro Elite mentor.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-secondary h-14 px-10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500">
              Apply to Faculty
            </Button>
            <Button variant="outline" className="border-white/10 text-white h-14 px-10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-secondary transition-all duration-500">
              Learn More
            </Button>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
