import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const initials = (name: string) => name.split(" ").map(n => n[0]).join("");

const TestimonialCard = ({ name, role, quote, featured = false }: { name: string; role: string; quote: string; featured?: boolean }) => (
  <motion.div
    {...fadeIn}
    whileHover={{ y: -2 }}
    className={`bg-card rounded-[28px] transition-shadow hover:shadow-card ${featured ? "p-10" : "p-8"}`}
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={featured ? 18 : 16} className="text-primary fill-primary" />
      ))}
    </div>
    <p className={`text-foreground font-body leading-relaxed mb-6 ${featured ? "text-base" : "text-sm"}`}>"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className={`rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary ${featured ? "w-12 h-12 text-sm" : "w-10 h-10 text-xs"}`}>
        {initials(name)}
      </div>
      <div>
        <div className={`font-display font-semibold text-foreground ${featured ? "text-base" : "text-sm"}`}>{name}</div>
        <div className={`text-muted-foreground font-body ${featured ? "text-sm" : "text-xs"}`}>{role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const t = useTranslations();
  const items = t.testimonials.items.slice(0, 3);

  return (
    <section id="testimonials" className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          {...fadeIn}
          className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-20"
        >
          {t.testimonials.heading}
        </motion.h2>

        {/* Mobile: stack */}
        <div className="flex flex-col gap-6 md:hidden">
          {items.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>

        {/* Desktop: podium layout */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-end">
          {/* 2nd place - left, lower */}
          <div className="mt-12">
            <TestimonialCard {...items[1]} />
          </div>

          {/* 1st place - center, top */}
          <div>
            <TestimonialCard {...items[0]} featured />
          </div>

          {/* 3rd place - right, lower */}
          <div className="mt-12">
            <TestimonialCard {...items[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
