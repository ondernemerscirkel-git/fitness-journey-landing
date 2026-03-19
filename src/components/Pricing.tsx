import { motion } from "framer-motion";
import { Sparkles, Dumbbell, Brain, BarChart3 } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const featureIcons = [Dumbbell, BarChart3, Brain];

const Pricing = () => {
  const t = useTranslations();

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-display font-semibold mb-8">
          <Sparkles size={16} />
          {t.pricing.badge}
        </motion.div>

        <motion.h2
          {...fadeIn}
          className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6"
        >
          {t.pricing.heading1}
          <br />
          <span className="text-primary">{t.pricing.heading2}</span>
        </motion.h2>

        <motion.p
          {...fadeIn}
          className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-16"
        >
          {t.pricing.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {t.pricing.features.map((label, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl bg-card flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={24} />
                </div>
                <span className="text-sm font-display font-semibold text-foreground">{label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
