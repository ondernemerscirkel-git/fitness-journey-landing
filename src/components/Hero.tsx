import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const as const },
};

const Hero = () => (
  <section id="home" className="pt-40 pb-20 px-6 overflow-hidden">
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
        transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
      >
        A precision-engineered platform for tracking, analyzing, and optimizing
        your physical performance. No fluff, just results.
      </motion.p>

      <motion.div
        {...fadeIn}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
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

      {/* Phone Mockups */}
      <div className="relative h-[400px] md:h-[600px] lg:h-[700px] flex justify-center items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent rounded-[80px] blur-3xl opacity-60 -z-10" />

        <div className="relative w-full max-w-4xl flex justify-center">
          {/* Left phone */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-52 md:w-64 h-[380px] md:h-[500px] bg-foreground rounded-[36px] border-[6px] border-foreground shadow-elevated absolute -left-4 md:left-16 z-10 hidden md:flex items-center justify-center"
            style={{ transform: "rotate(-10deg)" }}
          >
            <div className="w-[85%] h-[90%] rounded-[28px] bg-card/20 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/30" />
              <div className="w-24 h-2 rounded bg-background/20" />
              <div className="w-20 h-2 rounded bg-background/10" />
            </div>
          </motion.div>

          {/* Center phone */}
          <motion.div
            initial={{ y: 160, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-60 md:w-72 h-[420px] md:h-[550px] bg-foreground rounded-[40px] border-[7px] border-foreground shadow-elevated z-20 flex items-center justify-center"
          >
            <div className="w-[85%] h-[90%] rounded-[30px] bg-card/20 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-3xl bg-primary/40" />
              <div className="w-28 h-2 rounded bg-background/20" />
              <div className="w-24 h-2 rounded bg-background/10" />
              <div className="w-full px-4 mt-4 space-y-2">
                <div className="h-8 rounded-xl bg-background/10" />
                <div className="h-8 rounded-xl bg-background/10" />
                <div className="h-8 rounded-xl bg-primary/20" />
              </div>
            </div>
          </motion.div>

          {/* Right phone */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-52 md:w-64 h-[380px] md:h-[500px] bg-foreground rounded-[36px] border-[6px] border-foreground shadow-elevated absolute -right-4 md:right-16 z-10 hidden md:flex items-center justify-center"
            style={{ transform: "rotate(10deg)" }}
          >
            <div className="w-[85%] h-[90%] rounded-[28px] bg-card/20 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-primary/30" />
              <div className="w-24 h-2 rounded bg-background/20" />
              <div className="w-20 h-2 rounded bg-background/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
