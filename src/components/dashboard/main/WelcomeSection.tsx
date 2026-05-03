"use client";

import { motion } from "framer-motion";

interface WelcomeSectionProps {
  welcome: string;
  journey: string;
  focusText: string;
}

export default function WelcomeSection({ welcome, journey, focusText }: WelcomeSectionProps) {
  return (
    <div className="flex-1 space-y-4">
      <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Executive Dashboard</p>
      <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter leading-tight italic">
        {welcome} Alexander.<br />
        <span className="text-gray-400 not-italic">{journey}</span>
      </h2>
      <p className="text-sm text-gray-500 font-medium max-w-xl">
        {focusText}
      </p>
    </div>
  );
}
