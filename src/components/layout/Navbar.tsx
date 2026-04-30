"use client";

import Link from "next/link";
import { Search, ShoppingCart, Globe, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 flex h-16 md:h-22 items-center justify-between gap-4 md:gap-8">
        {/* Logo & Categories */}
        <div className="flex items-center gap-8 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
              <span className="text-white font-black text-xl md:text-2xl">E</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-secondary hidden sm:block">EduPro</span>
          </Link>

          <button className="hidden xl:flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors">
            Categories
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar - Centered Flexible */}
        <div className="flex-1 max-w-xl hidden md:flex relative group mx-4">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
            <Search className="h-5 w-5" />
          </div>
          <Input 
            placeholder="Search for any skill..." 
            className="w-full pl-12 h-12 bg-gray-50 border-gray-100 rounded-full focus-visible:ring-primary/20 focus-visible:border-primary transition-all text-sm font-medium shadow-inner"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-6 shrink-0">
          <div className="hidden sm:flex items-center gap-1 md:gap-2">
            <Button variant="ghost" size="icon" className="relative text-secondary hover:text-primary hover:bg-primary/5 rounded-full">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                3
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="text-secondary hover:text-primary hover:bg-primary/5 rounded-full hidden lg:flex">
              <Globe className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 md:border-l md:pl-6">
            <Button variant="ghost" className="font-bold text-secondary hover:text-primary hidden md:inline-flex px-6 rounded-full">
              Log in
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 md:px-10 h-10 md:h-13 rounded-full shadow-xl shadow-secondary/20 text-xs md:text-sm transition-all hover:scale-105 active:scale-95">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden h-10 w-10 text-secondary">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
