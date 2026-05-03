"use client";

import Image from "next/image";
import { Star, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/providers/LanguageProvider";
import { TESTIMONIAL_DATA } from "@/data/home";

export default function TestimonialSection() {
  const { t: translations } = useLanguage();
  const t = translations.testimonial;

  return (
    <section className="w-full py-24 md:py-40 bg-[#FDFDFD] overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tighter italic"
            >
              {t.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 max-w-lg mx-auto font-medium text-lg"
            >
              Real growth stories from our community of 25k+ high-achievers.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {TESTIMONIAL_DATA.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 group overflow-hidden"
            >
              {/* Card Texture */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-gray-50 group-hover:text-primary/5 transition-colors duration-700 -rotate-12" />
              
              <div className="flex text-amber-400 mb-8 relative z-10">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-secondary font-bold text-lg leading-[1.6] mb-12 relative z-10 line-clamp-4 group-hover:line-clamp-none transition-all duration-500 italic">
                "{testi.content}"
              </p>

              <div className="flex items-center justify-between pt-8 border-t border-gray-50 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-4 border-gray-50 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Image src={testi.avatar} alt={testi.name} fill className="object-cover" sizes="56px" />
                  </div>
                  <div>
                    <h4 className="font-black text-secondary text-sm tracking-tight">{testi.name}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{testi.role}</p>
                  </div>
                </div>
                
                {/* Simulated Company Badge */}
                <div className="px-3 py-1 bg-gray-50 rounded-lg text-[9px] font-black text-gray-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                  {testi.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
