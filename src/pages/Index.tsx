import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import CheckoutForm from "@/components/CheckoutForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchParams] = useSearchParams();
  const checkoutRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (searchParams.get("ext") && checkoutRef.current && !hasScrolled.current) {
      hasScrolled.current = true;
      setTimeout(() => {
        checkoutRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <FeaturesSection />
      <div ref={checkoutRef}>
        <CheckoutForm />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
