import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Features", "Pricing", "Testimonials"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 180);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-colors duration-300"
      animate={{
        backgroundColor: scrolled ? "hsla(228, 33%, 97%, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottomWidth: scrolled ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      style={{ borderColor: "hsl(var(--border))" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        animate={{ height: scrolled ? 60 : 104 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-2xl font-display font-bold tracking-tighter text-foreground">
          VITA.
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-foreground text-background px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Download App
        </motion.button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-foreground text-background px-8 py-4 rounded-full text-base font-semibold w-full">
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
