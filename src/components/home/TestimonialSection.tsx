"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Andi Wijaya",
    role: "Senior Developer at TechCorp",
    content: "EduPro benar-benar mengubah cara saya belajar. Materi Python-nya sangat mendalam dan mudah dipahami bahkan untuk topik yang kompleks sekalipun.",
    image: "/assets/images/user-1.png",
    rating: 5
  },
  {
    name: "Siska Putri",
    role: "UI/UX Designer",
    content: "Kursus desain di sini sangat up-to-date dengan tren industri saat ini. Saya berhasil mendapatkan pekerjaan pertama saya setelah menyelesaikan bootcamp desain.",
    image: "/assets/images/user-2.png",
    rating: 5
  },
  {
    name: "Budi Santoso",
    role: "Digital Marketer",
    content: "Sistem lifetime purchase sangat menguntungkan. Saya bisa mengulang materi kapan saja saya butuh referensi untuk pekerjaan kampanye saya.",
    image: "/assets/images/user-3.png",
    rating: 5
  }
];

export default function TestimonialSection() {
  return (
    <section className="w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight"
          >
            Apa Kata Mereka?
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1.5 bg-primary rounded-full" 
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 max-w-lg"
          >
            Ribuan pelajar telah berhasil meningkatkan karier mereka melalui kursus berkualitas di platform kami.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex text-amber-500 mb-4">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-secondary font-medium leading-relaxed mb-8 italic">
                "{testi.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image src={testi.image} alt={testi.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary text-sm">{testi.name}</h4>
                  <p className="text-xs text-gray-400">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
