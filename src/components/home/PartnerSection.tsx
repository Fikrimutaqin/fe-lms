"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Google", logo: "GOOGLE" },
  { name: "Microsoft", logo: "MICROSOFT" },
  { name: "Amazon", logo: "AMAZON" },
  { name: "Meta", logo: "META" },
  { name: "Netflix", logo: "NETFLIX" },
  { name: "Spotify", logo: "SPOTIFY" },
  { name: "Adobe", logo: "ADOBE" },
];

export default function PartnerSection() {
  return (
    <section className="py-12 bg-white border-y border-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-gray-400"
          >
            Empowering professionals at world-class teams
          </motion.p>

          <div className="w-full overflow-hidden relative">
            {/* Gradient Mask for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10" />

            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex items-center gap-16 md:gap-24 w-max whitespace-nowrap"
            >
              {/* Double the list for seamless loop */}
              {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                <div
                  key={index}
                  className="text-2xl md:text-3xl font-black tracking-tighter text-gray-200 hover:text-primary transition-colors duration-500 cursor-default select-none"
                >
                  {partner.logo}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
