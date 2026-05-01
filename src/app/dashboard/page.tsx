"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  TrendingUp,
  Clock,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TRANSACTIONS = [
  { id: 1, course: "Global Executive Strategy", date: "Oct 24, 2023", amount: "$899.00", status: "Success" },
  { id: 2, course: "Advanced Market Theory", date: "Oct 12, 2023", amount: "$1,250.00", status: "Success" },
  { id: 3, course: "Leadership Essentials", date: "Sep 15, 2023", amount: "$450.00", status: "Success" },
];

export default function DashboardPage() {
  const { t } = useLanguage();
  const d = t.dashboardPage;

  return (
    <div className="p-8 space-y-10">
      
      {/* Welcome & Daily Progress */}
      <section className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 space-y-4">
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Executive Dashboard</p>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary tracking-tighter leading-tight italic">
            {d.welcome} Alexander.<br />
            <span className="text-gray-400 not-italic">{d.journey}</span>
          </h2>
          <p className="text-sm text-gray-500 font-medium max-w-xl">
            You've completed 72% of your quarterly goals. Today's focus: Advanced Strategic Leadership and Global Economic Policy.
          </p>
        </div>
        
        <div className="w-full lg:w-72 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center gap-4">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#F3F4F6" strokeWidth="8" fill="transparent" />
              <circle cx="50" cy="50" r="40" stroke="#8B5CF6" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="70.3" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-secondary">72%</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-black text-secondary uppercase tracking-widest">{d.dailyMasterclass}</p>
            <p className="text-[10px] text-gray-400 font-bold mt-1 tracking-tight">4.5 / 6 Hours</p>
          </div>
        </div>
      </section>

      {/* Grid Layout for Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Courses & Table */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* In Progress */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-secondary tracking-tight">{d.inProgress}</h3>
              <Link href="/courses" className="text-[10px] font-black text-gray-400 hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-1">
                {d.viewAll} <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Course Card 1 */}
              <div className="p-6 bg-white rounded-4xl border border-gray-100 shadow-sm space-y-6 relative overflow-hidden group">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Strategy</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-secondary text-lg leading-tight">Advanced Strategic Leadership</h4>
                  <p className="text-xs text-gray-400 font-medium line-clamp-2 italic">Mastering decision making in high-stakes environments.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    <span>Progress</span>
                    <span>82%</span>
                  </div>
                  <div className="h-1.5 bg-gray-50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[82%] rounded-full" />
                  </div>
                </div>
                <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/90 h-12 font-black text-[11px] uppercase tracking-widest">Resume Lesson</Button>
              </div>

              {/* Course Card 2 */}
              <div className="p-6 bg-white rounded-4xl border border-gray-100 shadow-sm space-y-6 opacity-60">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-gray-50 text-gray-400 text-[10px] font-bold rounded-full uppercase tracking-widest">Economics</span>
                  <Clock className="w-4 h-4 text-gray-300" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-secondary text-lg leading-tight">Global Economic Policy</h4>
                  <p className="text-xs text-gray-400 font-medium line-clamp-2 italic">Analytical foundations of modern international commerce.</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black text-gray-300 uppercase tracking-widest">
                    <span>Status</span>
                    <span>Locked</span>
                  </div>
                  <div className="h-1.5 bg-gray-50 rounded-full" />
                </div>
                <Button variant="outline" className="w-full rounded-xl border-gray-100 h-12 font-black text-[11px] uppercase tracking-widest text-gray-400">View Syllabus</Button>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary tracking-tight">{d.recentTransactions}</h3>
            <div className="bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50/50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">{d.table.course}</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">{d.table.date}</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">{d.table.amount}</th>
                    <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">{d.table.status}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {TRANSACTIONS.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-secondary">{tx.course}</td>
                      <td className="px-6 py-4 text-xs font-medium text-gray-400">{tx.date}</td>
                      <td className="px-6 py-4 text-sm font-black text-secondary">{tx.amount}</td>
                      <td className="px-6 py-4 text-right">
                        <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full">
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Analytics & Extra */}
        <div className="space-y-8">
          
          {/* Learning Analytics Card */}
          <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-secondary tracking-tight">{d.learningAnalytics}</h3>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{d.totalProgress}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-secondary tracking-tighter italic">324</span>
                <span className="text-sm font-bold text-gray-300">hours</span>
              </div>
            </div>

            <div className="h-20 flex items-end gap-2">
              {[40, 65, 45, 90, 60, 80, 55].map((h, i) => (
                <div key={i} className="flex-1 bg-primary/10 rounded-t-lg transition-all hover:bg-primary/30 cursor-pointer group relative" style={{ height: `${h}%` }}>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}h
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{d.coursesCompleted}</p>
                <p className="text-xl font-black text-secondary">14</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{d.totalPoints}</p>
                <p className="text-xl font-black text-secondary">96%</p>
              </div>
            </div>
          </div>

          {/* Next Session Card */}
          <div className="p-8 bg-[#FDFCF8] rounded-[2.5rem] border border-[#E9E4D9] shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-secondary tracking-tight">{d.nextSession}</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative">
                <Image src="/assets/images/user-2.png" alt="Mentor" fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="text-sm font-bold text-secondary italic">Dr. Alistair Vaughn</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Strategy & Leadership</p>
              </div>
            </div>
            <div className="p-4 bg-white/60 border border-[#E9E4D9] rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                <Clock className="w-4 h-4 text-primary" />
                Tomorrow, 10:00 AM EST
              </div>
              <Button variant="link" className="p-0 h-auto text-primary text-[10px] font-black uppercase tracking-widest hover:no-underline">Join Waiting Room</Button>
            </div>
          </div>

          {/* Event Promotion Card */}
          <div className="group relative rounded-[2.5rem] overflow-hidden aspect-4/3 shadow-xl shadow-secondary/10 cursor-pointer">
            <Image 
              src="/assets/images/login-bg.png" 
              alt="Event" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 space-y-3">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Exclusive Event</span>
              <h4 className="text-2xl font-bold text-white tracking-tighter leading-tight italic">Elite Networking Summit:<br />London 2024</h4>
              <div className="pt-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-lg">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
