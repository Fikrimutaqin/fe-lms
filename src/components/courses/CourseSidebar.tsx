"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { ChevronDown } from "lucide-react";

export default function CourseSidebar() {
  const { t } = useLanguage();
  const filters = t.coursesPage.filters;

  const disciplines = [
    "Strategic Leadership",
    "Digital Philosophy",
    "Advanced Economics",
    "Architectural Design"
  ];

  const experience = [
    "Executive Mastery",
    "Emerging Talent",
    "Foundations of Wisdom"
  ];

  const formats = [
    "Cohort Based",
    "Self Paced",
    "Hybrid Learning"
  ];

  return (
    <div className="space-y-10 pr-8">
      {/* Disciplines */}
      <div className="space-y-4">
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          {filters.disciplines}
        </h4>
        <div className="space-y-2">
          {disciplines.map((item, idx) => (
            <button 
              key={idx} 
              className="w-full flex items-center justify-between text-sm font-bold text-secondary hover:text-primary transition-colors group py-1"
            >
              {item}
              <span className="text-[10px] text-gray-300 group-hover:text-primary transition-colors italic">12</span>
            </button>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          {filters.experience}
        </h4>
        <div className="space-y-4">
          {experience.map((item, idx) => (
            <label key={idx} className="flex items-center gap-4 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  className="peer appearance-none w-4 h-4 border border-gray-200 rounded-sm checked:bg-secondary checked:border-secondary transition-all"
                  defaultChecked={idx === 1}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 text-white pointer-events-none scale-75">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>
                </div>
              </div>
              <span className="text-xs font-bold text-gray-500 group-hover:text-secondary transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Course Format */}
      <div className="space-y-4">
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          {filters.format}
        </h4>
        <div className="flex flex-wrap gap-2">
          {formats.map((item, idx) => (
            <button 
              key={idx} 
              className={`px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${
                idx === 1 
                ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/20' 
                : 'border-gray-100 text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
