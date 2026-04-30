import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CourseSection from "@/components/home/CourseSection";
import CategorySection from "@/components/home/CategorySection";
import InstructorSection from "@/components/home/InstructorSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <CourseSection />
        <CategorySection />
        <TestimonialSection />
        <InstructorSection />
      </main>

      <Footer />
    </div>
  );
}
