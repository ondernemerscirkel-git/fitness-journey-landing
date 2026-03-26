import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sparkles, Dumbbell, Brain, BarChart3 } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import noStringsVideo from "@/assets/no strings.mp4";

const featureIcons = [Dumbbell, BarChart3, Brain];

const NAVBAR_HEIGHT = 60;

const Pricing = () => {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastTimeRef = useRef<number>(-1);
  const rafRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  const scrollProgress = useMotionValue(0);
  const card0Scale = useTransform(scrollProgress, [0.05, 0.25], [0.7, 1]);
  const card0Opacity = useTransform(scrollProgress, [0.05, 0.25], [0, 1]);
  const card1Scale = useTransform(scrollProgress, [0.12, 0.32], [0.7, 1]);
  const card1Opacity = useTransform(scrollProgress, [0.12, 0.32], [0, 1]);
  const card2Scale = useTransform(scrollProgress, [0.19, 0.39], [0.7, 1]);
  const card2Opacity = useTransform(scrollProgress, [0.19, 0.39], [0, 1]);

  const cardMotion = [
    { scale: card0Scale, opacity: card0Opacity },
    { scale: card1Scale, opacity: card1Opacity },
    { scale: card2Scale, opacity: card2Opacity },
  ];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - (window.innerHeight - NAVBAR_HEIGHT);
      const scrolled = NAVBAR_HEIGHT - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      scrollProgress.set(progress);

      if (video.readyState >= 2 && video.duration) {
        const threshold = isMobile ? 0.033 : 0.015;
        const target = Math.min(progress * video.duration, video.duration - 0.05);
        if (Math.abs(target - lastTimeRef.current) > threshold) {
          video.currentTime = target;
          lastTimeRef.current = target;
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, scrollProgress]);

  // CSS sticky: sectionHeight = stickyHeight + scroll range
  // marginBottom = 0: CTABanner arrives at viewport bottom exactly when panel unsticks
  const sectionHeight = isMobile ? "calc(220vh - 60px)" : "calc(300vh - 60px)";
  const stickyHeight = "calc(100vh - 60px)";

  return (
    <div
      ref={scrollContainerRef}
      id="pricing"
      className="relative"
      style={{ height: sectionHeight }}
    >
      <div
        className="sticky left-0 right-0 flex flex-col items-center justify-start pt-10 md:pt-16 bg-background z-[40]"
        style={{ top: NAVBAR_HEIGHT, height: stickyHeight }}
      >
        {/* inner clip wrapper — visual layers only */}
        <div className="absolute inset-0 overflow-hidden">
          {/* ── Layer 1: video ── */}
          <div className="absolute inset-0 flex items-center justify-center z-[1]">
            <video
              ref={videoRef}
              src={noStringsVideo}
              muted
              playsInline
              loop
              preload="auto"
              style={{
                opacity: 0.7,
                maxWidth: "100%",
                maxHeight: "100%",
                width: "100%",
                height: "auto",
                willChange: "contents",
                display: "block",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, black 25%, transparent 80%)",
                maskImage: "radial-gradient(ellipse at center, black 10%, black 25%, transparent 80%)",
              }}
            />
          </div>

          {/* ── Layer 2: glassmorphism blobs ── */}
          <div
            className="absolute top-8 left-[-6%] w-72 h-72 md:w-96 md:h-96 rounded-full opacity-50 blur-3xl pointer-events-none animate-float z-[2]"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.35), hsl(var(--vita-lavender-deep) / 0.15))" }}
          />
          <div
            className="absolute top-[40%] right-[-4%] w-64 h-64 md:w-80 md:h-80 rounded-full opacity-40 blur-3xl pointer-events-none animate-float-delayed z-[2]"
            style={{ background: "radial-gradient(circle, hsl(var(--vita-lavender-deep) / 0.4), hsl(var(--primary) / 0.12))" }}
          />
        </div>

        {/* ── Layer 3: content ── */}
        <div className="relative z-[3] flex flex-col items-center px-5 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-display font-semibold mb-4"
          >
            <Sparkles size={16} />
            {t.pricing.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-6xl font-display font-bold text-foreground mb-3 leading-tight md:leading-[1.3]"
          >
            {t.pricing.heading1}
            <br />
            {t.pricing.heading2}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-lg text-foreground/80 font-body max-w-sm md:max-w-xl mx-auto leading-relaxed mb-7 px-4 py-2.5 rounded-2xl"
            style={{
              background: "hsl(var(--background) / 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {t.pricing.subtitle}
          </motion.p>

          <div className="grid grid-cols-3 gap-3 w-full max-w-xs md:max-w-2xl mx-auto">
            {t.pricing.features.map((label, i) => {
              const Icon = featureIcons[i];
              const { scale, opacity } = cardMotion[i];
              return (
                <motion.div
                  key={label}
                  style={{ scale, opacity }}
                  className="p-3 md:p-5 rounded-2xl bg-card/80 backdrop-blur-sm flex flex-col items-center gap-2 md:gap-3 text-center"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={isMobile ? 16 : 20} />
                  </div>
                  <span className="text-[10px] md:text-sm font-display font-semibold text-foreground leading-snug">{label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
