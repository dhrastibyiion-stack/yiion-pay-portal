import { motion } from "framer-motion";
import { Search, ShoppingCart, ShieldCheck, Zap } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse Extensions", desc: "Explore our marketplace of digital extensions" },
  { icon: ShoppingCart, title: "Select & Purchase", desc: "Pick your plan and check out securely" },
  { icon: ShieldCheck, title: "Instant Delivery", desc: "Get your extension license key instantly" },
  { icon: Zap, title: "Activate & Use", desc: "Install and start using across all your devices" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary/50">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Extension in Minutes</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-16">
          From discovery to activation — a seamless digital experience.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-hero flex items-center justify-center mb-5">
              <step.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-accent/20 text-accent font-bold text-sm flex items-center justify-center">
              {i + 1}
            </span>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
