import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
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
    <Link href="/courses/1" className="flex flex-col group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] h-full">
      {/* Course Image */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {badge && (
          <div className="absolute top-4 left-4 z-20">
            <Badge className="bg-white/90 backdrop-blur-md text-secondary text-[10px] px-2.5 py-1 font-bold uppercase rounded-lg border-none shadow-sm">
              {badge}
            </Badge>
          </div>
        )}
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/5 transition-colors duration-500" />
      </div>

      {/* Course Info */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-bold text-[16px] leading-snug text-secondary group-hover:text-primary transition-colors line-clamp-2 min-h-[44px]">
              {title}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">{instructor}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
            <span className="text-sm font-bold text-secondary">{rating.toFixed(1)}</span>
            <span className="text-xs text-gray-300 font-medium">({reviews})</span>
          </div>
          <span className="font-black text-lg text-secondary">{price}</span>
        </div>
      </div>
    </Link>
  );
}
