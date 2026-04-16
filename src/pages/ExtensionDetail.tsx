import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Check, Download, Shield, Zap, Eye, Palette, Code, Cloud, Users, CreditCard, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import extProductivity from "@/assets/ext-productivity.png";
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
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-16"
      >
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
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

              <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
                {extension.pricingPlans && extension.pricingPlans.length > 0 ? (
                  <>
                    <p className="text-sm text-muted-foreground mb-4">Select a plan:</p>
                    <RadioGroup 
                      value={selectedPlan} 
                      onValueChange={setSelectedPlan}
                      className="space-y-3 mb-6"
                    >
                      {extension.pricingPlans.map((plan) => (
                        <div key={plan.name} className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:bg-accent/10 transition-colors">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value={plan.name} id={plan.name} />
                            <Label htmlFor={plan.name} className="cursor-pointer font-medium">
                              {plan.name} - {plan.price}{plan.period}
                            </Label>
                          </div>
                          <Badge className={`${plan.badgeColor} border-0`}>
                            {plan.badge}
                          </Badge>
                        </div>
                      ))}
                    </RadioGroup>
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
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
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
                        {extension.id === "indiamart-lead-extractor" && (
                          <Button
                            size="lg"
                            variant="outline"
                            className="gap-2 px-8 border-primary text-primary hover:bg-primary/10"
                            asChild
                          >
                            <a href="https://chromewebstore.google.com/detail/adchkjkadbinogdbildimjodafocpmoa?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer">
                              <Eye className="w-5 h-5" />
                              See Demo
                            </a>
                          </Button>
                        )}
                        <span className="text-2xl font-bold text-primary">{extension.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        30-day money-back guarantee • Cancel anytime
                      </p>
                    </div>
                  </>
                )}
              </div>

              </motion.div>
          </div>

          {(extension.benefits || extension.features || extension.pricingPlans) && (
            <div className="mt-16">
              <div className="grid lg:grid-cols-3 gap-6">
                {extension.benefits && extension.benefits.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <h3 className="text-xl font-bold mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {extension.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {extension.features && extension.features.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <h3 className="text-xl font-bold mb-4">Features</h3>
                    <ul className="space-y-3">
                      {extension.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {extension.pricingPlans && extension.pricingPlans.length > 0 && (
                  <div className="bg-card rounded-2xl p-6 shadow-card">
                    <div className="flex items-center gap-2 mb-6">
                      <Tag className="w-5 h-5 text-accent" />
                      <h3 className="text-xl font-bold">Pricing</h3>
                    </div>
                    <div className="space-y-4">
                      {extension.pricingPlans.map((plan, index) => (
                        <div 
                          key={plan.name} 
                          className={`relative rounded-xl p-4 border-2 transition-all duration-300 hover:shadow-lg ${
                            plan.popular 
                              ? 'border-accent bg-accent/5' 
                              : 'border-border hover:border-accent/50'
                          }`}
                        >
                          {plan.popular && (
                            <Badge className={`${plan.badgeColor} border-0 text-xs absolute -top-3 left-1/2 -translate-x-1/2`}>
                              {plan.badge}
                            </Badge>
                          )}
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-bold">{plan.name}</h4>
                            <div>
                              <span className="text-xl font-bold text-primary">{plan.price}</span>
                              <span className="text-sm text-muted-foreground">{plan.period}</span>
                            </div>
                          </div>
                          <ul className="space-y-1 mb-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className={`w-full text-sm ${plan.popular ? 'bg-hero text-primary-foreground' : 'bg-secondary text-primary'}`}
                            onClick={() => {
                              setSelectedPlan(plan.name);
                              document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            Select
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ExtensionDetail;
