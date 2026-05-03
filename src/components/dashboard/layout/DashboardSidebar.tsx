"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DASHBOARD_SIDEBAR_ITEMS } from "@/data/dashboard";

interface DashboardSidebarProps {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  activeTab: string;
  translations: any;
}

export default function DashboardSidebar({
  isMobile,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isExpanded,
  setIsExpanded,
  activeTab,
  translations
}: DashboardSidebarProps) {
  const d = translations;

  return (
    <motion.aside
      initial={false}
      animate={{
        width: isMobile ? 280 : (isExpanded ? 256 : 80),
        x: isMobile ? (isMobileMenuOpen ? 0 : -280) : 0
      }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      className={`
        bg-white border-r border-gray-100 flex flex-col shrink-0 
        ${isMobile ? 'fixed inset-y-0 left-0 z-[400] shadow-2xl' : 'relative z-30'}
        h-full
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => {
          if (isMobile) {
            setIsMobileMenuOpen(false);
          } else {
            setIsExpanded(!isExpanded);
          }
        }}
        className={`absolute left-[calc(100%-14px)] top-10 w-7 h-7 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-primary shadow-[0_2px_10px_rgba(0,0,0,0.06)] z-50 transition-all hover:scale-110 active:scale-95 group/toggle ${isMobile && !isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {isExpanded || isMobile ? (
          <ChevronLeft className="w-4 h-4 group-hover/toggle:-translate-x-0.5 transition-transform" />
        ) : (
          <ChevronRight className="w-4 h-4 group-hover/toggle:translate-x-0.5 transition-transform" />
        )}
      </button>

      {/* Logo Section */}
      <div className="p-6 h-24 flex items-center overflow-hidden">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
            <span className="text-white font-black text-xl">E</span>
          </div>
          {(isExpanded || isMobile) && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-black tracking-tighter text-secondary whitespace-nowrap"
            >
              EduPro Elite
            </motion.span>
          )}
        </Link>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto no-scrollbar z-10">
        {DASHBOARD_SIDEBAR_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => isMobile && setIsMobileMenuOpen(false)}
            className={`
              w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm h-12 
              ${activeTab === item.id
                ? "bg-primary/5 text-primary shadow-sm shadow-primary/5"
                : "text-gray-400 hover:text-secondary hover:bg-gray-50"
              }
              ${(!isExpanded && !isMobile) && 'justify-center px-0'}
            `}
          >
            <item.icon className="w-5 h-5 shrink-0" />
            {(isExpanded || isMobile) && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="whitespace-nowrap"
              >
                {d.sidebar[item.label as keyof typeof d.sidebar]}
              </motion.span>
            )}
            {(isExpanded || isMobile) && activeTab === item.id && (
              <motion.div layoutId="active-pill" className="ml-auto w-1 h-5 bg-primary rounded-full" />
            )}
          </Link>
        ))}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-50">
        <Link 
          href="/dashboard/settings"
          className={`flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group overflow-hidden ${(!isExpanded && !isMobile) && 'justify-center'}`}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 relative shrink-0">
            <Image src="/assets/images/user-1.png" alt="User" fill className="object-cover" sizes="40px" />
          </div>
          {(isExpanded || isMobile) && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 min-w-0"
            >
              <p className="text-xs font-bold text-secondary truncate">Alexander Thorne</p>
              <p className="text-[10px] text-gray-400 font-medium truncate uppercase tracking-tighter">Executive Member</p>
            </motion.div>
          )}
        </Link>
      </div>
    </motion.aside>
  );
}
