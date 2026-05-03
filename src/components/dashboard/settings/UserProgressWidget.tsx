"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Image from "next/image";

export default function UserProgressWidget() {
  return (
    <div className="p-4 mb-2 bg-gray-50/50 rounded-[1.75rem] border border-gray-50 overflow-hidden relative group">
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-white shadow-sm shrink-0">
          <Image src="/assets/images/user-1.png" alt="User" width={48} height={48} className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-black text-secondary truncate">Fikri Mutaqin</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Flame className="w-3 h-3 text-orange-500 fill-orange-500" />
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">12 Day Streak</span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-1.5 relative z-10">
        <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-gray-400">
          <span>Knowledge Level 42</span>
          <span>75%</span>
        </div>
        <div className="h-1.5 bg-white rounded-full overflow-hidden border border-gray-100">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            className="h-full bg-primary"
          />
        </div>
      </div>
      <div className="absolute top-[-50%] right-[-20%] w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
    </div>
  );
}
