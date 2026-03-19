import { motion, AnimatePresence } from "framer-motion";
import { Activity, Utensils, TrendingUp, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import { useTranslations, useLocale } from "@/i18n/useTranslations";
import { screenshots } from "@/assets/screenshots";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <motion.div
    {...fadeIn}
    whileHover={{ y: -2 }}
    className="bg-card p-8 rounded-[32px] h-full transition-shadow hover:shadow-card"
  >
    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed font-body">{desc}</p>
  </motion.div>
);

const cardIcons = [
  <Activity size={22} />,
  <Utensils size={22} />,
  <TrendingUp size={22} />,
  <Bell size={22} />,
];

const Features = () => {
  const t = useTranslations();
  const locale = useLocale();
  const mockupImages = screenshots[locale].mockups;
  const [active, setActive] = useState(0);
  const mockups = t.features.mockups;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % mockups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [mockups.length]);

  return (
    <section id="features" className="py-32 px-6 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-background">
            {t.features.heading1}
            <br />
            {t.features.heading2}
          </h2>
        </motion.div>

        {/* Desktop: 3-column with phone center */}
        <div className="hidden lg:grid grid-cols-12 gap-6">
          <div className="col-span-3 flex flex-col gap-6">
            {t.features.cards.slice(0, 2).map((card, i) => (
              <FeatureCard key={i} icon={cardIcons[i]} title={card.title} desc={card.desc} />
            ))}
          </div>

          <motion.div
            {...fadeIn}
            className="col-span-6 bg-card rounded-[32px] p-12 flex flex-col items-center overflow-hidden min-h-[600px]"
          >
            <div className="relative h-14">
              <AnimatePresence initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 text-center"
                >
                  <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                    {mockups[active].title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    {mockups[active].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative w-64 flex-1 mt-6">
              <AnimatePresence initial={false}>
                <motion.img
                  key={active}
                  src={mockupImages[active]}
                  alt={mockups[active].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain object-top"
                />
              </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-4">
              {mockups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <div className="col-span-3 flex flex-col gap-6">
            {t.features.cards.slice(2, 4).map((card, i) => (
              <FeatureCard key={i} icon={cardIcons[i + 2]} title={card.title} desc={card.desc} />
            ))}
          </div>
        </div>

        {/* Tablet/Mobile: cards grid + full-width phone */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.features.cards.slice(0, 2).map((card, i) => (
              <FeatureCard key={i} icon={cardIcons[i]} title={card.title} desc={card.desc} />
            ))}
          </div>

          <motion.div
            {...fadeIn}
            className="bg-card rounded-[32px] p-8 flex flex-col items-center overflow-hidden min-h-[500px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-center"
              >
                <h3 className="text-2xl font-display font-bold mb-2 text-foreground">
                  {mockups[active].title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {mockups[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="relative w-56 sm:w-64 flex-1 mt-6">
              <AnimatePresence initial={false}>
                <motion.img
                  key={active}
                  src={mockupImages[active]}
                  alt={mockups[active].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain object-top"
                />
              </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-4">
              {mockups.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.features.cards.slice(2, 4).map((card, i) => (
              <FeatureCard key={i} icon={cardIcons[i + 2]} title={card.title} desc={card.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
