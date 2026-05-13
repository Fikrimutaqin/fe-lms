"use client";

import CategoryCard from "../shared/CategoryCard";
import CategoryCardSkeleton from "../shared/CategoryCardSkeleton";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/axios";

export default function CategorySection() {
  const { t: translations } = useLanguage();
  const t = translations.category;

  interface Categories {
    id: string;
    name: string;
    image: string;
    slug: string;
    description: string;
    courseSold?: number;
  }

  // Tanstack Query
  const { data: queryData, isLoading } = useQuery({
    queryKey: ['categories', 'top'],
    queryFn: async () => {
      const response = await axiosInstance.get('/categories/top');
      return response.data.data;
    },
  });

  const categories = Array.isArray(queryData) ? queryData : [];

  return (
    <section className="w-full py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
            {t.title}
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
          <p className="text-gray-500 max-w-lg">{t.subtitle}</p>
        </motion.div>


        {isLoading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[...Array(4)].map((_, idx) => (
              <CategoryCardSkeleton key={idx} />
            ))}
          </div>
        ) : categories.length === 0 ? (
          <div className="w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 max-w-lg text-center w-full">No Category Found</p>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {categories.map((cat: Categories, idx: number) => (
              <motion.div
                key={cat.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <CategoryCard title={cat.name} image={cat.image} sold={cat.courseSold} priority={idx < 4} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section >
  );
}
