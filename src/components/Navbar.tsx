import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Features", "Pricing", "Testimonials"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
          className="hidden md:block bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Download App
        </motion.button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
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
              <button className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold w-full">
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
