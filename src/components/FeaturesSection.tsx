import { motion } from "framer-motion";
import { Lock, Zap, CreditCard, Monitor } from "lucide-react";

const features = [
  { icon: Lock, title: "Secure & Licensed", desc: "Every extension is verified, secure, and comes with a valid license." },
  { icon: Zap, title: "Instant Digital Delivery", desc: "No waiting — your extension is delivered and activated immediately." },
  { icon: CreditCard, title: "Simple Checkout", desc: "A streamlined purchase flow with multiple payment options." },
  { icon: Monitor, title: "Cross-Browser Support", desc: "Use extensions across Chrome, Firefox, Edge, and more." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Yiion Extensions?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Premium digital extensions built for speed, security, and simplicity.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-hero transition-colors duration-300">
              <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
