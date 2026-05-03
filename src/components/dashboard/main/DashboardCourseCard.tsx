"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon, TrendingUp } from "lucide-react";

interface DashboardCourseCardProps {
  category: string;
  title: string;
  description: string;
  progress: number;
  icon: LucideIcon;
  isLocked?: boolean;
}

export default function DashboardCourseCard({ 
  category, 
  title, 
  description, 
  progress, 
  icon: Icon, 
  isLocked = false 
}: DashboardCourseCardProps) {
  return (
    <div className={`p-6 bg-white rounded-4xl border border-gray-100 shadow-sm space-y-6 relative overflow-hidden group ${isLocked ? 'opacity-60' : ''}`}>
      <div className="flex justify-between items-start">
        <span className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest ${isLocked ? 'bg-gray-50 text-gray-400' : 'bg-primary/5 text-primary'}`}>
          {category}
        </span>
        <Icon className={`w-4 h-4 ${isLocked ? 'text-gray-300' : 'text-primary'}`} />
      </div>
      <div className="space-y-2">
        <h4 className="font-bold text-secondary text-lg leading-tight">{title}</h4>
        <p className="text-xs text-gray-400 font-medium line-clamp-2 italic">{description}</p>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
          <span>{isLocked ? 'Status' : 'Progress'}</span>
          <span>{isLocked ? 'Locked' : `${progress}%`}</span>
        </div>
        <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden">
          {!isLocked && <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />}
        </div>
      </div>
      <Button 
        variant={isLocked ? "outline" : "default"}
        className={`w-full rounded-xl h-12 font-black text-[11px] uppercase tracking-widest ${isLocked ? 'border-gray-100 text-gray-400' : 'bg-secondary hover:bg-secondary/90'}`}
      >
        {isLocked ? 'View Syllabus' : 'Resume Lesson'}
      </Button>
    </div>
  );
}
