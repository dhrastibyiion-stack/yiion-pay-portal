import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = ["Card", "UPI", "Net Banking"] as const;

const extensionPrices: Record<string, { name: string; price: string }> = {
  "secureguard-pro": { name: "SecureGuard Pro", price: "$4.99/mo" },
  "speedboost": { name: "SpeedBoost", price: "$3.99/mo" },
  "privacyvault": { name: "PrivacyVault", price: "$5.99/mo" },
  "themecraft": { name: "ThemeCraft", price: "$2.99/mo" },
  "devinspect": { name: "DevInspect", price: "$6.99/mo" },
  "cloudsync": { name: "CloudSync", price: "$3.49/mo" },
};

const CheckoutForm = () => {
  const [searchParams] = useSearchParams();
  const extId = searchParams.get("ext");
  const extension = extId ? extensionPrices[extId] : null;
  
  const { toast } = useToast();
  const [method, setMethod] = useState<string>("Card");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Payment Submitted!", description: "We'll process your order shortly." });
    }, 1500);
  };

  return (
    <section id="checkout" className="py-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Checkout</h2>
          <p className="text-muted-foreground">Fill in your details to complete the purchase.</p>
        </motion.div>

        {extension && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-6 bg-card rounded-2xl shadow-card border border-border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Selected Extension</p>
                <h3 className="text-xl font-bold">{extension.name}</h3>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <p className="text-2xl font-bold text-primary">{extension.price}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-muted-foreground hover:text-destructive"
                asChild
              >
                <Link to="/#extensions">
                  <X className="w-4 h-4 mr-1" />
                  Cancel & Choose Another
                </Link>
              </Button>
            </div>
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-card p-8 shadow-card space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 99049 32220" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Billing Address</Label>
              <Input id="address" placeholder="123 Main St" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Payment Method</Label>
            <div className="flex gap-3">
              {paymentMethods.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMethod(m)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    method === m
                      ? "bg-hero text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-hero text-primary-foreground hover:opacity-90 transition-opacity text-base"
          >
            {loading ? "Processing..." : "Complete Payment"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default CheckoutForm;
