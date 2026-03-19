import { Instagram, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import vellicLogoBg from "@/assets/vellic-logo-bg.png";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-foreground text-background py-20 px-6 relative overflow-hidden">
      {/* Blobs */}
      <div
        className="absolute top-[-15%] left-[-8%] w-72 h-72 rounded-full opacity-[0.08] blur-3xl pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), hsl(var(--vita-lavender-deep) / 0.4))" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none animate-float-delayed"
        style={{ background: "radial-gradient(circle, hsl(var(--vita-periwinkle)), hsl(var(--primary) / 0.3))" }}
      />

      {/* Watermark */}
      <img
        src={vellicLogoBg}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] opacity-[0.025] pointer-events-none select-none"
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-12">
          <div className="text-2xl font-display font-bold tracking-tighter">
            {t.footer.brand}
          </div>

          <div className="flex items-center gap-6 text-background/30">
            {t.footer.productLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-body hover:text-primary transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 text-background/30">
            <Instagram className="hover:text-primary cursor-pointer transition-colors duration-200" size={18} strokeWidth={1.5} />
            <Twitter className="hover:text-primary cursor-pointer transition-colors duration-200" size={18} strokeWidth={1.5} />
            <Linkedin className="hover:text-primary cursor-pointer transition-colors duration-200" size={18} strokeWidth={1.5} />
          </div>
        </div>

        <div className="border-t border-background/[0.06] pt-6 text-center">
          <p className="text-[11px] text-background/20 font-body tracking-wide">
            © {new Date().getFullYear()} Vellic Labs Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
