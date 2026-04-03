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
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useScrollAnimation();

  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onFinish={handleLoadingFinish} />;
  }

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
