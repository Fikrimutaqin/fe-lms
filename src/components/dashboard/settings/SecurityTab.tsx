"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Key } from "lucide-react";

export default function SecurityTab() {
  return (
    <TabsContent value="security" className="p-8 sm:p-14 lg:p-20 space-y-16 outline-none relative z-10">
      <div className="space-y-3">
        <h3 className="text-4xl font-black text-secondary tracking-tight">Privacy & Guard</h3>
        <p className="text-lg text-gray-400 font-medium">Managing your digital keys and session integrity.</p>
      </div>
      <div className="bg-[#F8F9FA]/80 p-12 rounded-[3rem] border border-gray-100 space-y-10">
        <div className="flex items-center gap-3">
          <Key className="w-5 h-5 text-primary" />
          <h4 className="text-[11px] font-black text-secondary uppercase tracking-[0.3em]">Access Credentials</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4 col-span-full">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Current Password</label>
            <Input type="password" placeholder="••••••••••••" className="h-16 rounded-[1.25rem] bg-white border-transparent px-8 font-bold" />
          </div>
          <div className="space-y-4">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">New Secure Password</label>
            <Input type="password" placeholder="••••••••••••" className="h-16 rounded-[1.25rem] bg-white border-transparent px-8 font-bold" />
          </div>
          <div className="space-y-4">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Repeat Password</label>
            <Input type="password" placeholder="••••••••••••" className="h-16 rounded-[1.25rem] bg-white border-transparent px-8 font-bold" />
          </div>
        </div>
        <Button className="rounded-2xl h-16 px-12 bg-secondary text-white font-black text-xs uppercase tracking-widest hover:bg-black shadow-xl shadow-secondary/10 transition-all">Sync Credentials</Button>
      </div>
    </TabsContent>
  );
}
