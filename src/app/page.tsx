import Hero from "@/components/home/Hero";
import PartnerSection from "@/components/home/PartnerSection";
import AboutSection from "@/components/home/AboutSection";
import LearningFlow from "@/components/home/LearningFlow";
import CourseSection from "@/components/home/CourseSection";
import CategorySection from "@/components/home/CategorySection";
import InstructorSection from "@/components/home/InstructorSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">


      <main className="flex-1">
        <Hero />
        <PartnerSection />
        <AboutSection />
        <LearningFlow />
        <CourseSection />
        <CategorySection />
        <TestimonialSection />
        <InstructorSection />
      </main>


    </div>
  );
}
