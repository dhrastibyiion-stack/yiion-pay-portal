import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const paymentMethods = ["Card", "UPI", "Net Banking"] as const;

const CheckoutForm = () => {
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
