"use client";

import { motion } from "framer-motion";
import { User, Mail, Shield, Globe, Camera, CheckCircle2, Award, Star } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

export default function IdentityTab() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1200);
  };

  return (
    <TabsContent value="identity" className="p-8 sm:p-14 lg:p-20 space-y-20 outline-none relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="relative group">
          <div className="w-44 h-44 rounded-[3.5rem] overflow-hidden relative border-12 border-[#F8F9FA] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <Image src="/assets/images/user-1.png" alt="User" fill className="object-cover" />
          </div>
          <button className="absolute -bottom-2 -right-2 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white hover:scale-110 transition-transform">
            <Camera className="w-6 h-6" />
          </button>
        </div>
        <div className="text-center md:text-left space-y-4">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <h3 className="text-4xl font-black text-secondary tracking-tight">Fikri Mutaqin</h3>
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <p className="text-lg text-gray-400 font-medium tracking-wide">Product Lead • Jakarta, Indonesia</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100/50 group/badge cursor-default">
              <Award className="w-4 h-4 text-emerald-600 group-hover/badge:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Certified Executive</span>
            </div>
            <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-xl border border-amber-100/50 group/badge cursor-default">
              <Star className="w-4 h-4 text-amber-600 group-hover/badge:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">Top Learner 2024</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { label: "Display Name", value: "Fikri Mutaqin", icon: User },
          { label: "Email Contact", value: "fikri.mutaqin@edupro.id", icon: Mail },
          { label: "Role / Profession", value: "UI/UX Consultant", icon: Shield },
          { label: "Based In", value: "Jakarta, Indonesia", icon: Globe }
        ].map((f) => (
          <div key={f.label} className="space-y-4 group">
            <label className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1 flex items-center gap-2 group-hover:text-primary transition-colors">
              <f.icon className="w-4 h-4" /> {f.label}
            </label>
            <Input 
              defaultValue={f.value} 
              disabled={!isEditing}
              className="h-16 rounded-[1.25rem] bg-[#F8F9FA] border-transparent px-8 font-bold text-secondary focus:bg-white focus:border-primary/20 focus:ring-8 focus:ring-primary/5 transition-all shadow-sm group-hover:shadow-md" 
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">All changes are auto-saved to cloud.</p>
        </div>
        <div className="flex items-center gap-4">
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-emerald-600 font-black text-[10px] uppercase tracking-widest bg-emerald-50 px-4 py-3 rounded-xl border border-emerald-100"
            >
              <CheckCircle2 className="w-4 h-4" />
              Settings Synced!
            </motion.div>
          )}
          <Button
            onClick={isEditing ? handleSave : () => setIsEditing(true)}
            disabled={isSaving}
            className={`rounded-2xl px-14 h-16 text-xs font-black uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 relative overflow-hidden ${isEditing ? 'bg-secondary' : 'bg-primary'}`}
          >
            {isSaving ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Syncing...</span>
              </div>
            ) : (
              <span>{isEditing ? 'Confirm Changes' : 'Edit Information'}</span>
            )}
          </Button>
        </div>
      </div>
    </TabsContent>
  );
}
