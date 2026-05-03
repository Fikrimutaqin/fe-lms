"use client";

import { motion } from "framer-motion";
import { 
  Bell, 
  MessageSquare, 
  BookOpen, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  Trash2,
  Check,
  MoreHorizontal,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NOTIFICATIONS = [
  {
    id: 1,
    type: "mention",
    title: "Dr. Julianne Thorne mentioned you",
    desc: "In 'Advanced Strategic Leadership': \"Alex, your insights on market dominance are spot on...\"",
    time: "2 mins ago",
    unread: true,
    icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    id: 2,
    type: "course",
    title: "New Module Available",
    desc: "Module 5: Global Economics and Game Theory is now open for your subscription.",
    time: "1 hour ago",
    unread: true,
    icon: BookOpen,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    id: 3,
    type: "billing",
    title: "Payment Successful",
    desc: "Your Elite Annual Membership has been successfully renewed. Transaction TRX-8829-1029.",
    time: "5 hours ago",
    unread: false,
    icon: CreditCard,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    id: 4,
    type: "system",
    title: "Welcome to EduPro Elite",
    desc: "Start your journey by completing your profile and exploring our world-class curriculum.",
    time: "1 day ago",
    unread: false,
    icon: CheckCircle2,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export default function NotificationsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="p-4 sm:p-8 space-y-10 max-w-[1400px] mx-auto pb-20">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-2">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black text-primary uppercase tracking-[0.3em]"
          >
            Communication Center
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight"
          >
            Notifications
          </motion.h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-2xl border-gray-100 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50 transition-all">
            <Check className="w-4 h-4" />
            Mark all as read
          </Button>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl text-gray-400 hover:bg-gray-50">
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Tabs / Filters */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
        {["all", "unread", "mentors", "courses", "billing"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeFilter === filter 
                ? "bg-secondary text-white shadow-lg shadow-secondary/10" 
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {NOTIFICATIONS.map((notif, index) => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            className={`group relative flex items-start gap-6 p-6 sm:p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer ${
              notif.unread 
                ? "bg-white border-primary/10 shadow-xl shadow-secondary/5" 
                : "bg-white/50 border-gray-50 hover:bg-white hover:border-gray-100"
            }`}
          >
            {/* Unread Indicator */}
            {notif.unread && (
              <div className="absolute top-8 left-4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(86,36,208,0.8)]" />
            )}

            {/* Icon Box */}
            <div className={`w-14 h-14 sm:w-16 sm:h-16 ${notif.bg} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
              <notif.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${notif.color}`} />
            </div>

            {/* Content Area */}
            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className={`text-base font-black tracking-tight ${notif.unread ? "text-secondary" : "text-gray-500"}`}>
                    {notif.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {notif.time}
                    </p>
                    <span className="w-1 h-1 bg-gray-200 rounded-full" />
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{notif.type}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </Button>
              </div>
              <p className={`text-sm leading-relaxed max-w-3xl ${notif.unread ? "text-gray-500 font-medium" : "text-gray-400"}`}>
                {notif.desc}
              </p>
            </div>

            {/* View Action */}
            <div className="hidden sm:flex items-center self-center pl-4">
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-primary group-hover:text-white group-hover:translate-x-1 transition-all duration-500">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="flex justify-center pt-6">
        <Button variant="outline" className="h-14 px-10 rounded-2xl border-gray-100 text-[10px] font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-500">
          Load earlier notifications
        </Button>
      </div>

    </div>
  );
}
