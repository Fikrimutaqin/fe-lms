"use client";


import { useState } from "react";
import CourseCard from "@/components/courses/CourseCard";
import CourseSidebar from "@/components/courses/CourseSidebar";
import { useLanguage } from "@/providers/LanguageProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import axiosInstance from "@/lib/axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export default function CoursesPage() {
  const { t } = useLanguage();
  const pageT = t.coursesPage;
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  // Fetch Categories
  const { data: categories = [] } = useQuery({
    queryKey: ['categories', 'all'],
    queryFn: async () => {
      const res = await axiosInstance.get('/categories');
      return res.data.data;
    },
  });

  // Fetch Courses with Infinite Query for Pagination
  const {
    data: dataCourse,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['courses', selectedCategoryId],
    initialPageParam: 1,
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axiosInstance.get('/courses', {
        params: {
          categoryId: selectedCategoryId,
          page: pageParam,
          limit: 10
        }
      });
      return res.data;
    },
    getNextPageParam: (lastPage) => {
      const { meta } = lastPage;
      if (meta.currentPage < meta.totalPages) {
        return meta.currentPage + 1;
      }
      return undefined;
    },
    select: (data) => data.pages.flatMap((page: any) =>
      Array.isArray(page.data) ? page.data.map((course: any) => ({
        ...course,
        category: typeof course.category === 'object' ? course.category.name : course.category
      })) : []
    ),
  });

  const courses = dataCourse || [];

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-10 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[11px] font-bold border border-primary rounded-full w-fit px-4 py-2 text-primary uppercase mb-4"
          >
            {pageT.badge}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-secondary tracking-tighter leading-[0.9] mb-8"
          >
            {pageT.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-gray-500 max-w-2xl font-medium leading-relaxed"
          >
            {pageT.subtitle}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <aside className="lg:w-64 shrink-0">
            <CourseSidebar categories={categories} clickedCategories={setSelectedCategoryId} />
          </aside>

          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="h-48 rounded-2xl bg-gray-100 animate-pulse" />
                    <div className="h-6 w-1/2 rounded-full bg-gray-100 animate-pulse" />
                    <div className="h-20 w-full rounded-full bg-gray-100 animate-pulse" />
                    <div className="h-10 w-full rounded-full bg-gray-100 animate-pulse" />
                  </div>
                ))}
              </div>
            ) : courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
                {courses.map((course, idx) => (
                  <CourseCard key={idx} {...course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500">No courses found</p>
              </div>
            )}

            {hasNextPage && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 flex justify-center"
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                  className="h-14 px-10 rounded-full border-gray-200 text-secondary font-bold hover:bg-gray-50 hover:border-gray-300 transition-all gap-3 disabled:opacity-50"
                >
                  {isFetchingNextPage ? "Loading..." : pageT.filters.seeMore}
                  <ArrowRight className={`w-4 h-4 ${isFetchingNextPage ? 'animate-spin' : ''}`} />
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
