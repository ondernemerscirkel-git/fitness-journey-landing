import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const testimonials = [
  { name: "Sarah K.", role: "Marathon Runner", quote: "VITA completely transformed my training regimen. The analytics alone are worth the subscription." },
  { name: "James R.", role: "CrossFit Coach", quote: "I recommend VITA to all my clients. The meal planning integration is seamless." },
  { name: "Maria L.", role: "Yoga Instructor", quote: "Finally, an app that understands holistic fitness. The sleep tracking is incredibly accurate." },
  { name: "David C.", role: "Triathlete", quote: "The wearable sync feature is flawless. I track every swim, ride, and run without friction." },
  { name: "Elena P.", role: "Personal Trainer", quote: "My clients love the progress reports. VITA makes me look like a data scientist." },
  { name: "Tom W.", role: "Weekend Warrior", quote: "Even as a casual athlete, VITA keeps me accountable. Best fitness investment I've made." },
];

const initials = (name: string) => name.split(" ").map(n => n[0]).join("");

const TestimonialCard = ({ name, role, quote }: { name: string; role: string; quote: string }) => (
  <motion.div
    {...fadeIn}
    whileHover={{ y: -2 }}
    className="bg-card rounded-[28px] p-8 transition-shadow hover:shadow-card"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-primary fill-primary" />
      ))}
    </div>
    <p className="text-foreground font-body text-sm leading-relaxed mb-6">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-display font-bold text-primary">
        {initials(name)}
      </div>
      <div>
        <div className="text-sm font-display font-semibold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground font-body">{role}</div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-32 px-6 bg-background">
    <div className="max-w-7xl mx-auto">
      <motion.h2
        {...fadeIn}
        className="text-4xl md:text-5xl font-display font-bold text-center text-foreground mb-20"
      >
        Real Athletes. Real Results.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
