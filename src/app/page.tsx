import HeroSection from "./_components/hero";
import CategorySection from "./_components/category-section";
import CourseSection from "./_components/courses-section";
import BookSection from "./_components/books-section";
import AboutSection from "./_components/about-video-section";
import WhySection from "./_components/why-section";
import ContactSection from "./_components/contact-section";
import PartnersSection from "./_components/partners-section";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection />

      <div className="w-full h-7 bg-primary100"></div>

      <CategorySection />

      <CourseSection />

      <BookSection />

      <AboutSection />

      <WhySection />

      <ContactSection />

      <PartnersSection />

      <Footer />
    </main>
  );
}
