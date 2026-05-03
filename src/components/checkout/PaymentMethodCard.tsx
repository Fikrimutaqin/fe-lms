"use client";

import { Check } from "lucide-react";

interface PaymentMethodProps {
  id: string;
  name: string;
  sub?: string;
  initials?: string;
  color?: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  type: 'va' | 'ewallet';
}

export default function PaymentMethodCard({ id, name, sub, initials, color, isSelected, onSelect, type }: PaymentMethodProps) {
  if (type === 'va') {
    return (
      <button
        onClick={() => onSelect(id)}
        className={`relative p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 group ${isSelected
          ? "border-primary bg-primary/5"
          : "border-gray-100 bg-white hover:border-gray-200"
          }`}
      >
        <span className={`font-black text-lg ${isSelected ? "text-primary" : "text-secondary"}`}>
          {name}
        </span>
        {sub && (
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
            {sub}
          </span>
        )}
        {isSelected && (
          <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={() => onSelect(id)}
      className={`relative p-5 rounded-2xl border-2 transition-all flex items-center gap-3 group ${isSelected
        ? "border-primary bg-primary/5"
        : "border-gray-100 bg-white hover:border-gray-200"
        }`}
    >
      <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white font-black text-xs shrink-0`}>
        {initials}
      </div>
      <span className={`font-bold truncate ${isSelected ? "text-primary" : "text-secondary"}`}>
        {name}
      </span>
      {isSelected && (
          <div className="absolute top-2 right-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
        )}
    </button>
  );
}
