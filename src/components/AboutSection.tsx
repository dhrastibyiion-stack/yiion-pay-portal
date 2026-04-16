import { motion } from "framer-motion";
import { Search, ShoppingCart, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          >
            <Card className="w-full h-full group hover:shadow-2xl hover:shadow-hero/10 transition-all duration-300 border-0 bg-card hover:bg-card/80 relative overflow-hidden">
              <CardHeader className="pb-2 pt-14">
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-hero group-hover:scale-110 transition-transform flex items-center justify-center z-10 shadow-lg">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <CardTitle className="font-bold text-xl group-hover:text-primary mb-1">{i + 1}. {step.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
