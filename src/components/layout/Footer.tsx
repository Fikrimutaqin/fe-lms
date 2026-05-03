"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Link as LinkIcon, Mail, Globe, MapPin, Sparkles, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  if (isDashboard) return null;

  return (
    <footer className="bg-secondary text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">

      {/* Decorative Brand Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">

          {/* Brand & Mission */}
          <div className="space-y-8 col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0 group-hover:rotate-6 transition-transform">
                <span className="text-white font-black text-xl">N</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">NexLearn</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
              Empowering the next generation of Indonesian professionals through world-class, industry-aligned curriculum.
            </p>
            <div className="flex items-center gap-4">
              {[X, LinkIcon].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 col-span-1 lg:col-span-1">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Academy</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-bold">
                <li><Link href="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Learning Path</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Mentorship</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-bold">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group cursor-default">
                <MapPin className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors shrink-0" />
                <span className="text-sm text-gray-400 font-medium leading-tight">Equity Tower, 35th Floor<br />SCBD, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors shrink-0" />
                <span className="text-sm text-gray-400 font-medium">hello@nexlearn.id</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <Globe className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors shrink-0" />
                <span className="text-sm text-gray-400 font-medium">www.nexlearn.id</span>
              </li>
            </ul>
          </div>

          {/* Newsletter (Human touch: Engagement section) */}
          <div className="space-y-6 col-span-1 bg-white/5 p-8 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
            <div className="space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="w-4 h-4" />
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em]">Join the Inner Circle</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                Get monthly curriculum updates and career insights delivered to your inbox.
              </p>
            </div>
            <div className="space-y-3 relative z-10">
              <Input
                placeholder="you@company.com"
                className="bg-white/5 border-white/10 rounded-xl h-12 text-sm focus:ring-primary/20"
              />
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all active:scale-95">
                Subscribe
              </Button>
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            © 2026 NexLearn Academy. Built with passion in Jakarta.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
