import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import extSecurity from "@/assets/ext-security.png";
import indiamartExtractorLogo from "@/assets/indiamart-extractor-logo.png";
import indiamartPickerLogo from "@/assets/indiamart-picker-logo.png";

const extensions = [
  {
    id: "indiamart-lead-extractor",
    name: "IndiaMART Lead Extractor",
    category: "Tools",
    desc: "Export and manage leads directly from IndiaMART platform. One-click extraction with Excel export and duplicate detection.",
    price: "",
    rating: 4.7,
    users: "500+",
    image: indiamartExtractorLogo,
    featured: true,
  },
  {
    id: "indiamart-lead-picker",
    name: "IndiaMART Lead Picker",
    category: "Productivity",
    desc: "Smart Chrome extension to automate lead management on IndiaMART. Instantly accept leads, extract customer details, and manage inquiries efficiently.",
    price: "",
    rating: 4.8,
    users: "1.5K+",
    image: indiamartPickerLogo,
    featured: true,
  },
];

const ShowcaseSection = () => (
  <section id="extensions" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Extensions</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Explore our curated collection of premium browser extensions.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {extensions.map((ext, i) => (
          <motion.div
            key={ext.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-2xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {ext.featured && (
              <Badge className="absolute top-4 right-4 bg-hero text-primary-foreground border-0">
                Popular
              </Badge>
            )}

            <div className={`rounded-0xl flex items-center justify-center mb-2 overflow-hidden group-hover:scale-110 transition-transform duration-300 w-16 h-16`}>
              <img
                src={ext.image}
                alt={ext.name}
                width={48}
                height={48}
                loading="lazy"
                className="w-15 h-15 object-contain"
              />
            </div>

            <span className="text-xs font-medium text-accent mb-1">{ext.category}</span>
            <h3 className="font-semibold text-lg mb-2">{ext.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{ext.desc}</p>




            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{ext.rating}</span>
                <span className="text-xs text-muted-foreground ml-1">({ext.users} users)</span>
              </div>
              <span className="font-bold text-primary">{ext.price}</span>
            </div>

            <div className="flex gap-3">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="flex-1"
              >
                <Link to={`/extension/${ext.id}`}>View Details</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="flex-1 bg-hero text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Link to={`/?ext=${ext.id}#checkout`}>Buy Now</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
