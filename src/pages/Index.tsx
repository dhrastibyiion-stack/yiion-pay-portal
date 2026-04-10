import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CheckoutForm from "@/components/CheckoutForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ShowcaseSection />
    <FeaturesSection />
    <PricingSection />
    <CheckoutForm />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
