"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { ENGAGEMENT_ITEMS } from "@/data/settings";

export default function EngagementTab() {
  return (
    <TabsContent value="notifications" className="p-8 sm:p-14 lg:p-20 space-y-16 outline-none relative z-10">
      <div className="space-y-3">
        <h3 className="text-4xl font-black text-secondary tracking-tight">Stay Engaged</h3>
        <p className="text-lg text-gray-400 font-medium">Customize when and how we reach out to you.</p>
      </div>
      <div className="space-y-5">
        {ENGAGEMENT_ITEMS.map((item, i) => (
          <div key={i} className="flex items-center justify-between p-10 rounded-[2.5rem] bg-[#F8F9FA]/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-center gap-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-primary transition-colors shadow-sm">
                <item.icon className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-black text-secondary leading-none">{item.title}</p>
                <p className="text-sm text-gray-400 font-medium max-w-md">{item.desc}</p>
              </div>
            </div>
            <Switch defaultChecked={item.defaultChecked} className="data-[state=checked]:bg-primary" />
          </div>
        ))}
      </div>
    </TabsContent>
  );
}
