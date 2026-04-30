"use client";

import CategoryCard from "../shared/CategoryCard";
import { motion } from "framer-motion";

const CATEGORIES = [
  { title: "Development", image: "/assets/images/cat-dev.png" },
  { title: "Business", image: "/assets/images/cat-biz.png" },
  { title: "Design", image: "/assets/images/cat-design.png" },
  { title: "Marketing", image: "/assets/images/cat-design.png" }, 
];

export default function CategorySection() {
  return (
    <section className="w-full py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
            Kategori Teratas
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
          <p className="text-gray-500 max-w-lg">Temukan topik populer dan mulai belajar dari para ahli di bidangnya.</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CategoryCard {...cat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
