"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

interface MentorCardProps {
  image: string;
  name: string;
  role: string;
  expertise: string[];
  rating: number;
  studentsCount: string;
  bio: string;
}

export default function MentorCard({
  image,
  name,
  role,
  expertise,
  rating,
  studentsCount,
  bio
}: MentorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href="#" className="group cursor-pointer block">
        <div className="relative aspect-4/5 rounded-[32px] overflow-hidden mb-6 bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 450px"
          />
          {/* Expertise Overlay */}
          <div className="absolute top-6 left-6 flex flex-wrap gap-2 pr-6">
            {expertise.map((exp, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[9px] font-black text-secondary shadow-sm uppercase tracking-wider">
                {exp}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 px-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{role}</span>
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-md">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-[11px] font-bold text-secondary">{rating}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-secondary tracking-tight leading-[1.1] group-hover:text-primary transition-colors">
            {name}
          </h3>

          <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed font-medium">
            {bio}
          </p>

          <div className="pt-5 flex items-center justify-between border-t border-gray-100 mt-6">
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Active Students</span>
                <span className="text-xs font-black text-secondary">{studentsCount}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-primary transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-primary transition-colors">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
