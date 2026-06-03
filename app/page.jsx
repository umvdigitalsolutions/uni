import AnnouncementBar from "./components/AnnouncementBar";
import AwardsSection from "./components/AwardsSection";
import CoursesSection from "./components/CoursesSection";
import Footer from "./components/Footer";
import FutureCta from "./components/FutureCta";
import HeroSection from "./components/HeroSection";
import SiteHeader from "./components/SiteHeader";
import TestimonialsSection from "./components/TestimonialsSection";
import WhatsAppWidget from "./components/WhatsAppWidget";
import WorkSystem from "./components/WorkSystem";

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-white text-[#1b1b1b]">
      <AnnouncementBar />
      <SiteHeader />
      <HeroSection />
      <WorkSystem />
      <CoursesSection />
      <FutureCta />
      <AwardsSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
