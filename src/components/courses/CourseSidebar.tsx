"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { useState } from "react";

interface CourseSidebarProps {
  categories: Categories[];
  clickedCategories: (id: string) => void;
}

interface Categories {
  id: string;
  name: string;
  slug: string;
}

export default function CourseSidebar({ categories, clickedCategories }: CourseSidebarProps) {
  const { t } = useLanguage();
  const filters = t.coursesPage.filters;

  const [idCategory, setIdCategory] = useState<string | null>("");

  return (
    <div className="space-y-10 pr-8">
      {/* Course Format */}
      <div className="space-y-4">
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">
          {filters.categoryCourse}
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((item, idx) => (
            <button
              key={idx}
              onClick={() => { setIdCategory(item.id); clickedCategories(item.id) }}
              className={`px-4 py-2 rounded-full text-[11px] font-bold border transition-all ${(item.id === idCategory)
                ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/20'
                : 'border-gray-100 text-secondary hover:border-primary hover:text-primary'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
