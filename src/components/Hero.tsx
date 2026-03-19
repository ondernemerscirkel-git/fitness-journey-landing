import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import heroDesktop from "@/assets/hero-desktop.png";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease },
};

const Hero = () => (
  <section id="home" className="pt-40 pb-0 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center">
      <motion.h1
        {...fadeIn}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground mb-6"
      >
        Your Fitness Journey,
        <br />
        Anytime, Anywhere.
      </motion.h1>

      <motion.p
        {...fadeIn}
        transition={{ delay: 0.1, duration: 0.7, ease }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
      >
        A precision-engineered platform for tracking, analyzing, and optimizing
        your physical performance. No fluff, just results.
      </motion.p>

      <motion.div
        {...fadeIn}
        transition={{ delay: 0.2, duration: 0.7, ease }}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-display font-bold hover:shadow-elevated transition-shadow"
        >
          <Apple size={20} /> App Store
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-2xl font-display font-bold hover:shadow-elevated transition-shadow"
        >
          <Play size={20} /> Google Play
        </motion.button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.9, ease }}
        className="relative max-w-5xl mx-auto"
      >
        <img
          src={heroDesktop}
          alt="VITA fitness app screens showing workout tracking, progress analytics, and rest timer"
          className="w-full h-auto relative z-10"
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
