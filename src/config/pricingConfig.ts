export interface PricingPlan {
  name: string;
  badge: string;
  badgeColor: string;
  price: string;
  period: string;
  description?: string;
  features: string[];
  popular: boolean;
}

export interface ExtensionPricing {
  [extensionId: string]: PricingPlan[];
}

export const pricingConfig: ExtensionPricing = {
  "indiamart-lead-picker": [
    {
      name: "Starter",
      badge: "BASIC",
      badgeColor: "bg-muted text-muted-foreground",
      price: "₹8,000",
      period: "",
      description: "Perfect for individual users",
      features: ["350 Leads", "6 month validity", "Direct Page Extraction", "Standard Business Support"],
      popular: false,
    },
    {
      name: "Bronze Pro",
      badge: "MOST POPULAR",
      badgeColor: "bg-hero text-primary-foreground",
      price: "₹20,000",
      period: "",
      description: "Best for power users",
      features: ["1000 Leads", "6 month validity", "Priority Multi-Filters", "Premium Priority Support", "Advanced Matching"],
      popular: true,
    },
    {
      name: "Gold",
      badge: "ULTIMATE",
      badgeColor: "bg-accent text-accent-foreground",
      price: "₹40,000",
      period: "",
      description: "For teams and organizations",
      features: ["2400 Leads", "6 month validity", "All Advanced Filters", "24/7 VIP Dedicated Support", "Bulk Export Tools"],
      popular: false,
    },
  ],
};