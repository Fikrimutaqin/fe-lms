"use client";

import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Download,
  ChevronRight,
  CreditCard,
  ArrowUpRight,
  ArrowDownLeft,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  MoreVertical
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TRANSACTIONS = [
  {
    id: "TRX-8829-1029",
    course: "Advanced Strategic Leadership in Digital Economies",
    date: "Oct 24, 2024",
    amount: 1250.00,
    status: "success",
    method: "Visa •••• 4242"
  },
  {
    id: "TRX-8829-1030",
    course: "Emotional Intelligence in Global Team Management",
    date: "Oct 12, 2024",
    amount: 850.00,
    status: "processing",
    method: "Mastercard •••• 8812"
  },
  {
    id: "TRX-8829-1031",
    course: "Financial Intelligence for Non-Financial Leaders",
    date: "Sep 28, 2024",
    amount: 920.00,
    status: "success",
    method: "PayPal"
  },
  {
    id: "TRX-8829-1032",
    course: "Sustainable Growth Strategies for Modern Tech",
    date: "Sep 15, 2024",
    amount: 1100.00,
    status: "failed",
    method: "Visa •••• 4242"
  },
  {
    id: "TRX-8829-1033",
    course: "Microeconomic Foundations of Market Design",
    date: "Aug 30, 2024",
    amount: 750.00,
    status: "success",
    method: "Visa •••• 4242"
  }
];

const STATS = [
  { label: "Total Investments", value: "$4,870.00", icon: CreditCard, color: "text-primary", bg: "bg-primary/10" },
  { label: "Active Modules", value: "12 Modules", icon: ArrowUpRight, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Pending Actions", value: "02 Items", icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10" },
];

export default function TransactionsPage() {
  return (
    <div className="p-4 sm:p-8 space-y-10 max-w-[1400px] mx-auto pb-20">

      {/* Header Section */}
      <div className="space-y-2">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-[10px] font-black text-primary uppercase tracking-[0.3em]"
        >
          Financial Overview
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-secondary tracking-tight"
        >
          Transactions history
        </motion.h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex items-center gap-6 group hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500 cursor-default"
          >
            <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
              <stat.icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black text-secondary tracking-tight">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content (Table) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden"
      >
        {/* Table Controls */}
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by transaction ID or course..."
              className="pl-11 h-12 bg-gray-50/50 border-gray-100 rounded-2xl focus:bg-white focus:ring-primary/20"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="h-12 px-6 rounded-2xl border-gray-100 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="outline" className="h-12 px-6 rounded-2xl border-gray-100 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest pl-10">Transaction Details</th>
                <th className="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Date</th>
                <th className="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                <th className="p-6 text-left text-[10px] font-black text-gray-400 uppercase tracking-widest">Amount</th>
                <th className="p-6 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest pr-10">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {TRANSACTIONS.map((trx) => (
                <tr key={trx.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="p-6 pl-10">
                    <div className="space-y-1.5">
                      <p className="text-sm font-bold text-secondary line-clamp-1">{trx.course}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{trx.id}</p>
                        <span className="w-1 h-1 bg-gray-200 rounded-full" />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{trx.method}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <p className="text-sm font-bold text-secondary">{trx.date}</p>
                  </td>
                  <td className="p-6">
                    <Badge className={`
                      px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider border-none
                      ${trx.status === 'success' ? 'bg-emerald-500/10 text-emerald-600' :
                        trx.status === 'processing' ? 'bg-amber-500/10 text-amber-600' :
                          'bg-rose-500/10 text-rose-600'}
                    `}>
                      <span className="flex items-center gap-2">
                        {trx.status === 'success' ? <CheckCircle2 className="w-3 h-3" /> :
                          trx.status === 'processing' ? <Clock className="w-3 h-3" /> :
                            <XCircle className="w-3 h-3" />}
                        {trx.status}
                      </span>
                    </Badge>
                  </td>
                  <td className="p-6">
                    <p className="text-sm font-black text-secondary">${trx.amount.toLocaleString()}</p>
                  </td>
                  <td className="p-6 pr-10 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-md text-gray-400 hover:text-primary">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl hover:bg-white hover:shadow-md text-gray-400 hover:text-secondary">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Showing 5 of 24 transactions</p>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-10 w-10 p-0 rounded-xl border-gray-100 text-gray-400" disabled>
              <ChevronRight className="w-4 h-4 rotate-180" />
            </Button>
            {[1, 2, 3].map((p) => (
              <Button
                key={p}
                variant={p === 1 ? 'default' : 'outline'}
                className={`h-10 w-10 p-0 rounded-xl ${p === 1 ? '' : 'border-gray-100 text-gray-400'}`}
              >
                {p}
              </Button>
            ))}
            <Button variant="outline" className="h-10 w-10 p-0 rounded-xl border-gray-100 text-gray-400">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Support Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-secondary rounded-[2.5rem] p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-2xl font-black text-white tracking-tight">Need help with your billing?</h2>
          <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
            Our finance team is available 24/7 for executive members. If you have any questions regarding your invoices or payment methods, please don't hesitate to contact us.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="bg-primary text-white h-14 px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
            Open Support Ticket
          </Button>
          <Button variant="outline" className="border-white/10 text-black h-14 px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-secondary transition-all">
            View FAQ
          </Button>
        </div>
      </motion.div>

    </div>
  );
}
