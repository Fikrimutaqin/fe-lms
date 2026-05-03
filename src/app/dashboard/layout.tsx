"use client";

import { useLanguage } from "@/providers/LanguageProvider";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Components
import LanguageModal from "@/components/shared/LanguageModal";
import DashboardSidebar from "@/components/dashboard/layout/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/layout/DashboardHeader";
import LogoutModal from "@/components/dashboard/layout/LogoutModal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  
  // Extracting path logic
  const activeTab = pathname.split('/').pop() || 'dashboard';

  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Responsive Check
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setIsExpanded(true);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 z-200 bg-[#F8F9FA] flex overflow-hidden font-sans">

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary/60 backdrop-blur-md z-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <DashboardSidebar 
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        activeTab={activeTab}
        translations={t.dashboardPage}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden w-full relative">
        <DashboardHeader 
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          setIsLanguageModalOpen={setIsLanguageModalOpen}
          language={language}
        />

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10">
          {children}
        </div>
      </main>

      {/* Shared Modals */}
      <LanguageModal 
        isOpen={isLanguageModalOpen} 
        onClose={() => setIsLanguageModalOpen(false)} 
      />
      <LogoutModal />
    </div>
  );
}
