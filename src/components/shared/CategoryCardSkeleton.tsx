import { motion } from "framer-motion";

export default function CategoryCardSkeleton() {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <motion.div 
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-200 border border-gray-100 shadow-sm"
      />
      <div className="space-y-3 text-center w-full flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="h-6 w-3/4 bg-gray-200 rounded-lg"
        />
        <motion.div 
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
          className="h-4 w-1/2 bg-gray-100 rounded-lg"
        />
      </div>
    </div>
  );
}
