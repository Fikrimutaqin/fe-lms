import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  priority?: boolean;
  sold?: number;
}

export default function CategoryCard({ title, image, priority = false, sold }: CategoryCardProps) {
  return (
    <Link href="/categories" className="flex flex-col gap-6 group cursor-pointer items-center">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-white transition-all duration-500 group-hover:-translate-y-3">
        <div className="absolute inset-0 bg-primary/0 transition-colors z-10" />
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>
      <div className="space-y-1 text-center">
        <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
}
