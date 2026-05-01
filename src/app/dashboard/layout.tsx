"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  CreditCard,
  Settings,
  Search,
  Bell,
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";

const SIDEBAR_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'dashboard', href: '/dashboard' },
  { id: 'courses', icon: BookOpen, label: 'myCourses', href: '/dashboard/courses' },
  { id: 'mentors', icon: Users, label: 'mentors', href: '/dashboard/mentors' },
  { id: 'transactions', icon: CreditCard, label: 'transactions', href: '/dashboard/transactions' },
  { id: 'settings', icon: Settings, label: 'settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const d = t.dashboardPage;
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="fixed inset-0 z-200 bg-[#F8F9FA] flex overflow-hidden font-sans">

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 256 : 88 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white border-r border-gray-100 flex flex-col shrink-0 relative"
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-10 w-6 h-6 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-primary shadow-sm z-50 transition-colors"
        >
          {isExpanded ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>

        <div className="p-6 h-24 flex items-center">
          <Link href="/" className="flex items-center gap-3 group overflow-hidden">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">E</span>
            </div>
            {isExpanded && (
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

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {SIDEBAR_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-sm h-12 ${activeTab === item.id
                  ? "bg-primary/5 text-primary shadow-sm shadow-primary/5"
                  : "text-gray-400 hover:text-secondary hover:bg-gray-50"
                }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="whitespace-nowrap"
                >
                  {d.sidebar[item.label as keyof typeof d.sidebar]}
                </motion.span>
              )}
              {isExpanded && activeTab === item.id && (
                <motion.div layoutId="active-pill" className="ml-auto w-1 h-5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-50">
          <div className={`flex items-center gap-3 p-3 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group overflow-hidden ${!isExpanded && 'justify-center'}`}>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 relative shrink-0">
              <Image src="/assets/images/user-1.png" alt="User" fill className="object-cover" sizes="40px" />
            </div>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 min-w-0"
              >
                <p className="text-xs font-bold text-secondary truncate">Alexander Thorne</p>
                <p className="text-[10px] text-gray-400 font-medium truncate uppercase tracking-tighter">Executive Member</p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
          <div className="w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search curriculum, mentors..."
              className="pl-11 h-11 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-1 focus:ring-primary/20"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-gray-50 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-gray-50">
              <Globe className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-gray-100 mx-2" />
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-secondary hidden sm:block">Alexander</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs">
                AT
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
