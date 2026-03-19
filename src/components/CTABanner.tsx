import { motion } from "framer-motion";
import appStoreBadge from "@/assets/app-store-badge.png";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const CTABanner = () => (
  <section className="py-20 px-6">
    <motion.div
      {...fadeIn}
      className="max-w-7xl mx-auto bg-gradient-to-br from-primary to-vita-lavender-deep rounded-[48px] p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/5 rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
          Download VITA &<br />
          Crush Your Goals
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-background p-4 rounded-3xl shadow-elevated">
            <div className="w-32 h-32 bg-foreground rounded-xl flex items-center justify-center">
              <span className="text-[10px] text-background/40 uppercase tracking-widest font-body">
                QR CODE
              </span>
            </div>
          </div>
          <a href="#" className="inline-block">
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-14 w-auto"
            />
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default CTABanner;
