import { motion } from "framer-motion";
import { Check } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

interface PriceCardProps {
  tier: string;
  price: string;
  items: string[];
  highlighted?: boolean;
}

const PriceCard = ({ tier, price, items, highlighted = false }: PriceCardProps) => (
  <motion.div
    {...fadeIn}
    whileHover={{ y: -4 }}
    className={`p-10 rounded-[40px] transition-all ${
      highlighted
        ? "bg-primary text-primary-foreground scale-100 md:scale-105 shadow-elevated"
        : "bg-card text-foreground"
    }`}
  >
    <h3 className={`text-lg font-display font-semibold mb-2 ${highlighted ? "opacity-90" : "opacity-70"}`}>
      {tier}
    </h3>
    <div className="text-5xl font-display font-bold mb-8 tabular-nums">
      ${price}
      <span className={`text-lg ${highlighted ? "opacity-60" : "opacity-50"}`}>/mo</span>
    </div>
    <ul className="space-y-4 mb-10">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm font-body">
          <Check size={18} className={highlighted ? "text-primary-foreground" : "text-primary"} />
          {item}
        </li>
      ))}
    </ul>
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`w-full py-4 rounded-2xl font-display font-bold transition-all ${
        highlighted
          ? "bg-background text-foreground hover:opacity-90"
          : "bg-foreground text-background hover:opacity-90"
      }`}
    >
      Get Started
    </motion.button>
  </motion.div>
);

const Pricing = () => (
  <section id="pricing" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        {...fadeIn}
        className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-20"
      >
        Flexible Plans for Every Athlete
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <PriceCard
          tier="Free"
          price="0"
          items={["Basic Tracking", "Community Access", "Standard Support"]}
        />
        <PriceCard
          tier="Premium"
          price="19"
          items={[
            "Advanced Analytics",
            "Personalized AI Coach",
            "Priority Support",
            "Wearable Sync",
          ]}
          highlighted
        />
        <PriceCard
          tier="Pro"
          price="49"
          items={[
            "1-on-1 Human Coaching",
            "Custom Meal Prep",
            "Bi-weekly Lab Reviews",
          ]}
        />
      </div>
    </div>
  </section>
);

export default Pricing;
