import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

    <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6">
          Trusted by 10,000+ users
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Premium Digital{" "}
          <span className="text-gradient">Extensions</span>{" "}
          for Every Browser
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
          Discover, purchase, and instantly activate powerful browser extensions that boost your productivity, security, and browsing experience.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-hero text-primary-foreground hover:opacity-90 transition-opacity text-base px-8">
            <a href="#extensions">Get Started</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <a href="#about">Learn More</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={heroImg}
          alt="Secure payment illustration for browser extensions"
          className="w-full max-w-md animate-float"
          loading="eager"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
