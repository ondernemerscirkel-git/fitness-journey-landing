import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import appStoreBadge from "@/assets/app-store-badge.png";

const navLinks = ["Home", "Features", "Pricing", "Testimonials"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const stagger = {
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const itemVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50"
        animate={{
          backgroundColor: scrolled ? "hsla(228, 33%, 97%, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderBottomWidth: scrolled ? 1 : 0,
        }}
        transition={{ duration: 0.35 }}
        style={{ borderColor: "hsl(var(--border))" }}
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 flex items-center justify-between"
          animate={{ height: scrolled ? 60 : 104 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="font-display font-bold tracking-tighter text-foreground relative z-[60]"
            animate={{ fontSize: scrolled ? "1.25rem" : "1.75rem" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            VITA.
          </motion.div>

          <motion.div
            className="hidden md:flex items-center gap-10 font-medium text-muted-foreground"
            animate={{ fontSize: scrolled ? "0.875rem" : "1rem" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-foreground text-background rounded-full font-semibold hover:opacity-90 transition-opacity"
            animate={{
              paddingLeft: scrolled ? "1.5rem" : "2rem",
              paddingRight: scrolled ? "1.5rem" : "2rem",
              paddingTop: scrolled ? "0.625rem" : "0.875rem",
              paddingBottom: scrolled ? "0.625rem" : "0.875rem",
              fontSize: scrolled ? "0.875rem" : "1rem",
            }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Download App
          </motion.button>

          <button
            className="md:hidden text-foreground relative z-[60]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] md:hidden flex flex-col overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Background with glassmorphism blobs */}
            <motion.div
              className="absolute inset-0 bg-background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <div
              className="absolute top-16 right-[-4%] w-72 h-72 rounded-full opacity-60 blur-3xl pointer-events-none animate-float"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.45), hsl(var(--vita-lavender-deep) / 0.2))" }}
            />
            <div
              className="absolute bottom-24 left-[-6%] w-64 h-64 rounded-full opacity-50 blur-3xl pointer-events-none animate-float-delayed"
              style={{ background: "radial-gradient(circle, hsl(var(--vita-lavender-deep) / 0.4), hsl(var(--primary) / 0.15))" }}
            />
            <div
              className="absolute top-[30%] left-[4%] w-48 h-48 rounded-full opacity-40 blur-2xl pointer-events-none animate-float-slow"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.35), hsl(var(--vita-periwinkle) / 0.2))" }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 flex flex-col justify-center items-center flex-1 px-8 gap-2"
              variants={stagger}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={itemVariant}
                  className="text-foreground font-display font-bold text-4xl py-3 hover:text-primary transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </motion.a>
              ))}

              <motion.div variants={itemVariant} className="mt-8 w-full max-w-xs">
                <button
                  className="bg-foreground text-background px-8 py-4 rounded-full text-base font-semibold w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Download App
                </button>
              </motion.div>

              <motion.div variants={itemVariant} className="mt-4">
                <a href="#" className="inline-block">
                  <img src={appStoreBadge} alt="Download on the App Store" className="h-12 w-auto" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
