import { motion, AnimatePresence } from "framer-motion";
import { Activity, Utensils, TrendingUp, Bell } from "lucide-react";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";

import mockupGuided from "@/assets/mockup-guided.png";
import mockupExercise from "@/assets/mockup-exercise.png";
import mockupAnalytics from "@/assets/mockup-analytics.png";
import mockupLogbook from "@/assets/mockup-logbook.png";
import mockupWorkout from "@/assets/mockup-workout.png";

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

const mockups = [
  { image: mockupGuided, title: "Guided Programs", desc: "Structured training cycles that adapt to your progress." },
  { image: mockupExercise, title: "Exercise Library", desc: "Detailed guides for every movement in your routine." },
  { image: mockupAnalytics, title: "Progress Analytics", desc: "Track your strength gains over time with clear charts." },
  { image: mockupLogbook, title: "Training Logbook", desc: "Your complete workout history at a glance." },
  { image: mockupWorkout, title: "Live Tracking", desc: "Log sets, reps, and rest in real time." },
];

const Features = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % mockups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-32 px-6 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-background">
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

          {/* Center Tall — Rotating Mockups */}
          <motion.div
            {...fadeIn}
            className="md:col-span-6 bg-card rounded-[32px] p-8 md:p-12 flex flex-col items-center overflow-hidden min-h-[500px] md:min-h-[600px]"
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

            <div className="relative w-56 md:w-64 flex-1 mt-6">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={mockups[active].image}
                  alt={mockups[active].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-contain object-top"
                />
              </AnimatePresence>
            </div>

            {/* Dots */}
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
};

export default Features;
