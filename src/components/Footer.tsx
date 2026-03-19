import { Instagram, Twitter, Linkedin } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import vellicLogoBg from "@/assets/vellic-logo-bg.png";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-foreground text-background pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-5%] w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none animate-float" style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.6), hsl(var(--vita-lavender-deep) / 0.3))" }} />
      <div className="absolute bottom-[10%] right-[-8%] w-72 h-72 rounded-full opacity-10 blur-3xl pointer-events-none animate-float-delayed" style={{ background: "radial-gradient(circle, hsl(var(--vita-periwinkle) / 0.5), hsl(var(--primary) / 0.2))" }} />
      <img src={vellicLogoBg} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] opacity-[0.03] pointer-events-none select-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div>
          <div className="text-2xl font-display font-bold tracking-tighter mb-6">{t.footer.brand}</div>
          <p className="text-background/50 text-sm leading-relaxed font-body">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">{t.footer.productHeading}</h4>
          <ul className="space-y-4 text-sm text-background/50 font-body">
            {t.footer.productLinks.map((link) => (
              <li key={link} className="hover:text-primary cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6">{t.footer.connectHeading}</h4>
          <div className="flex gap-4 text-background/60">
            <Instagram className="hover:text-primary cursor-pointer transition-colors" size={22} />
            <Twitter className="hover:text-primary cursor-pointer transition-colors" size={22} />
            <Linkedin className="hover:text-primary cursor-pointer transition-colors" size={22} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-background/10 text-center text-xs text-background/30 font-body">
        {t.footer.copyright}
      </div>
    </footer>
  );
};

export default Footer;
