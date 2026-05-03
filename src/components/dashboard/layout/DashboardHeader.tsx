"use client";

import { Bell, Globe, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface DashboardHeaderProps {
  setIsMobileMenuOpen: (open: boolean) => void;
  setIsLanguageModalOpen: (open: boolean) => void;
  language: string;
}

export default function DashboardHeader({
  setIsMobileMenuOpen,
  setIsLanguageModalOpen,
  language
}: DashboardHeaderProps) {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 shrink-0 relative z-20">
      <div className="flex items-center gap-4 w-96">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-secondary hover:bg-gray-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="w-full max-w-full relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search curriculum..."
            className="pl-11 h-11 w-full bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-1 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <Link href="/dashboard/notifications">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-gray-50 relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
          </button>
        </Link>
        <button 
          onClick={() => setIsLanguageModalOpen(true)}
          className="h-10 px-3 rounded-xl hidden sm:flex items-center gap-2 text-gray-400 hover:text-secondary hover:bg-gray-50 transition-colors"
        >
          <Globe className="w-5 h-5" />
          <span className="text-[11px] font-black uppercase tracking-widest">{language}</span>
        </button>
        <div className="w-px h-6 bg-gray-100 mx-1 lg:mx-2" />
        <div className="flex items-center gap-3 pl-1">
          <span className="text-sm font-bold text-secondary hidden lg:block">Alexander</span>
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
            AT
          </div>
        </div>
      </div>
    </header>
  );
}
