import { motion } from "framer-motion";
import { Moon, Hand, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslations } from "@/i18n/useTranslations";

import mockupProfile from "@/assets/mockup-profile.png";
import mockupWorkout from "@/assets/mockup-workout.png";
import mockupAnalytics from "@/assets/mockup-analytics.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  image: string;
}

const BenefitCard = ({ icon, title, desc, image }: BenefitCardProps) => (
  <motion.div
    {...fadeIn}
    whileHover={{ y: -4 }}
    className="bg-card rounded-[32px] p-8 pb-0 overflow-hidden flex flex-col transition-shadow hover:shadow-card"
  >
    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-display font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed font-body mb-8">{desc}</p>
    <div className="mt-auto mx-auto w-44 h-[260px] rounded-t-[24px] shadow-elevated overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover object-top" />
    </div>
  </motion.div>
);

const icons = [<Moon size={22} />, <Hand size={22} />, <BarChart3 size={22} />];
const images = [mockupProfile, mockupWorkout, mockupAnalytics];

const Benefits = () => {
  const t = useTranslations();

  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            {t.benefits.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.benefits.cards.map((card, i) => (
            <BenefitCard key={i} icon={icons[i]} title={card.title} desc={card.desc} image={images[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
