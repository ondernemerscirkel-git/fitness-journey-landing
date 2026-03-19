import { motion } from "framer-motion";
import { Shield, Zap, Heart } from "lucide-react";
import type { ReactNode } from "react";

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
}

const BenefitCard = ({ icon, title, desc }: BenefitCardProps) => (
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
    <div className="mt-auto mx-auto w-44 h-[260px] bg-foreground rounded-t-[24px] shadow-elevated flex items-center justify-center">
      <div className="w-[80%] h-[80%] rounded-t-[16px] bg-card/15 flex flex-col items-center pt-6 gap-2">
        <div className="w-10 h-10 rounded-xl bg-primary/30" />
        <div className="w-16 h-1.5 rounded bg-background/15" />
        <div className="w-full px-3 mt-4 space-y-1.5">
          <div className="h-4 rounded bg-background/10" />
          <div className="h-4 rounded bg-background/10" />
          <div className="h-4 rounded bg-primary/15" />
        </div>
      </div>
    </div>
  </motion.div>
);

const Benefits = () => (
  <section className="py-32 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeIn} className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Why Thousands Trust VITA
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BenefitCard
          icon={<Shield size={22} />}
          title="Privacy First"
          desc="End-to-end encrypted health data with zero third-party sharing."
        />
        <BenefitCard
          icon={<Zap size={22} />}
          title="Instant Sync"
          desc="Seamless integration with Apple Health, Google Fit, and 40+ wearables."
        />
        <BenefitCard
          icon={<Heart size={22} />}
          title="Holistic Health"
          desc="Track sleep, stress, nutrition, and activity in one unified dashboard."
        />
      </div>
    </div>
  </section>
);

export default Benefits;
