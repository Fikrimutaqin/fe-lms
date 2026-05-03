"use client";

interface DailyProgressWidgetProps {
  percentage: number;
  label: string;
  sublabel: string;
}

export default function DailyProgressWidget({ percentage, label, sublabel }: DailyProgressWidgetProps) {
  const dashOffset = 251.2 - (251.2 * percentage) / 100;

  return (
    <div className="w-full lg:w-72 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-4 shrink-0">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#F3F4F6" strokeWidth="8" fill="transparent" />
          <circle cx="50" cy="50" r="40" stroke="#8B5CF6" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset={dashOffset} strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-black text-secondary">{percentage}%</span>
        </div>
      </div>
      <div>
        <p className="text-xs font-black text-secondary uppercase tracking-widest">{label}</p>
        <p className="text-[10px] text-gray-400 font-bold mt-1 tracking-tight">{sublabel}</p>
      </div>
    </div>
  );
}
