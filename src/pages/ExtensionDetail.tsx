import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Check, Download, Shield, Zap, Eye, Palette, Code, Cloud, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import extSecurity from "@/assets/ext-security.png";
import extProductivity from "@/assets/ext-productivity.png";
import extPrivacy from "@/assets/ext-privacy.png";
import extCustom from "@/assets/ext-custom.png";
import extDevtools from "@/assets/ext-devtools.png";
import extData from "@/assets/ext-data.png";

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
}

const extensionsData: Record<string, Extension> = {
  "secureguard-pro": {
    id: "secureguard-pro",
    name: "SecureGuard Pro",
    category: "Security",
    shortDesc: "Advanced threat protection with real-time malware blocking and safe browsing alerts.",
    fullDesc: "SecureGuard Pro provides comprehensive browser security with advanced threat detection, real-time malware blocking, and intelligent safe browsing alerts. Protect your digital life with military-grade encryption and proactive threat prevention that works silently in the background.",
    price: "$4.99/mo",
    rating: 4.9,
    users: "12K+",
    image: extSecurity,
    featured: true,
    benefits: [
      "Real-time malware detection and blocking",
      "Safe browsing with phishing protection",
      "Automatic security updates",
      "Secure password manager integration",
      "Encrypted browsing sessions",
      "24/7 threat monitoring"
    ],
    features: [
      "Advanced firewall protection",
      "DNS leak prevention",
      "WebRTC leak protection",
      "HTTPS enforcement",
      "Cookie management",
      "Tracker blocking"
    ],
    screenshots: []
  },
  "speedboost": {
    id: "speedboost",
    name: "SpeedBoost",
    category: "Productivity",
    shortDesc: "Supercharge your workflow with tab management, shortcuts, and focus mode.",
    fullDesc: "SpeedBoost is your ultimate productivity companion. Organize tabs with visual groups, use keyboard shortcuts for everything, and enter focus mode to eliminate distractions. Save time with automated workflows and boost your daily productivity.",
    price: "$3.99/mo",
    rating: 4.7,
    users: "8K+",
    image: extProductivity,
    featured: false,
    benefits: [
      "Visual tab grouping and organization",
      "Custom keyboard shortcuts",
      "Focus mode for deep work",
      "Quick search across tabs",
      "Automatic tab休眠",
      "Session saving and restoration"
    ],
    features: [
      "Tab bookmarks",
      "Pinned tabs",
      "Tab history",
      "Bulk tab operations",
      "Workpace isolation",
      "Productivity metrics"
    ],
    screenshots: []
  },
  "privacyvault": {
    id: "privacyvault",
    name: "PrivacyVault",
    category: "Privacy",
    shortDesc: "Block trackers, hide your digital fingerprint, and browse anonymously.",
    fullDesc: "PrivacyVault gives you complete control over your digital footprint. Block invasive trackers, mask your fingerprint, and browse with complete anonymity. Your data stays private with military-grade encryption and zero-knowledge architecture.",
    price: "$5.99/mo",
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
    price: "$2.99/mo",
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
    price: "$6.99/mo",
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
    price: "$3.49/mo",
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
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price</p>
                    <p className="text-3xl font-bold text-primary">{extension.price}</p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-hero text-primary-foreground hover:opacity-90 transition-opacity gap-2 px-8"
                    asChild
                  >
                    <a href={`/?ext=${extension.id}#checkout`}>
                      <Download className="w-5 h-5" />
                      Buy Now
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  30-day money-back guarantee • Cancel anytime
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
              <div className="space-y-4">
                {extension.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Features</h2>
              <div className="space-y-4">
                {extension.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of users who trust {extension.name} to enhance their browsing experience.
            </p>
            <Button
              size="lg"
              className="bg-hero text-primary-foreground hover:opacity-90 transition-opacity gap-2 px-10"
              asChild
            >
              <a href={`/?ext=${extension.id}#checkout`}>
                <Download className="w-5 h-5" />
                Buy {extension.name} Now
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ExtensionDetail;
