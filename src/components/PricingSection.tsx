import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individual users",
    features: ["1 Browser Extension", "Basic Support", "Standard Features", "30-day License"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for power users",
    features: ["3 Browser Extensions", "Priority Support", "Advanced Features", "1-year License", "Cross-browser Sync"],
    popular: true,
  },
  {
    name: "Business",
    price: "$79",
    description: "For teams and organizations",
    features: ["Unlimited Extensions", "24/7 Dedicated Support", "All Premium Features", "Lifetime License", "Team Management", "API Access"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Choose the plan that fits your needs. No hidden fees.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className={`h-full flex flex-col ${plan.popular ? 'border-accent shadow-card-hover' : ''}`}>
              <CardHeader>
                {plan.popular && (
                  <span className="text-xs font-medium text-accent mb-2">Most Popular</span>
                )}
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className={`w-full ${plan.popular ? 'bg-hero text-primary-foreground hover:opacity-90' : ''}`}
                >
                  <a href="#checkout">Get Started</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
