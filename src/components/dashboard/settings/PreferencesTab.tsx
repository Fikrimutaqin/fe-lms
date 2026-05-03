"use client";

import { TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { LEARNING_WORKFLOW_ITEMS } from "@/data/settings";

export default function PreferencesTab() {
  return (
    <TabsContent value="preferences" className="p-8 sm:p-14 lg:p-20 space-y-16 outline-none relative z-10">
      <div className="space-y-3">
        <h3 className="text-4xl font-black text-secondary tracking-tight">Learning Workflow</h3>
        <p className="text-lg text-gray-400 font-medium">Customize how you consume content and interact with mentors.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {LEARNING_WORKFLOW_ITEMS.map((item, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-[#F8F9FA]/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-gray-300 group-hover:text-primary transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/10">
                <item.icon className="w-7 h-7" />
              </div>
              <Switch defaultChecked={item.defaultChecked} className="data-[state=checked]:bg-primary" />
            </div>
            <div className="space-y-2 relative z-10">
              <p className="text-lg font-black text-secondary leading-none group-hover:text-primary transition-colors">{item.title}</p>
              <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
            </div>
            <div className="absolute bottom-[-20%] right-[-10%] w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
          </div>
        ))}
      </div>
    </TabsContent>
  );
}
