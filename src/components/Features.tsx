import { motion } from "framer-motion";
import { Activity, Utensils, TrendingUp, Bell } from "lucide-react";
import type { ReactNode } from "react";

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

const Features = () => (
  <section id="features" className="py-32 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeIn} className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
          Everything You Need.
          <br />
          Nothing You Don't.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Stack */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <FeatureCard
            icon={<Activity size={22} />}
            title="Workout Tracking"
            desc="Real-time biometric sync with wearable devices."
          />
          <FeatureCard
            icon={<Utensils size={22} />}
            title="Diet Plans"
            desc="AI-driven nutritional guidance tailored to goals."
          />
        </div>

        {/* Center Tall */}
        <motion.div
          {...fadeIn}
          className="md:col-span-6 bg-card rounded-[32px] p-12 flex flex-col items-center justify-between overflow-hidden min-h-[500px] md:min-h-[600px]"
        >
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
              Unified Ecosystem
            </h3>
            <p className="text-muted-foreground font-body">
              Your entire health profile in one view.
            </p>
          </div>
          <div className="w-56 md:w-64 h-[350px] md:h-[400px] bg-foreground rounded-t-[32px] mt-12 shadow-elevated flex items-center justify-center">
            <div className="w-[80%] h-[85%] rounded-t-[24px] bg-card/15 flex flex-col items-center pt-8 gap-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/30" />
              <div className="w-20 h-2 rounded bg-background/15" />
              <div className="w-full px-4 mt-6 space-y-2">
                <div className="h-6 rounded-lg bg-background/10" />
                <div className="h-6 rounded-lg bg-background/10" />
                <div className="h-6 rounded-lg bg-primary/15" />
                <div className="h-6 rounded-lg bg-background/10" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Stack */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <FeatureCard
            icon={<TrendingUp size={22} />}
            title="Progress Analytics"
            desc="Deep-dive into your weekly performance trends."
          />
          <FeatureCard
            icon={<Bell size={22} />}
            title="Smart Reminders"
            desc="Context-aware alerts to keep you on schedule."
          />
        </div>
      </div>
    </div>
  </section>
);

export default Features;
