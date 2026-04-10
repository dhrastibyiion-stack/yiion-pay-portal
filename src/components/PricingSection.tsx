import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$4.99",
    period: "/mo",
    features: ["1 Extension", "Email Support", "Basic Analytics", "Auto Updates"],
    recommended: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    features: ["5 Extensions", "Priority Support", "Advanced Analytics", "Auto Updates", "Custom Settings"],
    recommended: true,
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/mo",
    features: ["Unlimited Extensions", "24/7 Support", "Full Analytics", "Auto Updates", "Custom Settings", "API Access"],
    recommended: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 bg-secondary/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Choose the plan that fits your needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
              plan.recommended
                ? "bg-hero text-primary-foreground shadow-lg animate-pulse-glow"
                : "bg-card shadow-card hover:shadow-card-hover"
            }`}
          >
            {plan.recommended && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Recommended
              </span>
            )}
            <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className={plan.recommended ? "text-primary-foreground/70" : "text-muted-foreground"}>
                {plan.period}
              </span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={`w-full ${
                plan.recommended
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-hero text-primary-foreground hover:opacity-90"
              }`}
            >
              <a href="#checkout">Get {plan.name}</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
