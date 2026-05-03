"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, Globe, ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import LanguageModal from "../shared/LanguageModal";
import { useLanguage } from "@/providers/LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const { language, t } = useLanguage();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 flex h-16 md:h-22 items-center justify-between gap-4 md:gap-8">
          {/* Logo & Categories */}
          <div className="flex items-center gap-10 shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
                <span className="text-white font-black text-xl md:text-2xl">N</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-secondary hidden sm:block">NexLearn</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/courses"
                className={`text-sm font-bold transition-all relative ${isActive('/courses') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
              >
                {t.menu.courses}
                {isActive('/courses') && (
                  <motion.div layoutId="activeNav" className="absolute bottom-[-32px] left-0 right-0 h-1 bg-primary rounded-t-full" />
                )}
              </Link>
              <Link
                href="/mentors"
                className={`text-sm font-bold transition-all relative flex items-center gap-2 ${isActive('/mentors') ? 'text-primary' : 'text-secondary hover:text-primary'
                  }`}
              >
                {t.menu.mentor}
                <span className="bg-primary/10 text-primary text-[8px] px-1.5 py-0.5 rounded-md font-black uppercase">New</span>
                {isActive('/mentors') && (
                  <motion.div layoutId="activeNav" className="absolute bottom-[-32px] left-0 right-0 h-1 bg-primary rounded-t-full" />
                )}
              </Link>
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden xl:flex relative group mx-4">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
              <Search className="h-4 w-4" />
            </div>
            <Input
              placeholder={t.menu.placeholderSearch}
              className="w-full pl-11 h-11 bg-gray-50 border-gray-100 rounded-full focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-xs font-medium shadow-inner"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-6 shrink-0">
            <div className="flex items-center gap-1 md:gap-2">
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative text-secondary hover:text-primary hover:bg-primary/5 rounded-full">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                    2
                  </span>
                </Button>
              </Link>

              <Button
                variant="ghost"
                onClick={() => setIsLangModalOpen(true)}
                className="text-secondary hover:text-primary hover:bg-primary/5 rounded-full hidden lg:flex items-center gap-2 font-bold px-4"
              >
                <Globe className="h-5 w-5" />
                <span className="text-xs uppercase border-l pl-2 border-gray-200">
                  {language === "id" ? "ID" : "EN"}
                </span>
              </Button>
            </div>

            <div className="hidden md:flex items-center gap-2 md:gap-4 md:border-l md:pl-6">
              <Link href="/login">
                <Button
                  variant="ghost"
                  className={`font-black text-xs uppercase tracking-widest px-6 rounded-full w-full transition-all ${isActive('/login') ? 'text-primary bg-primary/5' : 'text-secondary hover:text-primary'
                    }`}
                >
                  {t.menu.login}
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  className={`font-black text-xs uppercase tracking-widest px-8 md:px-10 h-11 md:h-12 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 ${isActive('/register') ? 'bg-primary text-white shadow-primary/20' : 'bg-secondary hover:bg-secondary/90 text-white shadow-secondary/20'
                    }`}
                >
                  {t.menu.register}
                </Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 text-secondary hover:bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-101 md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-lg">N</span>
                  </div>
                  <span className="font-black text-secondary">NexLearn</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="rounded-full hover:bg-gray-100">
                  <X className="w-6 h-6 text-gray-500" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input placeholder={t.menu.placeholderSearch} className="h-12 pl-12 bg-gray-50 border-none rounded-xl" />
                </div>

                <nav className="space-y-4">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Academy</p>
                  <Link href="/courses" className="flex items-center p-3 rounded-xl hover:bg-primary/5 text-secondary font-bold transition-all">
                    {t.menu.courses}
                  </Link>
                  <Link href="/mentors" className="flex items-center justify-between p-3 rounded-xl hover:bg-primary/5 text-secondary font-bold transition-all">
                    {t.menu.mentor}
                    <span className="bg-primary/10 text-primary text-[8px] px-1.5 py-0.5 rounded-md font-black uppercase">New</span>
                  </Link>
                </nav>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-3">
                <Link href="/login">
                  <Button className="w-full h-12 rounded-xl font-bold bg-white border border-gray-200 text-secondary hover:bg-gray-50">
                    {t.menu.login}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full h-12 lg:mt-0 mt-2 rounded-xl font-bold bg-secondary text-white hover:bg-secondary/90">
                    {t.menu.register}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <LanguageModal isOpen={isLangModalOpen} onClose={() => setIsLangModalOpen(false)} />
    </>
  );
}
