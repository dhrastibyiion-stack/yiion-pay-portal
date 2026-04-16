import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Package, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const paymentMethods = ["Card", "UPI", "Net Banking", "Cash"] as const;

const extensionPrices: Record<string, { name: string; price: string; category: string; hasPlans?: boolean; plans?: { name: string; price: string; period: string }[] }> = {
  "indiamart-lead-extractor": { name: "IndiaMART Lead Extractor", price: "Free", category: "Tools" },
  "indiamart-lead-picker": { name: "IndiaMART Lead Picker", price: "From ₹8,000", category: "Productivity", hasPlans: true, plans: [
    { name: "Starter", price: "₹8,000", period: "" },
    { name: "Bronze Pro", price: "₹20,000", period: "" },
    { name: "Gold", price: "₹40,000", period: "" }
  ]},
};

const availableExtensions = Object.entries(extensionPrices).map(([id, data]) => ({
  id,
  ...data
}));

const CheckoutForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const extId = searchParams.get("ext");
  const planParam = searchParams.get("plan");
  const [selectedExt, setSelectedExt] = useState<string | null>(extId || null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(planParam || null);
  const [method, setMethod] = useState<string>("Card");
  const [loading, setLoading] = useState(false);
  const [showExtensionPicker, setShowExtensionPicker] = useState(false);

  useEffect(() => {
    if (extId && extensionPrices[extId]) {
      setSelectedExt(extId);
      const ext = extensionPrices[extId];
      if (planParam && ext.plans?.some(p => p.name === planParam)) {
        setSelectedPlan(planParam);
      }
    }
  }, [extId, planParam]);

  const currentExtension = selectedExt ? extensionPrices[selectedExt] : null;

  const handleExtensionChange = (newExtId: string) => {
    setSelectedExt(newExtId);
    setSelectedPlan(null);
    setShowExtensionPicker(false);
    navigate(`/?ext=${newExtId}#checkout`, { replace: true });
  };

  const handleCancel = () => {
    setSelectedExt(null);
    navigate("/", { replace: true });
    toast({ title: "Selection Cleared", description: "You can choose a different extension." });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedExt) {
      toast({ title: "No Extension Selected", description: "Please select an extension to purchase." });
      return;
    }
    const ext = extensionPrices[selectedExt];
    if (ext.hasPlans && !selectedPlan) {
      toast({ title: "No Plan Selected", description: "Please select a plan to continue." });
      return;
    }
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
          <p className="text-muted-foreground">Select an extension and fill in your details to complete the purchase.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-6 bg-card rounded-2xl shadow-card border border-border"
        >
          <AnimatePresence mode="wait">
            {currentExtension ? (
              <motion.div
                key="selected"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Package className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Selected Extension</p>
                    <h3 className="text-xl font-bold">{currentExtension.name}</h3>
                    <p className="text-sm text-accent">{currentExtension.category}</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="text-2xl font-bold text-primary">
                    {currentExtension.hasPlans && selectedPlan
                      ? currentExtension.plans?.find(p => p.name === selectedPlan)?.price
                      : currentExtension.price}
                    {currentExtension.hasPlans && selectedPlan && <span className="text-sm font-normal">{currentExtension.plans?.find(p => p.name === selectedPlan)?.period}</span>}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="picker"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-4"
              >
                <Package className="w-12 h-12 text-muted-foreground mb-3" />
                <p className="text-muted-foreground mb-4">No extension selected</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-3">
              {currentExtension && (
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/extension/${selectedExt}`}>
                    View Details
                  </Link>
                </Button>
              )}
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowExtensionPicker(!showExtensionPicker)}
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                {currentExtension ? "Change" : "Select"} Extension
              </Button>

              {currentExtension && (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-destructive border-destructive/30 hover:bg-destructive/10 hover:text-destructive"
                  onClick={handleCancel}
                >
                  <X className="w-4 h-4 mr-1" />
                  Cancel
                </Button>
              )}
            </div>

            <AnimatePresence>
              {showExtensionPicker && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    {availableExtensions.map((ext) => (
                      <Button
                        key={ext.id}
                        variant={selectedExt === ext.id ? "default" : "outline"}
                        size="sm"
                        className="justify-start gap-3 h-auto py-3"
                        onClick={() => handleExtensionChange(ext.id)}
                      >
                        <Package className="w-4 h-4 flex-shrink-0" />
                        <div className="text-left">
                          <p className="font-medium">{ext.name}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto" />
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {currentExtension && currentExtension.hasPlans && !planParam && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-6 bg-card rounded-2xl shadow-card border border-border"
          >
            <h3 className="text-lg font-semibold mb-4">Select a Plan</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {currentExtension.plans?.map((plan) => (
                <button
                  key={plan.name}
                  type="button"
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                    selectedPlan === plan.name
                      ? "border-accent bg-accent/10 shadow-card-hover"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <p className="font-semibold mb-1">{plan.name}</p>
                  <p className="text-2xl font-bold text-primary">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {!currentExtension && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 p-6 bg-muted/30 rounded-2xl border border-dashed border-border"
          >
            <p className="text-center text-muted-foreground">
              Please select an extension above to continue with checkout.
            </p>
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
