"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { Button } from "@/components/ui/button";

export default function MentorSidebar() {
  const { t } = useLanguage();
  const filters = t.mentorsPage.filters;

  const expertise = ["Architecture", "Decision Science", "Ethics", "Computational Philosophy", "Leadership"];
  const roles = ["Executive", "Thought Leader", "Practitioner", "Academic"];

  return (
    <div className="space-y-12">
      {/* Expertise */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          {filters.expertise}
        </h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((item, idx) => (
            <Button 
              key={idx} 
              variant="outline" 
              className="h-9 px-4 rounded-full border-gray-100 text-[11px] font-bold text-gray-500 hover:border-primary hover:text-primary transition-all shadow-none"
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      {/* Roles */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
          {filters.role}
        </h4>
        <div className="space-y-4">
          {roles.map((item, idx) => (
            <label key={idx} className="flex items-center gap-4 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  className="peer appearance-none w-4 h-4 border border-gray-200 rounded-sm checked:bg-secondary checked:border-secondary transition-all"
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
    </div>
  );
}
