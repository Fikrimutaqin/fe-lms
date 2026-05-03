"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface DashboardCourseCardProps {
  title: string;
  instructor: string;
  image: string;
  category: string;
  progress: number;
  status: "in-progress" | "completed";
  priority?: boolean;
}

export default function DashboardCourseCard({
  title,
  instructor,
  image,
  category,
  progress,
  status,
  priority = false
}: DashboardCourseCardProps) {
  return (
    <div className="bg-white rounded-4xl overflow-hidden border border-gray-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 group flex flex-col h-full">
      {/* Image Section */}
      <div className="relative aspect-16/10 overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-white/95 backdrop-blur-md text-secondary text-[9px] px-3 py-1 font-black uppercase rounded-full border-none shadow-sm tracking-wider">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-500" />
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        <div className="space-y-1.5 mb-6">
          <h3 className="text-[16px] sm:text-[17px] font-bold text-secondary leading-[1.3] line-clamp-2 min-h-[44px] group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium tracking-wide">By {instructor}</p>
        </div>

        <div className="mt-auto space-y-5">
          <div className="space-y-2.5">
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Progress</span>
              <span className={`text-[10px] font-black uppercase tracking-wider ${status === 'completed' ? 'text-emerald-500' : 'text-secondary/60'}`}>
                {status === 'completed' ? 'Completed' : `${progress}%`}
              </span>
            </div>
            <div className="h-1.5 w-full bg-gray-100/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full rounded-full ${status === 'completed' ? 'bg-emerald-500' : 'bg-primary'}`} 
              />
            </div>
          </div>

          <Link href="/dashboard/courses/watch" className="w-full">
            <Button 
              variant="outline" 
              className={`w-full h-12 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-500 ${
                status === 'completed' 
                ? 'bg-[#F4F7FE] text-[#4A6CF7] border-transparent hover:bg-[#4A6CF7] hover:text-white' 
                : 'border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary'
              }`}
            >
              {status === 'completed' ? (
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  View Certificate
                </span>
              ) : (
                "Continue Learning"
              )}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
