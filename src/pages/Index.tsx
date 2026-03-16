import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import ProductSection from "@/components/ProductSection";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BenefitSection from "@/components/BenefitSection";
import AccessSection from "@/components/AccessSection";
// import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background" ref={scrollRef}>
      <Navbar />
      <Hero />
      <Courses />
      <ProductSection />
      <QuoteSection />
      <Testimonials />
      <FAQ />
      <BenefitSection />
      <AccessSection />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
};

export default Index;
