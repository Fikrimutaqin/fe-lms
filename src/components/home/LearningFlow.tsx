"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Terminal, Trophy, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/providers/LanguageProvider";

const STEPS_DATA = [
  {
    id: "01",
    icon: Brain,
    color: "from-blue-500 to-blue-600",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    id: "02",
    icon: Cpu,
    color: "from-purple-500 to-purple-600",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    id: "03",
    icon: Terminal,
    color: "from-emerald-500 to-emerald-600",
    glow: "group-hover:shadow-emerald-500/20",
  },
  {
    id: "04",
    icon: Trophy,
    color: "from-amber-500 to-amber-600",
    glow: "group-hover:shadow-amber-500/20",
  }
];

export default function LearningFlow() {
  const { t: translations } = useLanguage();
  const t = translations.learningFlow;

  return (
    <section className="py-20 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
          >
            <span className="text-xs font-black uppercase text-primary">{t.badge}</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-secondary tracking-tighter">
            {t.title.split(" ").map((word, i, arr) => (
              i === arr.length - 1 ? (
                <span key={i} className="text-transparent bg-clip-text bg-linear-to-r from-primary to-indigo-600 italic">{word}</span>
              ) : word + " "
            ))}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STEPS_DATA.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`h-full p-8 lg:p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl ${step.glow} hover:-translate-y-2 flex flex-col`}>

                {/* Header: Icon & ID */}
                <div className="flex items-start justify-between mb-10">
                  <div className={`w-16 h-16 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center text-white shadow-xl shadow-gray-200 transition-transform duration-500 group-hover:rotate-6`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="text-4xl font-black text-gray-50 italic group-hover:text-gray-100 transition-colors">
                    {step.id}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-black text-secondary tracking-tight">
                    {t.steps[index].title}
                  </h3>
                  <p className="text-gray-400 font-medium leading-relaxed text-sm">
                    {t.steps[index].description}
                  </p>
                </div>

                {/* Footer: Learn More */}
                <div className="pt-8 flex items-center gap-3 text-primary font-black text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  Learn Protocol <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Decorative Connector (Desktop) */}
              {index < STEPS_DATA.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-100 z-0" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex justify-center"
        >
          <button className="h-14 px-10 bg-transparent border border-primary text-primary font-black text-xs uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all active:scale-95 shadow-xl shadow-secondary/10">
            {t.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
