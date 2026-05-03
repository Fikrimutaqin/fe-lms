"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, LogOut } from "lucide-react";
import UserProgressWidget from "./UserProgressWidget";
import { SETTINGS_SIDEBAR_ITEMS } from "@/data/settings";
import { useAppDispatch } from "@/store";
import { setLogoutModalOpen } from "@/store/slices/uiSlice";

interface SettingsSidebarProps {
  activeTab: string;
}

export default function SettingsSidebar({ activeTab }: SettingsSidebarProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full lg:w-[320px] shrink-0 flex flex-col lg:sticky top-8">
      <TabsList className="flex flex-col w-full h-auto bg-white rounded-[2.5rem] border border-gray-100 p-3 shadow-sm space-y-1">
        
        <UserProgressWidget />

        {SETTINGS_SIDEBAR_ITEMS.map((item) => (
          <TabsTrigger
            key={item.id}
            value={item.id}
            className="w-full flex items-center gap-5 px-6 py-5 rounded-[1.75rem] text-left transition-all duration-300 aria-selected:bg-primary/5 aria-selected:text-primary text-gray-400 hover:text-secondary hover:bg-gray-50 group border-none shadow-none data-active:bg-primary/5 data-active:text-primary"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${activeTab === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-secondary'}`}>
              <item.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-black tracking-tight leading-none">{item.label}</p>
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mt-2">{item.desc}</p>
            </div>
            <ChevronRight className={`w-4 h-4 transition-all duration-300 ${activeTab === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
          </TabsTrigger>
        ))}
        
        <div className="mt-4 pt-4 border-t border-gray-50 px-3">
          <button 
            onClick={() => dispatch(setLogoutModalOpen(true))}
            className="w-full flex items-center gap-5 px-6 py-5 rounded-[1.75rem] text-left transition-all duration-300 text-rose-500 hover:bg-rose-50 hover:text-rose-600 group"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
              <LogOut className="w-5 h-5" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-black tracking-tight leading-none">Sign Out</p>
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mt-2">End current session</p>
            </div>
          </button>
        </div>
      </TabsList>
    </div>
  );
}
