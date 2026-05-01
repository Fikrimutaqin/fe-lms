"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  image: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  instructorName: string;
  instructorImage: string;
  price: string;
  rating: number;
}

export default function CourseCard({
  image,
  category,
  tag,
  title,
  description,
  instructorName,
  instructorImage,
  price,
  rating
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href="/courses/1" className="group cursor-pointer block">
        <div className="relative aspect-4/5 rounded-[32px] overflow-hidden mb-6 bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 450px"
          />
          {/* Category Overlay */}
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-secondary shadow-sm uppercase tracking-wider">
              {category}
            </span>
          </div>
        </div>

        <div className="space-y-4 px-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{tag}</span>
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-0.5 rounded-md">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-[11px] font-bold text-secondary">{rating}</span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-secondary tracking-tight leading-[1.1] group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed font-medium">
            {description}
          </p>

          <div className="pt-5 flex items-center justify-between border-t border-gray-100 mt-6">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7 rounded-full overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500">
                <Image src={instructorImage} alt={instructorName} fill className="object-cover" sizes="28px" />
              </div>
              <span className="text-[11px] font-bold text-gray-400 group-hover:text-secondary transition-colors italic">{instructorName}</span>
            </div>
            <span className="text-base font-black text-secondary tracking-tight">{price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
