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
import { useState, useEffect } from "react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useScrollAnimation();

  const handleLoadingFinish = () => {
    setIsLoading(false);
  };

  const kirimData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/data");
      const data = await res.text();
      console.log("Response dari Golang:", data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    kirimData();
  }, []);

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