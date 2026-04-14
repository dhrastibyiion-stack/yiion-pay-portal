import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Check, Download, Shield, Zap, Eye, Palette, Code, Cloud, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import extProductivity from "@/assets/ext-productivity.png";
import extPrivacy from "@/assets/ext-privacy.png";
import extCustom from "@/assets/ext-custom.png";
import extDevtools from "@/assets/ext-devtools.png";
import extData from "@/assets/ext-data.png";
import indiamartExtractorLogo from "@/assets/indiamart-extractor-logo.png";
import indiamartPickerLogo from "@/assets/indiamart-picker-logo.png";

interface Extension {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  price: string;
  rating: number;
  users: string;
  image: string;
  featured: boolean;
  benefits: string[];
  features: string[];
  screenshots: string[];
  pricingPlans?: { name: string; badge: string; badgeColor: string; price: string; period: string; features: string[]; popular: boolean }[];
}

const extensionsData: Record<string, Extension> = {
  "indiamart-lead-extractor": {
    id: "indiamart-lead-extractor",
    name: "IndiaMART Lead Extractor",
    category: "Tools",
    shortDesc: "Export and manage leads directly from IndiaMART platform with ease.",
    fullDesc: "IndiaMART Lead Extractor Pro is a powerful Chrome extension that helps businesses extract, organize, and export leads directly from the IndiaMART platform with ease. With one-click extraction and seamless Excel export, it eliminates manual data entry and ensures you never lose valuable customer information. Designed for sales teams, marketers, and business owners, it helps you manage leads efficiently and stay productive.",
    price: "Free",
    rating: 4.7,
    users: "500+",
    image: indiamartExtractorLogo,
    featured: true,
    benefits: [
      "One-click lead extraction from IndiaMART",
      "Export leads directly to Excel",
      "Avoid duplicate entries automatically",
      "Saves time and reduces manual work",
      "Organized and structured data storage",
      "Improves productivity and workflow"
    ],
    features: [
      "Lead data extraction (Name, Contact, Inquiry details)",
      "Excel/CSV export functionality",
      "Duplicate lead detection and removal",
      "Secure local data storage",
      "Bulk lead extraction support",
      "Clean and user-friendly interface"
    ],
    screenshots: []
  },
  "indiamart-lead-picker": {
    id: "indiamart-lead-picker",
    name: "IndiaMART Lead Picker",
    category: "Productivity",
    shortDesc: "Smart Chrome extension to automate lead management on IndiaMART. Instantly accept leads, extract customer details, and manage inquiries efficiently.",
    fullDesc: "IndiaMART Lead Picker Pro is a smart Chrome extension designed to automate lead management on IndiaMART. It helps businesses instantly accept leads, extract customer details, and manage inquiries efficiently without manual effort. Boost your response speed, never miss a potential customer, and streamline your sales workflow with intelligent automation and real-time lead capture.",
    price: "Free",
    rating: 4.8,
    users: "1.5K+",
    image: indiamartPickerLogo,
    featured: true,
    benefits: [
      "Real-time lead auto-accept system",
      "Faster response to customer inquiries",
      "Reduces manual work and human error",
      "Easy extraction of customer details",
      "Improves lead conversion rate",
      "Organized lead management dashboard"
    ],
    features: [
      "Automatic lead acceptance",
      "Customer data extraction (Name, Contact, Requirement)",
      "Bulk lead handling support",
      "Smart filtering for targeted leads",
      "One-click data capture",
      "Lightweight and fast performance"
    ],
    screenshots: [],
    pricingPlans: [
      {
        name: "Starter",
        badge: "BASIC",
        badgeColor: "bg-muted text-muted-foreground",
        price: "₹2,000",
        period: "/yr",
        features: ["200 Leads year", "Direct Page Extraction", "Standard Business Support"],
        popular: false,
      },
      {
        name: "Bronze Pro",
        badge: "MOST POPULAR",
        badgeColor: "bg-hero text-primary-foreground",
        price: "₹5,000",
        period: "/yr",
        features: ["700 Total Leads", "Priority Multi-Filters", "Premium Priority Support", "Advanced Matching"],
        popular: true,
      },
      {
        name: "Gold",
        badge: "ULTIMATE",
        badgeColor: "bg-accent text-accent-foreground",
        price: "₹10,000",
        period: "/yr",
        features: ["1250 Total Leads", "All Advanced Filters", "24/7 VIP Dedicated Support", "Bulk Export Tools"],
        popular: false,
      },
    ],
  },
  "privacyvault": {
    id: "privacyvault",
    name: "PrivacyVault",
    category: "Privacy",
    shortDesc: "Block trackers, hide your digital fingerprint, and browse anonymously.",
    fullDesc: "PrivacyVault gives you complete control over your digital footprint. Block invasive trackers, mask your fingerprint, and browse with complete anonymity. Your data stays private with military-grade encryption and zero-knowledge architecture.",
    price: "Free",
    rating: 4.8,
    users: "15K+",
    image: extPrivacy,
    featured: false,
    benefits: [
      "Complete tracker blocking",
      "Digital fingerprint masking",
      "Incognito mode enhancement",
      "Data breach monitoring",
      "Cookie auto-deletion",
      "VPN integration support"
    ],
    features: [
      "Block list management",
      "Fingerprint randomization",
      "Canvas blocking",
      "Referrer spoofing",
      "User-agent rotation",
      "Script blocking"
    ],
    screenshots: []
  },
  "themecraft": {
    id: "themecraft",
    name: "ThemeCraft",
    category: "Customization",
    shortDesc: "Personalize any website with custom themes, fonts, and color palettes.",
    fullDesc: "ThemeCraft transforms your browsing experience with endless customization options. Apply stunning themes to any website, customize fonts and colors, and create your perfect visual environment. Express yourself with complete design control.",
    price: "Free",
    rating: 4.6,
    users: "6K+",
    image: extCustom,
    featured: false,
    benefits: [
      "Apply themes to any website",
      "Custom font integration",
      "Color palette customization",
      "Dark/light mode switching",
      "Theme sharing community",
      "Per-site settings"
    ],
    features: [
      "Theme editor",
      "CSS injection",
      "Font manager",
      "Color picker",
      "Preset library",
      "Import/export themes"
    ],
    screenshots: []
  },
  "devinspect": {
    id: "devinspect",
    name: "DevInspect",
    category: "Developer Tools",
    shortDesc: "Enhanced inspector, network monitor, and performance profiling for developers.",
    fullDesc: "DevInspect supercharges your development workflow with powerful browser developer tools. Monitor network requests in real-time, profile performance bottlenecks, and inspect elements with advanced capabilities. Built for developers who demand more.",
    price: "Free",
    rating: 4.9,
    users: "10K+",
    image: extDevtools,
    featured: true,
    benefits: [
      "Advanced element inspector",
      "Real-time network monitoring",
      "Performance profiling",
      "API debugging tools",
      "Code snippet storage",
      "Console enhancements"
    ],
    features: [
      "DOM tree visualizer",
      "Request/response viewer",
      "Memory profiler",
      "API tester",
      "Cookie manager",
      "Local storage editor"
    ],
    screenshots: []
  },
  "cloudsync": {
    id: "cloudsync",
    name: "CloudSync",
    category: "Data Management",
    shortDesc: "Seamlessly sync bookmarks, settings, and data across all your browsers.",
    fullDesc: "CloudSync keeps your browsing data perfectly synchronized across all your devices and browsers. Never lose a bookmark again with automatic cloud backup, cross-device sync, and secure encrypted storage for all your browsing data.",
    price: "Free",
    rating: 4.5,
    users: "9K+",
    image: extData,
    featured: false,
    benefits: [
      "Cross-browser sync",
      "Automatic bookmark backup",
      "Settings synchronization",
      "History sync",
      "Password sync",
      "Encrypted cloud storage"
    ],
    features: [
      "Selective sync",
      "Conflict resolution",
      "Offline mode",
      "Import/export",
      "Share folders",
      "Sync history"
    ],
    screenshots: []
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Security": return Shield;
    case "Productivity": return Zap;
    case "Privacy": return Eye;
    case "Customization": return Palette;
    case "Developer Tools": return Code;
    case "Data Management": return Cloud;
    default: return Star;
  }
};

const ExtensionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const extension = id ? extensionsData[id] : null;
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  if (!extension) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Extension not found</h2>
        <Button onClick={() => navigate("/")} className="bg-hero text-primary-foreground">
          Go Back Home
        </Button>
      </div>
    );
  }

  const CategoryIcon = getCategoryIcon(extension.category);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => navigate("/#extensions")}
            className="mb-8 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Extensions
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 flex items-center justify-center overflow-hidden glow">
                  <img
                    src={extension.image}
                    alt={extension.name}
                    className="w-48 h-48 object-contain"
                  />
                </div>
                {extension.featured && (
                  <Badge className="absolute top-6 right-6 bg-hero text-primary-foreground border-0 text-sm px-4 py-1">
                    Popular
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <CategoryIcon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-accent">{extension.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{extension.name}</h1>

              <p className="text-lg text-muted-foreground mb-6">{extension.fullDesc}</p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-semibold">{extension.rating}</span>
                </div>
                <span className="text-muted-foreground">|</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{extension.users} active users</span>
                </div>
              </div>

              {extension.pricingPlans && extension.pricingPlans.length > 0 ? (
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <p className="text-sm text-muted-foreground mb-4">Select a plan:</p>
                  <div className="space-y-3 mb-6">
                    {extension.pricingPlans.map((plan) => (
                      <div 
                        key={plan.name} 
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${selectedPlan === plan.name ? 'border-accent bg-accent/10' : 'hover:bg-accent/5'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === plan.name ? 'border-accent' : 'border-muted-foreground'}`}>
                            {selectedPlan === plan.name && <div className="w-2.5 h-2.5 rounded-full bg-accent" />}
                          </div>
                          <Label className="cursor-pointer font-medium">
                            {plan.name} - {plan.price}{plan.period}
                          </Label>
                        </div>
                        <Badge className={`${plan.badgeColor} border-0`}>
                          {plan.badge}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-hero text-primary-foreground hover:opacity-90 transition-opacity gap-2"
                    disabled={!selectedPlan}
                    asChild
                  >
                    <Link to={`/?ext=${extension.id}&plan=${encodeURIComponent(selectedPlan)}#checkout`}>
                      <Download className="w-5 h-5" />
                      Buy Now
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <Button
                      size="lg"
                      className="bg-hero text-primary-foreground hover:opacity-90 transition-opacity gap-2 px-8"
                      asChild
                    >
                      <Link to={`/?ext=${extension.id}#checkout`}>
                        <Download className="w-5 h-5" />
                        Buy Now
                      </Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    30-day money-back guarantee • Cancel anytime
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-accent" />
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {extension.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/40 to-secondary/20 border border-secondary"
                  >
                    <Check className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-medium text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-accent/10 via-card to-primary/5 rounded-3xl p-8 md:p-12 shadow-card border border-accent/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-accent" />
                Why Choose This Extension
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {extension.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card/70 border border-secondary"
                  >
                    <Star className="w-6 h-6 fill-accent text-accent flex-shrink-0" />
                    <span className="font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {extension.pricingPlans && extension.pricingPlans.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-accent" />
                  Pricing Plans
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {extension.pricingPlans.map((plan, i) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card className={`h-full flex flex-col ${plan.popular ? 'border-accent shadow-card-hover' : ''}`}>
                        <CardHeader className="text-center">
                          <Badge className={`${plan.badgeColor} border-0 w-fit mx-auto mb-2`}>
                            {plan.badge}
                          </Badge>
                          <CardTitle className="text-xl">{plan.name}</CardTitle>
                          <CardDescription>{plan.name === "Starter" ? "Perfect for individual users" : plan.name === "Bronze Pro" ? "Best for power users" : "For teams and organizations"}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 text-center">
                          <div className="mb-6">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">{plan.period}</span>
                          </div>
                          <ul className="space-y-3 text-left">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className={`w-full ${plan.popular ? 'bg-hero text-primary-foreground hover:opacity-90' : ''}`}
                            onClick={() => {
                              setSelectedPlan(plan.name);
                              document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Select Plan
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExtensionDetail;