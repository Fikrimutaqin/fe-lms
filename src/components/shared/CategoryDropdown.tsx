"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const CATEGORIES = [
  { title: "Development", image: "/assets/images/cat-dev.png", desc: "Build amazing websites and apps" },
  { title: "Business", image: "/assets/images/cat-biz.png", desc: "Learn leadership and marketing" },
  { title: "Design", image: "/assets/images/cat-design.png", desc: "Master UI/UX and graphic design" },
  { title: "Marketing", image: "/assets/images/cat-design.png", desc: "Grow your business with digital marketing" },
];

interface CategoryDropdownProps {
  isOpen: boolean;
}

export default function CategoryDropdown({ isOpen }: CategoryDropdownProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 w-[450px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-100 mt-2"
        >
          <div className="p-4 grid grid-cols-1 gap-2">
            <div className="px-4 py-2 border-b border-gray-50">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.menu.exploreCategories}</span>
            </div>
            {CATEGORIES.map((cat, idx) => (
              <Link
                key={idx}
                href="/categories"
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-all group"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0 shadow-sm">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-secondary text-sm group-hover:text-primary transition-colors">{cat.title}</h4>
                  <p className="text-xs text-gray-400 font-medium line-clamp-1">{cat.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-200 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
            <div className="p-2 mt-2 bg-gray-50 rounded-2xl">
              <Link href="/categories" className="flex items-center justify-center py-2 text-xs font-bold text-primary hover:underline">
                {t.menu.seeAllCategories}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
