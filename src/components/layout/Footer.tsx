import Link from "next/link";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold">EduPro</Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Platform pembelajaran terdepan di dunia untuk menguasai keterampilan masa depan.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Teach on EduPro</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 EduPro, Inc. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 opacity-60">
            {/* Social icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
