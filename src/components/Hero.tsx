import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import appStoreBadge from "@/assets/app-store-badge.png";
import vellicLogoBg from "@/assets/vellic-logo-bg.png";
import { useTranslations, useLocale } from "@/i18n/useTranslations";
import { screenshots } from "@/assets/screenshots";

const ease = [0.16, 1, 0.3, 1] as const;
const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease },
};

const Hero = () => {
  const t = useTranslations();
  const locale = useLocale();
  const imgs = screenshots[locale];

  return (
    <section id="home" className="pt-40 pb-0 px-6 overflow-hidden relative">
      <div
        className="absolute top-16 right-[-4%] w-72 h-72 md:w-96 md:h-96 rounded-full opacity-60 blur-3xl pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.45), hsl(var(--vita-lavender-deep) / 0.2))" }}
      />
      <div
        className="absolute bottom-12 left-[-6%] w-64 h-64 md:w-80 md:h-80 rounded-full opacity-50 blur-3xl pointer-events-none animate-float-delayed"
        style={{ background: "radial-gradient(circle, hsl(var(--vita-lavender-deep) / 0.4), hsl(var(--primary) / 0.15))" }}
      />
      <div
        className="absolute top-[18%] left-[4%] w-48 h-48 md:w-64 md:h-64 rounded-full opacity-40 blur-2xl pointer-events-none animate-float-slow"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.35), hsl(var(--vita-periwinkle) / 0.2))" }}
      />
      <img
        src={vellicLogoBg}
        alt=""
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[500px] md:w-[700px] lg:w-[800px] opacity-10 pointer-events-none select-none"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h1
          {...fadeIn}
          className="text-[40px] leading-tight sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground mb-6"
        >
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </motion.h1>

        <motion.p
          {...fadeIn}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body px-4 md:px-0"
        >
          <span className="md:hidden">{t.hero.subtitleMobile}</span>
          <span className="hidden md:inline">{t.hero.subtitle}</span>
        </motion.p>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.2, duration: 0.7, ease }}
          className="flex justify-center mb-12"
        >
          <a href="#" className="hidden md:inline-block">
            <img src={appStoreBadge} alt={t.hero.appStoreAlt} className="h-14 w-auto" />
          </a>
          <button className="md:hidden rounded-full font-semibold text-foreground btn-gradient-animate flex items-center gap-1.5 px-8 py-3.5 text-lg">
            {t.nav.downloadApp}
            <ChevronRight size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease }}
          className="relative max-w-5xl mx-auto"
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={imgs.heroDesktop} />
            <img src={imgs.heroMobile} alt={t.hero.imageAlt} className="w-full h-auto relative z-10" />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
