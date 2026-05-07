import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  reviews: string;
  price: string;
  image: string;
  badge?: string;
}

export default function CourseCard({ title, instructor, rating, reviews, price, image, badge }: CourseCardProps) {
  return (
    <Link href="/courses/1" className="group block relative h-full">
      <div className="flex flex-col h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">

        {/* Course Media Container */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-secondary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

          {/* Badge */}
          {badge && (
            <div className="absolute top-6 left-6 z-20">
              <Badge className="bg-white/10 backdrop-blur-xl text-white text-[9px] px-3 py-1.5 font-black uppercase tracking-widest rounded-xl border border-white/20 shadow-2xl">
                {badge}
              </Badge>
            </div>
          )}

          {/* Floating Action Button */}
          <div className="absolute top-6 right-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-2xl">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Content Over the Media */}
          <div className="absolute inset-x-0 bottom-0 p-8 z-20 space-y-4">
            <div className="space-y-1">
              <p className="text-[10px] text-white font-black uppercase tracking-widest">{instructor}</p>
              <h3 className="text-xl lg:text-2xl font-black text-white leading-tight tracking-tighter transition-colors duration-300">
                {title}
              </h3>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-white/60">
                <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
                <span className="text-xs font-black text-white">{rating.toFixed(1)}</span>
                <span className="text-[10px] font-medium opacity-60 uppercase tracking-tighter">({reviews})</span>
              </div>
              <span className="text-xl font-black text-white">{price}</span>
            </div>
          </div>
        </div>

        {/* Hover Info (Subtle) */}
        <div className="mt-6 flex items-center gap-6 px-4 opacity-40 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">12 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">3.2k Students</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
