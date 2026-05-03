"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs } from "@/components/ui/tabs";

// Components
import SettingsHeader from "@/components/dashboard/settings/SettingsHeader";
import SettingsSidebar from "@/components/dashboard/settings/SettingsSidebar";
import IdentityTab from "@/components/dashboard/settings/IdentityTab";
import PreferencesTab from "@/components/dashboard/settings/PreferencesTab";
import SecurityTab from "@/components/dashboard/settings/SecurityTab";
import EngagementTab from "@/components/dashboard/settings/EngagementTab";
import MembershipTab from "@/components/dashboard/settings/MembershipTab";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("identity");

  return (
    <div className="p-4 sm:p-8 lg:p-12 max-w-[1400px] mx-auto min-h-screen font-sans bg-[#FDFDFD] relative overflow-hidden">
      
      {/* Decorative Brand Pattern */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-[0.03] pointer-events-none rotate-12 select-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4F46E5" d="M44.7,-76.4C58.2,-69.2,69.7,-57.4,77.3,-43.8C84.8,-30.2,88.4,-15.1,87.5,-0.5C86.7,14.1,81.4,28.2,73.5,41.2C65.6,54.2,55.1,66.1,42,73.7C28.9,81.3,13.1,84.7,-2,88.1C-17.1,91.5,-34.1,94.9,-48.5,88.6C-62.9,82.3,-74.6,66.3,-81.8,49.8C-89,33.3,-91.7,16.7,-89.9,0.9C-88.1,-14.8,-81.9,-29.7,-72.6,-42.6C-63.3,-55.5,-51.1,-66.4,-37.2,-73.4C-23.4,-80.4,-7.8,-83.5,6.5,-83.5C20.8,-83.5,31.2,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <SettingsHeader />

      <Tabs 
        defaultValue="identity" 
        onValueChange={setActiveTab} 
        orientation="vertical"
        className="flex flex-col lg:flex-row gap-12 items-start relative z-10"
      >
        <SettingsSidebar activeTab={activeTab} />

        {/* Content Canvas */}
        <div className="flex-1 w-full bg-white rounded-[3rem] border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.02)] overflow-hidden min-h-[750px] relative">
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <IdentityTab />
              <PreferencesTab />
              <SecurityTab />
              <EngagementTab />
              <MembershipTab />
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </div>
  );
}
