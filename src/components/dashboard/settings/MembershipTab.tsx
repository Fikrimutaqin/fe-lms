"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function MembershipTab() {
  return (
    <TabsContent value="billing" className="p-8 sm:p-14 lg:p-20 space-y-16 outline-none relative z-10">
      <div className="space-y-3">
        <h3 className="text-4xl font-black text-secondary tracking-tight">Membership Status</h3>
        <p className="text-lg text-gray-400 font-medium">Manage your subscription, invoices, and payment methods.</p>
      </div>
      <div className="relative rounded-[3.5rem] overflow-hidden bg-secondary p-12 sm:p-16 text-white group">
        <div className="relative z-10 flex flex-col xl:flex-row justify-between gap-12">
          <div className="space-y-8">
            <Badge className="bg-white/10 text-white border-none px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-xl">Active Plan</Badge>
            <h4 className="text-5xl sm:text-6xl font-black tracking-tighter">Pro Annual Pass</h4>
            <p className="text-white/60 text-lg max-w-md leading-relaxed font-medium">Unlimited course access, 1-on-1 mentor sessions, and exclusive curriculum downloads.</p>
          </div>
          <div className="text-left xl:text-right space-y-4">
            <div className="bg-white/5 p-8 rounded-4xl backdrop-blur-2xl border border-white/10 inline-block">
              <p className="text-6xl font-black tracking-tight">$950<span className="text-lg opacity-30">/yr</span></p>
              <p className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] mt-2">Renews Oct 2025</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[180px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
      </div>
    </TabsContent>
  );
}
